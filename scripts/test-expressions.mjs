import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createExpressionState } from '../src/effects/expression-state.js';

for (const order of [[0, 1], [1, 0]]) {
    let face = { Eyes: null, Eyes2: 'Closed' };
    const original = { ...face };
    let captures = 0;
    const state = createExpressionState(() => { captures++; return { ...face }; }, v => { face = { ...v }; });
    const effects = [{ Eyes: 'Dazed' }, { Eyes: 'Hearts' }];
    assert.deepEqual(state.getState(), { active: false, count: 0 });
    const tokens = effects.map(v => state.push(v));
    assert.deepEqual(state.getState(), { active: true, count: 2 });
    state.getState().active = false; // A consumer cannot change ownership.
    state.pop(tokens[order[0]]);
    assert.deepEqual(face, effects[order[1]]);
    state.pop(tokens[order[0]]); // 重複完成不能釋放另一個效果
    assert.deepEqual(face, effects[order[1]]);
    state.pop(tokens[order[1]]);
    assert.deepEqual(face, original);
    assert.equal(captures, 1);
    assert.deepEqual(state.getState(), { active: false, count: 0 });

    const stale = state.push(effects[0]);
    state.clear();
    assert.deepEqual(face, original);
    const current = state.push(effects[1]);
    state.pop(stale); // 停用後舊 timer 不可結束新效果
    assert.deepEqual(state.getState(), { active: true, count: 1 });
    assert.deepEqual(face, effects[1]);
    state.pop(current);
    assert.deepEqual(face, original);
}

// Ownership is visible before refresh/upload, including the final restoration.
{
    const states = [];
    const state = createExpressionState(() => ({ Eyes: null }), () => states.push(state.getState()));
    state.pop(state.push({ Eyes: 'Hearts' }));
    assert.deepEqual(states, [{ active: true, count: 1 }, { active: true, count: 0 }]);
    assert.deepEqual(state.getState(), { active: false, count: 0 });
}

// 用實際表情讀寫函式驗證原生與 Luzi 左右眼各自還原，包含 null。
const source = readFileSync(new URL('../src/effects/character-fx.js', import.meta.url), 'utf8');
const faceCode = source.slice(source.indexOf('    function saveExpression'), source.indexOf('    // 取某表情組'));
const groups = ['Eyebrows', 'Eyes', 'Eyes2', 'Mouth', 'Blush', '右眼_Luzi', '左眼_Luzi'];
const appearance = groups.map((name, i) => ({ Asset: { Group: { Name: name } }, Property: { Expression: i % 2 ? null : `original-${i}` } }));
const before = structuredClone(appearance);
const uploaded = [];
let refreshCount = 0;
const player = { Appearance: appearance, ExpressionQueue: [
    { Group: 'Eyes', Timer: 1, Expression: null },
    { Group: '右眼_Luzi', Timer: 2, Expression: null },
    { Group: 'Other', Timer: 3, Expression: 'Keep' },
] };
vm.runInNewContext(faceCode + '\nconst t = pushExprEffect({ Eyes: "Hearts" }); popExprEffect(t);', {
    Player: player, createExpressionState,
    CharacterRefresh() { refreshCount++; },
    ChatRoomCharacterUpdate(character) {
        assert.equal(refreshCount, uploaded.length + 1, '每次上傳前只刷新一次');
        uploaded.push(structuredClone(character.Appearance));
    },
});
assert.deepEqual(appearance, before);
assert.equal(uploaded.length, 2, '套用與還原各只送一次完整外觀');
assert.equal(refreshCount, 2);
assert.deepEqual(player.ExpressionQueue, [{ Group: 'Other', Timer: 3, Expression: 'Keep' }]);
assert.deepEqual(uploaded[0].filter(i => ['Eyes', 'Eyes2', '右眼_Luzi', '左眼_Luzi'].includes(i.Asset.Group.Name))
    .map(i => i.Property.Expression), ['Hearts', 'Hearts', 'Hearts', 'Hearts']);
assert.deepEqual(uploaded.at(-1), before, '最後送出的外觀必須完整還原，包含 null 與 Luzi');

// 部分寫入後失敗，仍須退回有效表情，且失敗的效果不能殘留。
for (const forced of [false, true]) {
    let face = { Eyes: null };
    const state = createExpressionState(() => ({ ...face }), value => {
        face = { ...value };
        if (value.Eyes === 'Fail') throw new Error('apply failed');
    });
    const token = forced ? state.push({ Eyes: 'Closed' }) : null;
    const push = state.push; // 呼叫端會取出方法獨立呼叫
    assert.throws(() => push({ Eyes: 'Fail' }), /apply failed/);
    assert.deepEqual(face, { Eyes: forced ? 'Closed' : null });
    state.pop(token);
    assert.deepEqual(face, { Eyes: null });
}

// 實際語音流程在 await 後拋錯時，也必須還原；與強控重疊則回到強控表情。
const runSource = readFileSync(new URL('../src/effects/run.js', import.meta.url), 'utf8')
    .replace(/^import .*;\r?\n/gm, '').replace(/export \{[\s\S]*$/, '');
for (const forced of [false, true]) {
    let face = { Eyes: null };
    const state = createExpressionState(() => ({ ...face }), v => { face = { ...v }; });
    const forcedToken = forced ? state.push({ Eyes: 'Closed' }) : null;
    const context = vm.createContext({
        CONFIG: { enabled: true, voiceEnabled: true, expression: true },
        Player: {}, CurrentScreen: 'ChatRoom', EXPRESSION_SETS: [{ Eyes: 'Hearts' }],
        refreshCanvasCache() {}, pushExprEffect: state.push, popExprEffect: state.pop,
        wait: async () => {}, addArousal() { throw new Error('effect failed'); },
    });
    vm.runInContext(runSource, context);
    await assert.rejects(vm.runInContext('runEffect("test", true)', context), /effect failed/);
    assert.deepEqual(face, { Eyes: forced ? 'Closed' : null });
    state.pop(forcedToken);
    assert.deepEqual(face, { Eyes: null });
}
console.log('Expression regressions passed: overlap orders, duplicate/stale callbacks, cleanup, Luzi, voice exceptions.');
