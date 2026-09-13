    // 深合併：以 defaults 為底，用 saved 覆蓋（陣列直接取代）
    function mergeDefaults(defaults, saved) {
        if (Array.isArray(defaults)) return Array.isArray(saved) ? saved : defaults;
        if (defaults && typeof defaults === 'object') {
            const out = {};
            for (const k of Object.keys(defaults)) {
                out[k] = (saved && typeof saved === 'object' && Object.hasOwn(saved, k)) ? mergeDefaults(defaults[k], saved[k]) : defaults[k];
            }
            return out;
        }
        return typeof saved === typeof defaults && (typeof saved !== 'number' || Number.isFinite(saved)) ? saved : defaults;
    }

    // 套用一份 saved 設定（含各種舊版欄位遷移）
    function normalizeSettings(defaults, input) {
        if (!input || typeof input !== 'object' || Array.isArray(input)) throw new TypeError('Settings must be an object');
        const saved = structuredClone(input);
        // 舊版 nameCensor(布林) → 三態字串（true→僅玩家 / false→關）
        if (typeof saved.nameCensor === 'boolean') saved.nameCensor = saved.nameCensor ? 'player' : 'off';
        // 舊版編輯權限遷移 → editModes.catalyst（催眠文本）
        if (saved.editModes === undefined) {
            let m = 'off';
            if (saved.allowEditMode === 'any' || saved.allowEditMode === 'whitelist') m = saved.allowEditMode;
            else if (saved.allowOthersEdit) m = 'any';
            saved.editModes = { catalyst: m, status: 'off', trigger: 'off' };
        }
        // 舊版深度（分層強度）→ 新版（開/關 + 扁平效果）遷移
        if (saved.depthMax !== undefined && saved.depthEnabled === undefined) {
            saved.depthEnabled = saved.depthMax > 0;
        }
        if ((saved.depthLight || saved.depthMed || saved.depthHeavy) && saved.depthEffects === undefined) {
            const L = saved.depthLight || {}, M = saved.depthMed || {}, H = saved.depthHeavy || {};
            saved.depthEffects = {
                smoke: !!L.smoke, chatDanmaku: !!L.chatDanmaku, ghost: !!L.ghost,
                figureBlur: !!M.figureBlur, sfx: !!M.sfx, fade: !!M.fade,
                chatlogBlur: !!H.chatlogBlur, pant: !!(L.pant || M.pant || H.pant),
            };
        }
        // 舊版 wakeWord(單字串) → wakeWords(清單)
        if (typeof saved.wakeWord === 'string' && saved.wakeWords === undefined) {
            saved.wakeWords = saved.wakeWord.trim() ? [saved.wakeWord.trim()] : [];
        }
        // 舊版 arousal(布林)/arousalStep(單值) → 語音/日常 兩個興奮值
        if (saved.arousalStep !== undefined && saved.arousalStepVoice === undefined) {
            saved.arousalStepVoice = saved.arousalStep;
            saved.arousalStepDepth = saved.arousalStep;
        } else if (saved.arousal !== undefined && saved.arousalStepVoice === undefined) {
            const v = saved.arousal ? 5 : 0;
            saved.arousalStepVoice = v; saved.arousalStepDepth = v;
        }
        const result = mergeDefaults(structuredClone(defaults), saved);
        result.whitelist = [...new Set(result.whitelist.filter(v =>
            (Number.isSafeInteger(v) && v > 0) || ['$owner', '$lover', '$friend', '$white'].includes(v)))];
        result.expressionSets = result.expressionSets.filter(v => v && typeof v === 'object' && !Array.isArray(v)).slice(0, 10)
            .map(v => Object.fromEntries(['Eyebrows', 'Eyes', 'Eyes2', 'Mouth', 'Blush', '右眼_Luzi', '左眼_Luzi']
                .filter(key => Object.hasOwn(v, key))
                .map(key => [key, typeof v[key] === 'string' ? v[key] : null])));
        const ranges = { intensity: [0.1, 3], autoWakeMin: [15, 99], hypnoExtendSec: [10, 990], depthIntervalMin: [1, 99], hypnoAnimStyle: [1, 12], arousalStepVoice: [0, 20], arousalStepDepth: [0, 20], hypnoVoiceStep: [0, 20], hypnoDepthStep: [0, 20] };
        for (const [key, [min, max]] of Object.entries(ranges)) result[key] = Math.max(min, Math.min(max, result[key]));
        for (const key of ['customTexts', 'emoteList', 'wakeWords', 'responseList', 'allowedPhrases', 'triggerWords']) result[key] = result[key].filter(v => typeof v === 'string');
        for (const key of Object.keys(result.editModes)) if (!['off', 'whitelist', 'any'].includes(result.editModes[key])) result.editModes[key] = defaults.editModes[key];
        for (const [key, values] of Object.entries({ nameCensor: ['off', 'player', 'network'], climaxMode: ['orgasm', 'always'], faceCensorStyle: ['circle', 'line'], textSource: ['ES', 'DB'], soundSource: ['ES', 'DB'] })) if (!values.includes(result[key])) result[key] = defaults[key];
        return result;
    }

// 所有設定預設持久化；僅明確排除本機音效，避免新增欄位漏存。
function serializeSettings(config) {
    const { sounds: _sounds, ...saved } = structuredClone(config);
    saved.v = 2;
    if (saved.textSource !== 'ES') saved.customTexts = [];
    return saved;
}
export { mergeDefaults, normalizeSettings, serializeSettings };
