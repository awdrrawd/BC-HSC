// Regression tests for the review findings (S1 [Voice] spoof, S2 ruined orgasm, S3 privacy, S4 input bounds, P1 pruning)
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { safeDisplayName, cleanStringList, clampNumber } from '../src/util/text.js';

const read = f => readFileSync(new URL('../' + f, import.meta.url), 'utf8');
const between = (src, from, to) => src.slice(src.indexOf(from), to ? src.indexOf(to) : undefined);

// ── S1: HSC's own printChat output must never be re-parsed as a trigger ──
{
    const panel = read('src/ui/panel.js');
    const run = read('src/effects/run.js');
    const triggered = [];
    const ctx = vm.createContext({
        CONFIG: { wakeWords: [], triggerWords: [] }, Player: { MemberNumber: 1 },
        triggerVoiceEffect: t => triggered.push(t), extractChatText: () => '', wake() {}, isTriggerAllowed: () => true,
    });
    vm.runInContext(between(run, 'function parseVoiceText', 'export {') + between(panel, 'function getNodeSender', 'function setupDOMObserver') + ';globalThis.h = handleChatNode;', ctx);
    const node = (text, owned) => ({
        classList: { contains: c => c === 'ChatMessage' || c === 'ChatMessageLocalMessage' },
        dataset: owned ? { hscOwned: '1' } : {}, textContent: text, querySelector: () => null, closest: () => null,
    });
    ctx.h(node('🌀 HSC　👁 [Voice] pwn is viewing your HSC text', true));
    assert.equal(triggered.length, 0, 'HSC-owned local message must not trigger');
    ctx.h(node('[Voice] 【Hypno: relax】', false));
    assert.deepEqual(triggered, ['relax'], 'genuine local [Voice] message still triggers');

    // printChat really tags its node
    const cmds = read('src/core/commands.js');
    let made;
    const dctx = vm.createContext({
        document: { getElementById: () => ({ appendChild: n => { made = n; }, scrollTop: 0, scrollHeight: 0 }),
            createElement: () => ({ style: {}, dataset: {}, append() {}, remove() {}, className: '' }), createTextNode: t => t },
        Object, String, setTimeout: () => 0,
    });
    vm.runInContext(between(cmds, 'function printChat', 'function handleHSCCommand'), dctx);
    vm.runInContext("printChat('x')", dctx);
    assert.equal(made.dataset.hscOwned, '1', 'printChat must tag its nodes');
}

// ── S4: everything that arrives from other players is sanitized/bounded ──
assert.equal(safeDisplayName('[Voice] 【Hypno: x】'), 'Voice Hypno: x');
assert.ok(!/[[\]【】]/.test(safeDisplayName('a[b]c【d】')));
assert.equal(safeDisplayName('\u202eevil\u0000'), 'evil');
assert.equal(safeDisplayName('x'.repeat(500)).length, 40);
assert.equal(safeDisplayName(''), '?');
assert.deepEqual(cleanStringList(['  a ', '', 5, {}, 'b']), ['a', 'b']);
assert.equal(cleanStringList(new Array(1000).fill('x')).length, 200);
assert.equal(cleanStringList(['y'.repeat(9999)])[0].length, 500);
assert.deepEqual(cleanStringList('nope'), []);
assert.equal(clampNumber(1e12, 500, 30000), 30000);
assert.equal(clampNumber('abc', 0.1, 3, 1), 1);
assert.equal(clampNumber(NaN, 0.1, 3, 1), 1);

// ── S2: ruined/failed orgasm (OrgasmStage != 2) must not fire the climax effect ──
{
    const hooks = read('src/core/hooks.js').replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');
    let handler = null, fired = 0;
    const ctx = vm.createContext({
        CONFIG: { climax: true }, CurrentScreen: 'ChatRoom', window: { ActivityOrgasmStart() {} },
        modApi: { hookFunction: (_n, _p, h) => { handler = h; } },
        effectScale: () => 1, triggerClimaxEffect: () => { fired++; }, triggerPinkFlash() {},
        setTimeout: fn => { fn(); return 0; }, setInterval: () => 0, clearInterval() {},
        _charAnchor: {}, _charDrawPos: {}, playerDrawPos: {}, pruneStaleCharPositions() {},
        Date, Object, Set, console,
    });
    vm.runInContext(hooks + ';globalThis.hookOrgasmStage = hookOrgasmStage;', ctx);
    ctx.hookOrgasmStage();
    const mk = stage => [{ IsPlayer: () => true, ArousalSettings: { OrgasmStage: stage } }];
    handler(mk(0), a => a);   // ruined / failed
    handler(mk(1), a => a);   // resisting
    assert.equal(fired, 0, 'no climax effect unless OrgasmStage === 2');
    handler(mk(2), a => a);
    assert.equal(fired, 1, 'real orgasm still fires the climax effect');
}

// ── S3: public snapshot never expands the private $friend / $white lists ──
{
    const panel = read('src/ui/panel.js');
    const ctx = vm.createContext({
        CONFIG: { whitelist: ['$owner', '$friend', '$white', 42] },
        Player: { Ownership: { MemberNumber: 7 }, FriendList: [11, 12], WhiteList: [21], Lovership: [] },
    });
    vm.runInContext(between(panel, 'function getOwnerNumbers', 'const WL_TOKENS').replace(/^\s*\/\/ 白名單.*$/m, '')
        + ';globalThis.r = resolveWhitelistNumbers;', ctx);
    assert.deepEqual([...ctx.r()].sort((a, b) => a - b), [7, 11, 12, 21, 42], 'live check still expands everything');
    assert.deepEqual([...ctx.r({ publicOnly: true })].sort((a, b) => a - b), [7, 42], 'public snapshot excludes private lists');
}

// ── P1: per-member position tables are pruned ──
{
    const geo = read('src/util/geometry.js');
    const ctx = vm.createContext({ _charDrawPos: { 1: { t: 0 }, 2: { t: 99_000 } }, _charAnchor: { 1: { t: 0 }, 3: { t: 100_000 } }, Date, Object });
    vm.runInContext(between(geo, 'function pruneStaleCharPositions', '// ★ 專用定位函數') + ';pruneStaleCharPositions(60000, 100000);', ctx);
    assert.deepEqual(Object.keys(ctx._charDrawPos), ['2']);
    assert.deepEqual(Object.keys(ctx._charAnchor), ['3']);
}
console.log('Security/regression tests passed: [Voice] spoof, ruined orgasm, whitelist privacy, remote-input bounds, map pruning.');
