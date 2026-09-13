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
