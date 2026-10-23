// 對照 Bondage Club 原始碼，檢查 HSC 掛鉤的 BC 函式是否仍存在、內容是否改變。
//   用法：
//     BC_SOURCE_DIR=<BC 原始碼> node scripts/check-bc-compat.mjs [--json 報告檔]      對照已提交的基準
//     node scripts/check-bc-compat.mjs --bc-dir <BC 原始碼> --update                  以該原始碼重寫基準
//   其他參數：--baseline <檔>、--report <純文字報告檔>。BC 原始碼可為程式碼鏡像（根目錄有 Scripts/、Screens/），
//   或上游倉庫（內含 BondageClub/）。
//
// 檢查內容：
// - hookFunction／patchFunction／removePatches／callOriginal／getOriginalHash 使用的 BC 函式：
//     找不到 → 失敗（掛鉤會直接失效）；內容雜湊與基準不同 → 提醒檢視掛鉤（參考 AEE 的做法）。
//   雜湊與 ModSDK 的 originalHash 相同（函式原始碼 CRC32，CRLF 先正規化），遊戲提供同一份原始碼時兩者一致。
//   `物件.方法`（例如 Player.GetBlurLevel）先找頂層物件，找不到再找任何位置的同名函式屬性，只用於偵測變動。
//   名稱在執行期組出來的 hook 不能解析；在呼叫處旁邊加註解宣告候選名稱即可納入：
//       // bc-compat: any-of NameA NameB NameC     （依列出順序，第一個存在的就是實際被 hook 的目標，只記錄它的雜湊；全部不存在才算缺失）
// - eslint.config.js 的 bcGlobals 缺失 → 警告（讀取到 undefined 才會出問題，需人工確認）。
//
// 結束碼：0 = 一致、1 = 有差異（交給 issue 通知）、2 = 用法或解析錯誤（檢查本身壞了）。
// 沒有基準檔時只做存在性檢查（和舊版相同），並提示用 --update 建立。
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'acorn';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const DEFAULT_BASELINE = path.join(ROOT, 'scripts', 'bc-compat-baseline.json');
const HOOK_CALL = /\b(hookFunction|patchFunction|removePatches|callOriginal|getOriginalHash)\(\s*(['"`])([^'"`\n]+)\2/g;
const DYNAMIC_CALL = /\b(?:hookFunction|patchFunction|removePatches|callOriginal|getOriginalHash)\(\s*(?!['"`)])/g;
const ANY_OF = /\/\/\s*bc-compat:\s*any-of\s+([\w.]+(?:[ \t]+[\w.]+)*)/g;
// BC 本體不定義、由第三方函式庫或 mod SDK 提供的符號
const EXTERNAL = new Set(['bcModSdk', 'LZString']);
// HSC 以 typeof 防護使用、BC 較新版已移除的舊符號（R133 起改為 DrawImageCache）；只提示，不視為錯誤
const LEGACY = new Set(['DrawCacheImage']);

const posix = file => file.split(path.sep).join('/');
const FUNCTION_NODE = /^(?:Function|ArrowFunction)Expression$/;

function walk(directory) {
    if (!fs.existsSync(directory)) return [];
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const file = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(file) : [file];
    });
}

/** ModSDK 計算 originalHash 的 CRC32（大寫 8 位十六進位）。 */
export function crc32(text) {
    let crc = -1;
    for (const byte of new TextEncoder().encode(text)) {
        let value = 255 & (crc ^ byte);
        for (let bit = 0; bit < 8; bit++) value = 1 & value ? -306674912 ^ value >>> 1 : value >>> 1;
        crc = crc >>> 8 ^ value;
    }
    return ((-1 ^ crc) >>> 0).toString(16).padStart(8, '0').toUpperCase();
}
export const hashSource = source => crc32(source.replaceAll('\r\n', '\n'));

/** HSC 掛鉤／呼叫的 BC 函式名稱，附使用位置；any-of 群組與無法解析的動態呼叫另外回報。 */
export function collectHookedFunctions(srcDir, rootDir = path.dirname(srcDir)) {
    const names = new Map();
    const groups = [];
    const dynamic = [];
    for (const file of walk(srcDir)) {
        const relative = posix(path.relative(rootDir, file));
        if (!/\.(?:[cm]?[jt]sx?)$/.test(file)) continue;
        const text = fs.readFileSync(file, 'utf8');
        const lineOf = index => text.slice(0, index).split('\n').length;
        const add = (name, index, group) => {
            const entry = names.get(name) ?? { locations: [] };
            entry.locations.push(`${relative}:${lineOf(index)}`);
            if (group !== undefined) (entry.groups ??= new Set()).add(group);
            names.set(name, entry);
        };
        let declared = 0;
        for (const match of text.matchAll(ANY_OF)) {
            const members = match[1].trim().split(/\s+/);
            const group = groups.push(members) - 1;
            declared++;
            for (const name of members) add(name, match.index, group);
        }
        for (const match of text.matchAll(HOOK_CALL)) {
            add(match[3], match.index);
            names.get(match[3]).direct = true;
        }
        // 已用 any-of 宣告的檔案，其動態呼叫視為已涵蓋。
        if (!declared) for (const match of text.matchAll(DYNAMIC_CALL)) dynamic.push(`${relative}:${lineOf(match.index)}`);
    }
    return { names, groups, dynamic };
}

function parseSource(text) {
    try {
        return parse(text, { ecmaVersion: 'latest', sourceType: 'script', allowHashBang: true, locations: true });
    } catch (scriptError) {
        try {
            return parse(text, { ecmaVersion: 'latest', sourceType: 'module', allowHashBang: true, locations: true });
        } catch {
            throw scriptError;
        }
    }
}

function visit(node, callback) {
    if (!node || typeof node.type !== 'string') return;
    callback(node);
    for (const key of Object.keys(node)) {
        if (key === 'loc') continue;
        const child = node[key];
        if (Array.isArray(child)) for (const item of child) visit(item, callback);
        else if (child && typeof child === 'object') visit(child, callback);
    }
}

/** BC 頂層函式（可被 hook 的名稱）、頂層物件／類別方法，以及任何位置的函式屬性（供 `Player.x` 備援）。 */
export function loadBcFunctions(bcDir) {
    const base = fs.existsSync(path.join(bcDir, 'Scripts')) ? bcDir : path.join(bcDir, 'BondageClub');
    const files = [...walk(path.join(base, 'Scripts')), ...walk(path.join(base, 'Screens'))]
        .filter(file => file.endsWith('.js')).sort();
    if (!files.length) throw new Error(`在 ${bcDir} 底下找不到 Scripts/ 或 Screens/ 的 JavaScript`);
    const functions = new Map();
    const members = new Map();
    const duplicates = [];
    const parseErrors = [];
    const sources = [];
    const register = (name, source, file, line) => {
        const known = functions.get(name);
        if (known) duplicates.push(`${name}: ${known.file} 與 ${file}`);
        functions.set(name, { hash: hashSource(source), file, line });
    };
    for (const file of files) {
        const relative = posix(path.relative(base, file));
        const text = fs.readFileSync(file, 'utf8');
        sources.push(text);
        let ast;
        try {
            ast = parseSource(text);
        } catch (error) {
            parseErrors.push(`${relative}: ${error.message}`);
            continue;
        }
        for (const node of ast.body) {
            if (node.type === 'ClassDeclaration' && node.id) {
                for (const member of node.body.body) {
                    if (member.type === 'MethodDefinition' && member.kind === 'method' && !member.computed && member.key.type === 'Identifier') {
                        register(`${node.id.name}.${member.key.name}`, text.slice(member.start, member.end), relative, member.loc.start.line);
                    }
                }
            } else if (node.type === 'VariableDeclaration') {
                for (const declaration of node.declarations) {
                    if (declaration.id.type !== 'Identifier' || declaration.init?.type !== 'ObjectExpression') continue;
                    for (const property of declaration.init.properties) {
                        if (property.type !== 'Property' || property.kind !== 'init' || property.computed || property.key.type !== 'Identifier') continue;
                        if (property.method || FUNCTION_NODE.test(property.value.type)) {
                            register(`${declaration.id.name}.${property.key.name}`, text.slice(property.start, property.end), relative, property.loc.start.line);
                        }
                    }
                }
            }
            if (node.type === 'FunctionDeclaration' && node.id) {
                register(node.id.name, text.slice(node.start, node.end), relative, node.loc.start.line);
            } else if (node.type === 'VariableDeclaration' && node.kind === 'var') {
                for (const declaration of node.declarations) {
                    const init = declaration.init;
                    if (declaration.id.type === 'Identifier' && init && FUNCTION_NODE.test(init.type)) {
                        register(declaration.id.name, text.slice(init.start, init.end), relative, node.loc.start.line);
                    }
                }
            }
        }
        // `Player.GetBlurLevel` 這類成員在 CharacterCreate 內部的物件字面值裡，頂層找不到。
        visit(ast, node => {
            const named = node.type === 'Property' && node.kind === 'init' && !node.computed && node.key.type === 'Identifier'
                && (node.method || FUNCTION_NODE.test(node.value.type));
            const method = node.type === 'MethodDefinition' && node.kind === 'method' && !node.computed && node.key.type === 'Identifier';
            if (!named && !method) return;
            const list = members.get(node.key.name) ?? [];
            list.push({ hash: hashSource(text.slice(node.start, node.end)), file: relative, line: node.loc.start.line });
            members.set(node.key.name, list);
        });
    }
    const versionFile = path.join(base, 'Scripts/Game.js');
    const versionSource = fs.existsSync(versionFile) ? fs.readFileSync(versionFile, 'utf8') : sources.join('\n');
    const gameVersion = /\bvar\s+GameVersion\s*=\s*["']([^"']+)["']/.exec(versionSource)?.[1] ?? 'unknown';
    return { functions, members, gameVersion, duplicates, parseErrors, fileCount: files.length, source: sources.join('\n') };
}

function locate(name, bc) {
    const direct = bc.functions.get(name);
    if (direct) return direct;
    if (!name.includes('.')) {
        // 延伸道具的 Load/Draw/Click 由 BC 於執行期從 `<Name>Hook` 函式產生。
        const hook = bc.functions.get(`${name}Hook`);
        return hook ? { ...hook, via: 'Hook' } : undefined;
    }
    const list = bc.members.get(name.split('.').pop());
    if (!list?.length) return undefined;
    if (list.length === 1) return { hash: list[0].hash, file: list[0].file, via: 'member' };
    // 同名成員多處定義：以全部內容的雜湊代表，任何一處改變都會被偵測到。
    return { hash: crc32(list.map(item => item.hash).sort().join('|')), file: list[0].file, via: `member*${list.length}` };
}

/**
 * 依目前掛鉤與 BC 原始碼，基準應有的內容。
 * any-of 群組只記錄第一個存在的成員（程式實際 hook 的那個），全部不存在才算缺失。
 */
export function fingerprint(hooked, bc) {
    const functions = {};
    const missing = [];
    const record = (name, found) => {
        functions[name] = { hash: found.hash, file: found.file, ...(found.via ? { via: found.via } : {}) };
    };
    for (const name of [...hooked.names.keys()].sort()) {
        if (!hooked.names.get(name).direct) continue;
        const found = locate(name, bc);
        if (found) record(name, found);
        else missing.push(name);
    }
    for (const members of hooked.groups) {
        const name = members.find(candidate => locate(candidate, bc));
        if (name) record(name, locate(name, bc));
        else missing.push(`any-of(${members.join('|')})`);
    }
    return { functions, missing };
}

export function compare(baseline, current) {
    const known = baseline?.functions ?? {};
    const changed = [];
    const unchanged = [];
    const added = [];
    for (const [name, now] of Object.entries(current.functions)) {
        if (!known[name]) added.push(name);
        else if (known[name].hash !== now.hash) changed.push({ name, file: now.file, was: known[name].hash, now: now.hash });
        else unchanged.push(name);
    }
    const hookedNow = new Set([...Object.keys(current.functions), ...current.missing]);
    const stale = Object.keys(known).filter(name => !hookedNow.has(name));
    const drift = changed.length + current.missing.length + added.length + stale.length > 0;
    return { changed, unchanged, added, stale, missing: current.missing, drift };
}

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasGlobal = (source, n) => new RegExp(`(^|[\\s;])(async\\s+)?function\\s+${esc(n)}\\b|(^|[\\s;])(var|let|const|class)\\s+${esc(n)}\\b|^${esc(n)}\\s*=`, 'm').test(source);

/** eslint.config.js 的 bcGlobals 在 BC 原始碼裡是否仍有宣告。 */
export function checkGlobals(eslintText, bcSource) {
    const block = (eslintText.match(/const bcGlobals = \[([\s\S]*?)\];/) || [])[1] || '';
    const globals = [...block.matchAll(/'([\w]+)'/g)].map(m => m[1]);
    const absent = globals.filter(g => !EXTERNAL.has(g) && !hasGlobal(bcSource, g));
    return {
        total: globals.length,
        missingGlobals: absent.filter(g => !LEGACY.has(g)),
        legacyGone: absent.filter(g => LEGACY.has(g)),
    };
}

export function renderReport({ result, baseline, bc, hooked, commit, globals }) {
    const lines = [];
    const where = name => (hooked.names.get(name)?.locations ?? []).slice(0, 3).join(', ');
    lines.push(`BC 原始碼：${bc.gameVersion}${commit ? `（${commit.slice(0, 12)}）` : ''}；基準：${baseline ? `${baseline.gameVersion}${baseline.commit ? `（${baseline.commit.slice(0, 12)}）` : ''}` : '尚未建立'}。`);
    lines.push(`檢查 ${result.unchanged.length + result.changed.length + result.missing.length + result.added.length} 個 hook 目標、${globals.total} 個全域符號。`);
    if (result.changed.length) {
        lines.push('', `BC 函式內容自基準後有變動（${result.changed.length}）——請檢視這些 hook：`);
        for (const item of result.changed) lines.push(`- ${item.name}（${item.file}）${item.was} -> ${item.now}；使用位置 ${where(item.name)}`);
    }
    if (result.missing.length) {
        lines.push('', `HSC 有 hook 但 BC 已找不到（${result.missing.length}）——這些 hook 會失效：`);
        for (const name of result.missing) lines.push(`- ${name}；使用位置 ${where(name.replace(/^any-of\((.*?)\|.*$/, '$1').replace(/^any-of\((.*)\)$/, '$1'))}`);
    }
    if (result.added.length) {
        lines.push('', `已 hook 但基準尚未收錄（${result.added.length}）：`);
        for (const name of result.added) lines.push(`- ${name}；使用位置 ${where(name)}`);
    }
    if (result.stale.length) {
        lines.push('', `基準有、HSC 已不再 hook（${result.stale.length}）：`);
        for (const name of result.stale) lines.push(`- ${name}`);
    }
    if (globals.missingGlobals.length) lines.push('', `⚠️ 找不到的全域符號（請確認是否改名／移除）：${globals.missingGlobals.join(', ')}`);
    if (globals.legacyGone.length) lines.push('', `ℹ️ 舊版相容符號在此 BC 版本已不存在（HSC 以 typeof 防護略過）：${globals.legacyGone.join(', ')}`);
    const duplicates = bc.duplicates.filter(item => hooked.names.has(item.split(':')[0]));
    if (duplicates.length) lines.push('', `被 hook 的函式在 BC 內重複定義（後載入者生效）：${duplicates.join('；')}`);
    if (bc.parseErrors.length) lines.push('', `有 ${bc.parseErrors.length} 個 BC 檔案無法解析：${bc.parseErrors.join('；')}`);
    if (!result.drift) lines.push('', '所有 hook 目標都與基準一致。');
    return `${lines.join('\n')}\n`;
}

function parseArguments(argv) {
    const options = { update: false, bcDir: process.env.BC_SOURCE_DIR || process.env.BC_DIR, baseline: DEFAULT_BASELINE, report: undefined, json: undefined };
    for (let index = 0; index < argv.length; index++) {
        const flag = argv[index];
        const value = () => {
            if (index + 1 >= argv.length) throw new Error(`${flag} 需要一個值`);
            return argv[++index];
        };
        if (flag === '--update') options.update = true;
        else if (flag === '--json') options.json = path.resolve(value());
        else if (flag === '--bc-dir') options.bcDir = value();
        else if (flag === '--baseline') options.baseline = path.resolve(value());
        else if (flag === '--report') options.report = path.resolve(value());
        else throw new Error(`未知的參數 ${flag}`);
    }
    if (!options.bcDir) throw new Error('請設定 BC_SOURCE_DIR 或以 --bc-dir 指向 Bondage Club 原始碼根目錄（需含 Scripts/）');
    options.bcDir = path.resolve(options.bcDir);
    if (!fs.existsSync(path.join(options.bcDir, 'Scripts')) && !fs.existsSync(path.join(options.bcDir, 'BondageClub', 'Scripts'))) {
        throw new Error(`${options.bcDir} 底下找不到 Scripts/`);
    }
    return options;
}

function gitCommit(directory) {
    try {
        return execFileSync('git', ['-C', directory, 'rev-parse', 'HEAD'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch {
        return undefined;
    }
}

export function main(argv) {
    let options;
    try {
        options = parseArguments(argv);
    } catch (error) {
        console.error(error.message);
        return 2;
    }
    const hooked = collectHookedFunctions(path.join(ROOT, 'src'), ROOT);
    const bc = loadBcFunctions(options.bcDir);
    const current = fingerprint(hooked, bc);
    const commit = gitCommit(options.bcDir);
    const eslintText = fs.readFileSync(path.join(ROOT, 'eslint.config.js'), 'utf8');
    const globals = checkGlobals(eslintText, bc.source);
    if (!hooked.names.size || !globals.total) {
        console.error('解析不到 hook 清單或 bcGlobals，請更新本腳本');
        return 2;
    }
    if (hooked.dynamic.length) console.warn(`⚠️ 名稱在執行期組出的 hook 無法檢查（請在旁邊加 "// bc-compat: any-of 名稱…"）：${hooked.dynamic.join(', ')}`);
    if (bc.parseErrors.length) console.warn(`無法解析：${bc.parseErrors.join('；')}`);
    if (options.update) {
        const note = current.missing.length ? `（BC 沒有且未收錄：${current.missing.join(', ')}）` : '';
        const baseline = { gameVersion: bc.gameVersion, ...(commit ? { commit } : {}), functions: current.functions };
        fs.writeFileSync(options.baseline, `${JSON.stringify(baseline, null, 2)}\n`);
        console.log(`已為 ${bc.gameVersion} 寫入基準：${Object.keys(current.functions).length} 個函式${note}。`);
        return current.missing.length ? 1 : 0;
    }
    const baseline = fs.existsSync(options.baseline) ? JSON.parse(fs.readFileSync(options.baseline, 'utf8')) : undefined;
    const result = baseline
        ? compare(baseline, current)
        // 沒有基準時只看存在性（舊版行為）。
        : { changed: [], unchanged: Object.keys(current.functions), added: [], stale: [], missing: current.missing, drift: current.missing.length > 0 };
    const report = renderReport({ result, baseline, bc, hooked, commit, globals });
    if (options.report) fs.writeFileSync(options.report, report);
    if (options.json) {
        fs.writeFileSync(options.json, JSON.stringify({
            version: bc.gameVersion,
            baselineVersion: baseline?.gameVersion ?? null,
            hookCount: Object.keys(current.functions).length + current.missing.length,
            globalCount: globals.total,
            missingHooks: result.missing,
            changedHooks: result.changed,
            addedHooks: result.added,
            staleHooks: result.stale,
            missingGlobals: globals.missingGlobals,
            legacyGone: globals.legacyGone,
        }, null, 2));
    }
    console.log(report);
    if (!baseline) console.log('尚無基準檔；確認目前 BC 版本正常後，執行 --update 建立，之後才能偵測函式內容變動。');
    if (bc.parseErrors.length && result.missing.length) return 2;
    return result.drift ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) process.exitCode = main(process.argv.slice(2));
