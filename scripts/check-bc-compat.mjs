// 對照 Bondage Club 原始碼，檢查 HSC 依賴的 BC 符號是否仍存在。
//   用法：BC_SOURCE_DIR=<BC repo 根目錄> node scripts/check-bc-compat.mjs [--json 報告檔]
//   --json：另外輸出機器可讀報告（供 CI 的通知腳本使用）
// - hookFunction 掛鉤的函式缺失 → 失敗（掛鉤會直接失效）。
// - eslint.config.js 的 bcGlobals 缺失 → 警告（讀取到 undefined 才會出問題，需人工確認）。
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const bcDir = process.env.BC_SOURCE_DIR;
if (!bcDir || !existsSync(join(bcDir, 'Scripts'))) {
    console.error('請設定 BC_SOURCE_DIR 指向 Bondage Club 原始碼根目錄（需含 Scripts/）');
    process.exit(2);
}
// BC 本體不定義、由第三方函式庫或 mod SDK 提供的符號
const EXTERNAL = new Set(['bcModSdk', 'LZString']);
// HSC 以 typeof 防護使用、BC 較新版已移除的舊符號（R133 起改為 DrawImageCache）；只提示，不視為錯誤
const LEGACY = new Set(['DrawCacheImage']);

const walk = (dir, out = []) => {
    for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) walk(p, out);
        else if (name.endsWith('.js')) out.push(p);
    }
    return out;
};
const bcSource = ['Scripts', 'Screens'].filter(d => existsSync(join(bcDir, d)))
    .flatMap(d => walk(join(bcDir, d))).map(f => readFileSync(f, 'utf8')).join('\n');
const version = (bcSource.match(/\bvar GameVersion\s*=\s*"([^"]+)"/) || [])[1] || '未知';

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasGlobal = n => new RegExp(`(^|[\\s;])(async\\s+)?function\\s+${esc(n)}\\b|(^|[\\s;])(var|let|const|class)\\s+${esc(n)}\\b|^${esc(n)}\\s*=`, 'm').test(bcSource);
const hasMember = n => new RegExp(`(^|[\\s,{])${esc(n)}\\s*(:|=)\\s*(async\\s+)?(function|\\()|(^|\\s)(async\\s+)?${esc(n)}\\s*\\([^)]*\\)\\s*\\{`, 'm').test(bcSource);

const srcFiles = walk('src');
const hooks = new Set();
for (const f of srcFiles) {
    for (const m of readFileSync(f, 'utf8').matchAll(/hookFunction\(\s*['"]([\w.]+)['"]/g)) hooks.add(m[1]);
}
const eslintCfg = readFileSync('eslint.config.js', 'utf8');
const globalsBlock = (eslintCfg.match(/const bcGlobals = \[([\s\S]*?)\];/) || [])[1] || '';
const bcGlobals = [...globalsBlock.matchAll(/'([\w]+)'/g)].map(m => m[1]);
if (!hooks.size || !bcGlobals.length) { console.error('解析不到 hook 清單或 bcGlobals，請更新本腳本'); process.exit(2); }

const missingHooks = [...hooks].filter(h => {
    const parts = h.split('.');
    return parts.length === 1 ? !hasGlobal(h) : !hasMember(parts[parts.length - 1]);
});
const absent = bcGlobals.filter(g => !EXTERNAL.has(g) && !hasGlobal(g));
const missingGlobals = absent.filter(g => !LEGACY.has(g));
const legacyGone = absent.filter(g => LEGACY.has(g));

const jsonIdx = process.argv.indexOf('--json');
if (jsonIdx > 0 && process.argv[jsonIdx + 1]) {
    writeFileSync(process.argv[jsonIdx + 1], JSON.stringify({
        version, hookCount: hooks.size, globalCount: bcGlobals.length,
        missingHooks, missingGlobals, legacyGone,
    }, null, 2));
}
console.log(`BC ${version}：檢查 ${hooks.size} 個 hook、${bcGlobals.length} 個全域符號`);
if (legacyGone.length) console.log(`ℹ️ 舊版相容符號在此 BC 版本已不存在（HSC 以 typeof 防護略過）：${legacyGone.join(', ')}`);
if (missingGlobals.length) console.warn(`⚠️ 找不到的全域符號（請確認是否改名／移除）：${missingGlobals.join(', ')}`);
if (missingHooks.length) {
    console.error(`❌ 找不到被 hook 的函式：${missingHooks.join(', ')}`);
    process.exit(1);
}
console.log('所有 hook 目標都存在。');
