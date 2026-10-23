// BC 相容檢查的回歸測試：CRC32、hook 探索、any-of 群組、成員備援、基準比對、全域符號、結束碼。
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkGlobals, collectHookedFunctions, compare, crc32, fingerprint, hashSource, loadBcFunctions } from './check-bc-compat.mjs';

const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'hsc-bc-hooks-'));
const write = (file, text) => {
    const target = path.join(workspace, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, text);
};
try {
    // 標準 CRC-32 檢查值；ModSDK 的 originalHash 用同一演算法，CRLF 先正規化。
    assert.equal(crc32('123456789'), 'CBF43926');
    assert.equal(hashSource('a\r\nb'), hashSource('a\nb'));

    // hook 探索：字串／樣板字面值、各種 SDK 呼叫；動態名稱要回報位置，any-of 宣告視為已涵蓋。
    write('src/a.js', "modApi.hookFunction('Alpha', 1, hook);\nmodApi.callOriginal(\"Beta\", args);\n");
    write('src/nested/b.js', "modApi.hookFunction(`Alpha`, 2, hook);\nconst n = 'X'; modApi.hookFunction(n, 1, hook);\nmodApi.hookFunction('Player.Run', 4, hook);\n");
    write('src/c.js', "// bc-compat: any-of Old New Newer\nfor (const fn of ['Old', 'New']) modApi.hookFunction(fn, 0, h);\n");
    const hooked = collectHookedFunctions(path.join(workspace, 'src'), workspace);
    assert.deepEqual([...hooked.names.keys()].sort(), ['Alpha', 'Beta', 'New', 'Newer', 'Old', 'Player.Run']);
    assert.deepEqual(hooked.names.get('Alpha').locations, ['src/a.js:1', 'src/nested/b.js:1']);
    assert.deepEqual(hooked.dynamic, ['src/nested/b.js:2'], 'any-of 檔案的動態呼叫視為已涵蓋，其他檔案仍回報');
    assert.deepEqual(hooked.groups, [['Old', 'New', 'Newer']]);

    // BC 端：頂層函式、物件／類別方法與任何位置的函式屬性；壞檔案只記錄不中斷。
    const alpha = 'function Alpha(a) {\n  return a + 1;\n}';
    write('bc/Scripts/Game.js', 'var GameVersion = "R999";\n');
    write('bc/Scripts/A.js', `${alpha}\nasync function Beta() { return 2; }\nvar Gamma = function () { return 3; };\nconst Hidden = () => 0;\n`
        + 'function CharacterCreate() { return { Run: function() { return 1; }, Other() {} }; }\n'
        + 'function New(x) { return x; }\n');
    write('bc/Screens/Room/Broken.js', 'function (((\n');
    const bc = loadBcFunctions(path.join(workspace, 'bc'));
    assert.equal(bc.gameVersion, 'R999');
    assert.equal(bc.functions.get('Alpha').hash, hashSource(alpha));
    assert.equal(bc.functions.has('Hidden'), false, '只有可被 hook 的頂層函式才收錄');
    assert.equal(bc.parseErrors.length, 1);
    assert.equal(bc.members.get('Run').length, 1);
    write('upstream/BondageClub/Scripts/A.js', alpha);
    assert.equal(loadBcFunctions(path.join(workspace, 'upstream')).functions.get('Alpha').hash, hashSource(alpha), '支援上游倉庫的目錄結構');

    // 指紋：頂層找不到的 `Player.Run` 以成員備援解析；any-of 只有全部不存在才算缺失。
    const current = fingerprint(hooked, bc);
    assert.deepEqual(Object.keys(current.functions).sort(), ['Alpha', 'Beta', 'New', 'Player.Run']);
    assert.equal(current.functions['Player.Run'].via, 'member');
    assert.deepEqual(current.missing, []);
    // 群組只記錄第一個存在的成員：Old 出現後，實際被 hook 的就變成 Old，New 不再相關。
    write('bc/Scripts/Old.js', 'function Old() {}\n');
    assert.deepEqual(Object.keys(fingerprint(hooked, loadBcFunctions(path.join(workspace, 'bc'))).functions).sort(), ['Alpha', 'Beta', 'Old', 'Player.Run']);
    fs.rmSync(path.join(workspace, 'bc/Scripts/Old.js'));
    const noneOfGroup = fingerprint({ ...hooked, groups: [['Old', 'Newer']] }, bc);
    assert.deepEqual(noneOfGroup.missing, ['any-of(Old|Newer)']);
    assert.deepEqual(fingerprint({ names: new Map([['Gone', { locations: [], direct: true }]]), groups: [] }, bc).missing, ['Gone']);

    // 基準比對：內容改變、新增、移除、缺失都算差異；any-of 缺少的成員不算。
    const baseline = { functions: current.functions };
    assert.equal(compare(baseline, current).drift, false);
    write('bc/Scripts/A.js', fs.readFileSync(path.join(workspace, 'bc/Scripts/A.js'), 'utf8').replace('a + 1', 'a + 2'));
    const changed = compare(baseline, fingerprint(hooked, loadBcFunctions(path.join(workspace, 'bc'))));
    assert.deepEqual(changed.changed.map(c => c.name), ['Alpha']);
    assert.equal(changed.drift, true);
    const smaller = { names: new Map([...hooked.names].filter(([n]) => n !== 'Beta')), groups: hooked.groups };
    assert.deepEqual(compare(baseline, fingerprint(smaller, bc)).stale, ['Beta']);
    // 仍被 hook 卻在 BC 消失的名稱只算缺失，不重複算成基準過期。
    const gone = compare({ functions: { ...baseline.functions, Gone: { hash: 'X' } } }, fingerprint({ names: new Map([...hooked.names, ['Gone', { locations: [], direct: true }]]), groups: hooked.groups }, bc));
    assert.deepEqual([gone.missing, gone.stale], [['Gone'], []]);
    assert.deepEqual(compare({ functions: {} }, current).added.sort(), ['Alpha', 'Beta', 'New', 'Player.Run']);

    // 全域符號：LEGACY 只提示、EXTERNAL 不檢查。
    const eslint = "const bcGlobals = [\n 'Player', 'bcModSdk', 'DrawCacheImage', 'Missing',\n];";
    assert.deepEqual(checkGlobals(eslint, 'var Player = {};'), { total: 4, missingGlobals: ['Missing'], legacyGone: ['DrawCacheImage'] });

    // 結束碼：缺 BC 目錄 = 2；實際專案對 fixture 比對（沒有基準檔時只做存在性檢查）。
    const script = fileURLToPath(new URL('./check-bc-compat.mjs', import.meta.url));
    assert.equal(spawnSync(process.execPath, [script], { env: { ...process.env, BC_SOURCE_DIR: '', BC_DIR: '' } }).status, 2);
    assert.equal(spawnSync(process.execPath, [script, '--bc-dir', path.join(workspace, 'nope')]).status, 2);
    assert.equal(spawnSync(process.execPath, [script, '--bogus']).status, 2);
} finally {
    fs.rmSync(workspace, { recursive: true, force: true });
}
console.log('BC compatibility checker passed: CRC32, hook discovery, any-of groups, member fallback, baseline drift, globals, exit codes.');
