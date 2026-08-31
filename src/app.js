// HSC application chunk. The import-free main.js claims window.Liko.HSC before
// this file or any of its static dependencies can be evaluated.

import { MOD_VER, CONFIG, HSC_SCREEN } from './core/config.js';
import { triggerVoiceEffect } from './util/util.js';
import { loadSettings, saveSettings, exportSettings, importSettings } from './core/storage.js';
import { handleHSCCommand } from './core/commands.js';
import { runDepthEffect } from './effects/depth.js';
import { getHypnoValue, isForced, wake } from './hypno/hypno.js';
import { playHypnoAnim } from './hypno/hypno-anim.js';
import { EXT } from './ui/preference.js';
import { l10nTest } from './expansion/l10n.js';
import { initialize } from './core/core-init.js';

window.Liko = window.Liko ?? {};

// An empty object is the bootstrap's in-flight reservation. A versioned object
// means another HSC instance completed first and owns all hooks/timers/DOM.
const alreadyInitialized = window.Liko.HSC
    && typeof window.Liko.HSC === 'object'
    && !!window.Liko.HSC.version;

if (alreadyInitialized) {
    console.warn(`🐈‍⬛ [HSC] ⚠️ 偵測到已有 HSC 實例在執行中（version: ${window.Liko.HSC.version}），略過本次重複初始化，避免重複註冊 hook。`);
} else {
    window.Liko.HSC = {
        version: MOD_VER,
        trigger: (text = '[Voice]') => triggerVoiceEffect(String(text), false),
        test: (text = '[Voice] test') => triggerVoiceEffect(String(text), true),
        runDepth: () => runDepthEffect(),
        command: (sub = '') => handleHSCCommand(`/hsc ${sub}`.trim()),
        inSubscreen: () =>
            (typeof CurrentScreen !== 'undefined' && CurrentScreen === HSC_SCREEN) ||
            (EXT.ctx === 'remote' && !!EXT.remote),
        hypno: () => getHypnoValue(),
        isForced: () => isForced(),
        wake: () => wake(),
        anim: () => playHypnoAnim(),
        getConfig: () => CONFIG,
        save: () => saveSettings(true),
        reload: () => loadSettings(),
        exportSettings,
        importSettings,
        l10nTest: (key) => l10nTest(key),
    };

    initialize();
}
