import { transientEffects } from '../src/effects/lifecycle.js';
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
    ChatRoomCharacterExpressionUpdate(character, group) {
        assert.equal(refreshCount, Math.floor(uploaded.length / groups.length) + 1, '每批表情同步前只刷新一次');
        const item = character.Appearance.find(i => i.Asset.Group.Name === group);
        uploaded.push({ Group: group, Name: item.Property.Expression, Appearance: structuredClone(character.Appearance) });
    },
});
assert.deepEqual(appearance, before);
assert.equal(uploaded.length, groups.length * 2, '套用與還原都明確同步各臉部群組');
assert.equal(refreshCount, 2);
assert.deepEqual(player.ExpressionQueue, [{ Group: 'Other', Timer: 3, Expression: 'Keep' }]);
assert.deepEqual(uploaded[0].Appearance.filter(i => ['Eyes', 'Eyes2', '右眼_Luzi', '左眼_Luzi'].includes(i.Asset.Group.Name))
    .map(i => i.Property.Expression), ['Hearts', 'Hearts', 'Hearts', 'Hearts']);
assert.deepEqual(uploaded.at(-1).Appearance, before, '最後送出的外觀必須完整還原，包含 null 與 Luzi');
assert.deepEqual(uploaded.slice(groups.length).map(({ Group, Name }) => [Group, Name]),
    before.map(item => [item.Asset.Group.Name, item.Property.Expression]), '還原封包必須明確攜帶原始值，包含 null');

// Emoticon belongs to the player: never capture, overwrite, restore, or cancel its timer.
for (const cleanup of ['pop', 'clear']) {
    const emoticon = {
        Asset: { Group: { Name: 'Emoticon' } },
        Color: ['#ffffff'], Property: { Expression: 'Afk', Opacity: 0.8 },
    };
    const queueEntry = { Group: 'Emoticon', Time: 12345, Expression: null };
    const character = {
        Appearance: [...structuredClone(before), emoticon],
        ExpressionQueue: [queueEntry],
    };
    const sent = [];
    const context = vm.createContext({
        Player: character, createExpressionState,
        CharacterRefresh() {},
        ChatRoomCharacterExpressionUpdate(c, group) {
            assert.ok(groups.includes(group), '只能同步 HSC 管理的臉部群組');
            sent.push(structuredClone(c.Appearance.at(-1)));
        },
    });
    vm.runInContext(faceCode, context);
    assert.equal(vm.runInContext('Object.hasOwn(saveExpression(), "Emoticon")', context), false);
    vm.runInContext('const token = pushExprEffect({ Eyes: "Hearts", Emoticon: null });', context);
    assert.deepEqual(sent[0], emoticon, '套用臉部表情不能改動表情符號，即使輸入包含 Emoticon');
    assert.equal(vm.runInContext('getExpressionState().groups.includes("Emoticon")', context), false);
    emoticon.Property.Expression = 'Brb'; // Player changes the icon while HSC owns the face.
    const expected = structuredClone(emoticon);
    vm.runInContext(cleanup === 'pop' ? 'popExprEffect(token)' : 'clearExprEffects()', context);
    assert.deepEqual(emoticon, expected, '還原或中止必須保留玩家新選的表情符號');
    assert.deepEqual(sent.at(-1), expected, '同步外觀必須保留最新表情符號');
    assert.equal(character.ExpressionQueue.length, 1);
    assert.equal(character.ExpressionQueue[0], queueEntry, '不能取消表情符號的原生計時');
}

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
        transientEffects,
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
console.log('Expression regressions passed: overlap orders, duplicate/stale callbacks, cleanup, Luzi, Emoticon isolation, voice exceptions.');
