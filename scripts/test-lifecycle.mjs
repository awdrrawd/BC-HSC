import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { createEffectLifecycle } from '../src/effects/lifecycle.js';
const scope = createEffectLifecycle();
const old = scope.checkpoint();
let stopped = 0;
const release = scope.onStop(() => stopped++);
scope.stop();
assert.equal(old(), false);
assert.equal(stopped, 1);
const fresh = scope.checkpoint();
assert.equal(fresh(), true);
release();
scope.stop();
assert.equal(stopped, 1);

const source = readFileSync('src/effects/run.js', 'utf8').replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');
const pending = [];
let releases = 0;
const context = vm.createContext({
    transientEffects: scope,
    CONFIG: { enabled: true, voiceEnabled: true, expression: true },
    CurrentScreen: 'ChatRoom', Player: {}, EXPRESSION_SETS: [{}],
    refreshCanvasCache() {}, pushExprEffect: () => Symbol(), popExprEffect() { releases++; },
    wait: () => new Promise(resolve => pending.push(resolve)),
    addArousal() { throw new Error('Cancelled work resumed'); },
});
vm.runInContext(source, context);
const running = vm.runInContext('runEffect("test", true)', context);
scope.stop();
assert.equal(releases, 1, 'stop releases expression immediately');
pending.shift()();
await running;
assert.equal(releases, 2, 'finally can safely repeat release');
const newer = scope.checkpoint();
assert.equal(newer(), true, 'old continuation must not stop a new session');
console.log('Lifecycle cancellation, cleanup removal and interrupted voice continuation passed.');

// Sampling must not mutate inputs or repeat entries, and only draws n times.
{
    const util = readFileSync('src/util/util.js', 'utf8');
    const fn = util.slice(util.indexOf('    function pickRandom'), util.indexOf('    // ═', util.indexOf('    function pickRandom')));
    let draws = 0;
    const ctx = vm.createContext({ randInt: (min, max) => { draws++; return max; } });
    vm.runInContext(fn, ctx);
    ctx.input = ['a', 'b', 'c', 'd'];
    assert.deepEqual([...vm.runInContext('pickRandom(input, 2)', ctx)], ['d', 'a']);
    assert.equal(draws, 2);
    assert.deepEqual(ctx.input, ['a', 'b', 'c', 'd']);
    assert.equal(new Set(vm.runInContext('pickRandom(input, 10)', ctx)).size, 4);
    assert.equal(vm.runInContext('pickRandom([], 2).length', ctx), 0);
    assert.equal(vm.runInContext('pickRandom(input, 0).length', ctx), 0);
}

// Loading inside a room must still install leave/re-entry handlers.
for (const initialScreen of ['ChatRoom', 'MainHall']) {
    const init = readFileSync('src/core/core-init.js', 'utf8');
    const fn = init.slice(init.indexOf('    function waitForChatRoom'), init.indexOf('    // ═', init.indexOf('    function waitForChatRoom')));
    const hooks = new Map();
    let starts = 0, stops = 0, publishes = 0;
    const ctx = vm.createContext({
        CurrentScreen: initialScreen,
        modApi: { hookFunction: (name, priority, handler) => hooks.set(name, handler) },
        clearBCXCache() {}, setupDOMObserver() { starts++; }, stopDOMObserver() { stops++; },
        publishSharedSettings() { publishes++; }, removePanel() {}, isForced: () => false,
    });
    vm.runInContext(fn + '\nwaitForChatRoom();', ctx);
    assert.equal(hooks.size, 2);
    const run = () => hooks.get('ChatRoomRun')([], () => 42);
    assert.equal(run(), 42);
    run();
    assert.equal(starts, 1);
    hooks.get('ChatRoomLeave')([], () => 42);
    assert.equal(stops, 1);
    run();
    assert.equal(starts, 2);
    assert.equal(publishes, 2);
}

// Observer retries are owned by the observer, so leaving cannot resurrect it.
{
    const panel = readFileSync('src/ui/panel.js', 'utf8');
    const pending = new Map();
    let id = 0;
    const ctx = vm.createContext({
        document: { getElementById: () => null, querySelector: () => null },
        setTimeout(fn) { pending.set(++id, fn); return id; }, clearTimeout(id) { pending.delete(id); },
    });
    const state = panel.slice(panel.indexOf('    let _domObserver'), panel.indexOf('    // ── 白名單'));
    const setup = panel.slice(panel.indexOf('    function setupDOMObserver'), panel.indexOf('export {'));
    vm.runInContext(state + setup + '\nsetupDOMObserver(); setupDOMObserver();', ctx);
    assert.equal(pending.size, 1, 'repeated setup keeps a single retry');
    vm.runInContext('stopDOMObserver()', ctx);
    assert.equal(pending.size, 0, 'leave/unload cancels pending setup');
}

// Headshots render without image encoding and stop scheduling after cancellation.
{
    const source = readFileSync('src/effects/character-fx.js', 'utf8').replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');
    const scope = createEffectLifecycle();
    const frames = [];
    const nodes = [];
    let draws = 0;
    const ctx = vm.createContext({
        transientEffects: scope, createExpressionState: () => ({}),
        Player: { Canvas: { width: 500 } }, HSC_Z: { base: 1 },
        document: { createElement(tag) {
            assert.equal(tag, 'canvas');
            const el = { style: {}, remove() { this.removed = true; }, getContext: () => ({ clearRect() {}, drawImage() { draws++; } }) };
            nodes.push(el); return el;
        } },
        getCenterHeadshotGeom: () => ({ cx: 100, cy: 100, size: 300 }),
        getOverlay: () => ({ appendChild() {} }), requestAnimationFrame: fn => frames.push(fn),
        setTimeout() {}, clearInterval() {},
    });
    vm.runInContext(source + '\nshowCenterHeadshot(4000, true);', ctx);
    assert.equal(draws, 1);
    for (const fn of frames.splice(0)) fn();
    assert.equal(draws, 2);
    scope.stop();
    for (const fn of frames.splice(0)) fn();
    assert.equal(draws, 2);
    assert.equal(frames.length, 0);
    assert.equal(nodes[0].removed, true);
}
console.log('Runtime cleanup passed: partial sampling, room re-entry, observer retry cancellation, direct-canvas headshot shutdown.');
