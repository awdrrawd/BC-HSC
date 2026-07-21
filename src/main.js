// ════════════════════════════════════════
//  HSC entry (bundled by vite → assets/main.js)
//  Loader (loader.user.js / loader.local.user.js) dynamically imports this file.
//  Modules are grouped by area under ./<category>/:
//    core/    — config, storage, hooks, lifecycle (core-init), commands
//    i18n/    — i18n, l10n
//    util/    — util, text, geometry, icons, zlayers, calibrate (shared helpers/tools)
//    ui/      — panel, preference, profile, styles
//    hypno/   — hypno (state), hypno-speech, hypno-anim, hypno-orb
//    effects/ — one effect per file: pink-flash, vignette, spiral, waves, distort,
//               danmaku, breath, climax; plus atmosphere, crowd, censor, depth,
//               character-fx, state-fx, sound, run (orchestration)
// ════════════════════════════════════════

import { MOD_VER, CONFIG, HSC_SCREEN } from './core/config.js';
import { triggerVoiceEffect } from './util/util.js';
import { loadSettings, saveSettings, exportSettings, importSettings } from './core/storage.js';
import { handleHSCCommand } from './core/commands.js';
import { currentDepthLevel, runDepthEffect } from './effects/depth.js';
import { getHypnoValue, isForced, wake } from './hypno/hypno.js';
import { playHypnoAnim } from './hypno/hypno-anim.js';
import { EXT } from './ui/preference.js';
import { l10nTest } from './expansion/l10n.js';
import { initialize } from './core/core-init.js';

// 對外唯一入口：window.Liko.HSC（版本 + API 合併為同一物件；loader 先設 'loading'）
//  相容：仍可用 window.Liko.HSC 判斷是否載入（物件為 truthy）、用 .version 取版本。
window.Liko = window.Liko ?? {};

// 防重複初始化：Loader 那邊的 `if (window.Liko.HSC) return;` 只能防「Loader 自己重複匯入自己」，
// 沒辦法防「本體版跟 Loader 版同時裝到」這種情況——兩邊誰先執行完全不保證，
// 所以真正該做防呆的地方是這裡：main.js 才是實際把值填進 window.Liko.HSC、
// 呼叫 initialize()（註冊所有 hookFunction / interval / DOM）的地方。
// 用 typeof===object && .version 判斷「已經是真正初始化完的實例」，
// 藉此跟 Loader 暫時塞的字串 'loading'（還沒初始化完）區分開來，避免誤判。
const _hscAlreadyInitialized = window.Liko.HSC && typeof window.Liko.HSC === 'object' && !!window.Liko.HSC.version;

if (_hscAlreadyInitialized) {
    console.warn(`🐈‍⬛ [HSC] ⚠️ 偵測到已有 HSC 實例在執行中（version: ${window.Liko.HSC.version}），略過本次重複初始化，避免重複註冊 hook。`);
} else {
    window.Liko.HSC = {
        version: MOD_VER,
        // 立即觸發一次催眠效果（真實觸發，會發狀態訊息／廣播）
        trigger: (text = '[Voice]') => triggerVoiceEffect(String(text), false),
        // 測試觸發（不發訊息、不廣播）
        test: (text = '[Voice] test') => triggerVoiceEffect(String(text), true),
        // 觸發背景深度效果
        runDepth: (level) => runDepthEffect(level || currentDepthLevel() || 1),
        // 執行 /hsc 子指令（如 'setting' / 'show' / 'help'）
        command: (sub = '') => handleHSCCommand(`/hsc ${sub}`.trim()),
        // 供其他插件檢測：HSC 是否正在 profile 就地設定頁（類似 bcx.inBcxSubscreen()）
        // 以 CurrentScreen === HSC_SCREEN 為準（畫面本身才是真正的來源），
        // 並用 EXT.ctx/EXT.remote 做保險判斷，避免 CommonSetScreen 切換瞬間
        // 兩者短暫不同步時出現偽陰性。
        inSubscreen: () =>
            (typeof CurrentScreen !== 'undefined' && CurrentScreen === HSC_SCREEN) ||
            (EXT.ctx === 'remote' && !!EXT.remote),
        // 催眠值（0~100）/ 是否強控中 / 立即清醒
        hypno: () => getHypnoValue(),
        isForced: () => isForced(),
        wake: () => wake(),
        // 直接播一次符咒儀式動畫（測試用，免催到 100%）
        anim: () => playHypnoAnim(),
        // 設定存取
        getConfig: () => CONFIG,
        save: () => saveSettings(true),
        reload: () => loadSettings(),
        exportSettings,
        importSettings,
        // POC：發一條亂碼訊息並夾帶翻譯標記（驗證接收端在地化）
        l10nTest: (key) => l10nTest(key),
    };

    initialize();
}
