import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createPreferenceLayout, PREF_LAYOUT } from '../src/ui/preference-layout.js';
const configSource = readFileSync(new URL('../src/core/config.js', import.meta.url), 'utf8')
    .replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');

const source = readFileSync(new URL('../src/ui/preference.js', import.meta.url), 'utf8')
    .replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');
const context = vm.createContext({
    createPreferenceLayout, PREF_LAYOUT,
    WL_TOKENS: ['$owner', '$lover', '$white', '$friend'],
    saveSettings() {}, publishSharedSettings() {},
    MainCanvas: { textAlign: 'left' }, ui: key => key,
    HSC_LANGS: ['auto'], HSC_LANG_FLAGS: {}, HSC_LANG_NAMES: {}, SOUND_DEFAULTS: {},
    DrawText() {}, DrawTextFit() {}, DrawTextWrap() {},
});
vm.runInContext(configSource + '\nglobalThis.CONFIG = CONFIG;', context);
vm.runInContext(source + '\nglobalThis.ext = EXT;', context);
const ext = context.ext;
let controls = [];
for (const method of ['btn', 'toggle', 'input', 'select', 'slider', 'colorBtn']) {
    ext[method] = (...args) => {
        if (['input', 'select'].includes(method)) args.shift();
        const [x, top, width, height] = args;
        controls.push({ method, x, top, width, height: method === 'slider' ? 40 : height, args });
    };
}
ext.title = () => {};
ext.sep = () => {};
for (const tab of ['basic', 'voice', 'daily', 'state', 'texts', 'expr', 'sounds', 'texts_remote']) {
    for (const expanded of [false, true]) {
        context.CONFIG.autoWake = expanded;
        context.CONFIG.hypnoExtend = expanded;
        ext.remote = { cats: [{ key: 'status', label: 'Status', editable: true, data: [] }], onSave() {} };
        ext._contentBottom = 0;
        controls = [];
        ext['_run_' + tab]();
        assert.ok(controls.length, tab);
        for (const c of controls) {
            assert.ok(Number.isFinite(c.top), `${tab}: invalid position`);
            assert.ok(c.top >= 200, `${tab}: above content area`);
            assert.ok(c.top + c.height <= ext._contentBottom, `${tab}: scroll extent excludes control`);
            assert.ok(c.x + c.width <= 1300, `${tab}: overlaps scrollbar`);
        }
        const rows = [...new Set(controls.map(c => c.top))].sort((a, b) => a - b);
        for (let i = 1; i < rows.length; i++) {
            const previousBottom = Math.max(...controls.filter(c => c.top === rows[i - 1]).map(c => c.top + c.height));
            assert.ok(rows[i] - previousBottom >= PREF_LAYOUT.rowGap, `${tab}: insufficient row gap`);
        }
        if (tab === 'basic') {
            assert.ok(controls.every(c => c.height === PREF_LAYOUT.rowHeight));
        }
    }
}
console.log('Preference layout passed: eight forms, expanded/collapsed state, row spacing, bounds, scroll extent.');

controls = [];
context.CONFIG.whitelist = [12345];
ext._inputs['hsc-whitelist'] = { value: '12345' };
ext._run_basic();
const shortcuts = controls.filter(c => c.method === 'btn' && context.WL_TOKENS.includes(c.args[6]));
assert.equal(shortcuts.length, 4);
for (const shortcut of shortcuts) {
    shortcut.args[7]();
    shortcut.args[7]();
}
assert.deepEqual(Array.from(context.CONFIG.whitelist), [12345, '$owner', '$lover', '$white', '$friend']);
assert.equal(ext._inputs['hsc-whitelist'].value, '12345, $owner, $lover, $white, $friend');
console.log('Whitelist shortcuts passed: all four tokens, duplicates ignored, member numbers retained, input updated.');
