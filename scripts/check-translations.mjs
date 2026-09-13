import { readdirSync, readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const dictionaries = {};
for (const file of readdirSync('Translation').filter(f => f.endsWith('.js'))) {
    const lang = file.slice(0, -3);
    const entry = dictionaries[lang] = {};
    const Liko = {};
    for (const [engine, kind] of [['__Sys_i18n__', 'ui'], ['__Sys_L10N__', 'chat']]) {
        Liko[engine] = { register(_ns, data) { entry[kind] = data; } };
    }
    vm.runInNewContext(readFileSync('Translation/' + file, 'utf8'), { window: { Liko } });
}
const placeholders = text => [...new Set(text.match(/\{\w+\}/g) || [])].sort();
for (const [lang, dict] of Object.entries(dictionaries)) {
    for (const kind of ['ui', 'chat']) {
        assert.deepEqual(Object.keys(dict[kind]).sort(), Object.keys(dictionaries.EN[kind]).sort(), `${lang} ${kind}: missing/extra keys`);
        for (const key of Object.keys(dict[kind])) {
            const text = dict[kind][key][lang];
            assert.equal(typeof text, 'string', `${lang}.${key}`);
            assert.deepEqual(placeholders(text), placeholders(dictionaries.EN[kind][key].EN), `${lang}.${key}: placeholders differ`);
        }
    }
}
console.log('Translation keys and interpolation placeholders passed.');
