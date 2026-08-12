// ── auto-wired cross-module imports ──
import { hookChatInput, printChat } from './commands.js';
import { CONFIG, ES_KEY, MOD_VER, modApi, setModApi, getModApi } from './config.js';
import { _depthTimer, applyDepthLoop, hookGhostDraw, setDepthTimer } from '../effects/depth.js';
import { hookAtmosphere, hookCharAnchor, hookDrawCharacter, hookOrgasmStage } from './hooks.js';
import { hookHypnoSpeech } from '../hypno/hypno-speech.js';
import { startHypnoDecay, restoreHypnoState, disableHypno } from '../hypno/hypno.js';
import { ensureI18n, ui } from '../expansion/i18n.js';
import { hookCensor } from '../effects/censor.js';
import { hookL10n } from '../expansion/l10n.js';
import { updateCrowd } from '../effects/crowd.js';
import { isForced } from '../hypno/hypno.js';
import { stopHypnoAnim, updateHeadTalisman } from '../hypno/hypno-anim.js';
import { _domObserver, removePanel, setDomObserver, setupDOMObserver } from '../ui/panel.js';
import { hookProfileButton, hookRemoteEdit, registerPreferenceScreen } from '../ui/profile.js';
import { HSCDB, loadSettings, publishSharedSettings, waitForExtensionSettings } from './storage.js';
import { injectStyles } from '../ui/styles.js';
import { clearBCXCache } from '../util/util.js';
import { installColorAPI } from '../expansion/theme-color-api.js';

// ════════════════════════════════════════
//  HSC module: core-init.js
//  (auto-split from Liko - HSC.main.user.js; imports added below)
// ════════════════════════════════════════

    // ════════════════════════════════════════
    //  等待工具
    // ════════════════════════════════════════
    function waitForBcModSdk(timeout = 30000) {
        const start = Date.now();
        return new Promise(resolve => {
            const check = () => {
                if (typeof bcModSdk !== 'undefined' && bcModSdk?.registerMod) resolve(true);
                else if (Date.now() - start > timeout) resolve(false);
                else setTimeout(check, 100);
            };
            check();
        });
    }

    function waitForGame(timeout = 30000) {
        const start = Date.now();
        return new Promise(resolve => {
            const check = () => {
                if (
                    typeof CharacterSetFacialExpression === 'function' &&
                    typeof ChatRoomCharacter !== 'undefined'
                ) resolve(true);
                else if (Date.now() - start > timeout) resolve(false);
                else setTimeout(check, 100);
            };
            check();
        });
    }

    // 等待「帳號真正登入完成」——waitForGame 在登入畫面就會通過（Player 是登入前的佔位角色），
    //  若在那時就 loadSettings 會讀到空的 ExtensionSettings、拿到預設值，之後任何存檔就把帳號上的
    //  真資料覆蓋掉（＝一直掉設定的主因）。這裡等到登入後才載入設定。
    //  不設逾時：不管多久都等到登入完成才載入設定（絕不在登入前碰設定）。
    function waitForLogin() {
        if (typeof Player !== 'undefined' && Player?.MemberNumber !== undefined) return Promise.resolve();
        return new Promise(resolve => {
            const removeHook = getModApi().hookFunction('LoginResponse', 0, (args, next) => {
                const result = next(args);
                queueMicrotask(() => {
                    if (typeof Player === 'undefined' || Player?.MemberNumber === undefined) return;
                    removeHook();
                    resolve();
                });
                return result;
            });
        });
    }

    let _fallbackInterval = null;
    let _screenGuard = null;

    // 離開 ChatRoom（切到 profile/偏好/更衣室等任何非聊天室畫面）→ 清掉所有暫態疊加特效。
    //  例外：人臉／名稱識別障礙是繪圖 hook 自行判斷畫面，不在 overlay 內，不受此清除影響。
    function clearTransientEffects() {
        try { updateCrowd(false); } catch (e) {}
        try { stopHypnoAnim(); } catch (e) {}
        try { updateHeadTalisman(); } catch (e) {}   // 非 ChatRoom → want=false → 收起
        const overlay = document.getElementById('hsc-overlay');
        if (overlay) overlay.innerHTML = '';
        const canvas = document.getElementById('MainCanvas') || document.querySelector('canvas');
        if (canvas) { canvas.style.transform = ''; canvas.style.filter = ''; }
    }

    function waitForChatRoom() {
        if (typeof CurrentScreen !== 'undefined' && CurrentScreen === 'ChatRoom') {
            setupDOMObserver();
            return;
        }
        if (modApi) {
            let started = false;
            modApi.hookFunction('ChatRoomRun', 0, (args, next) => {
                const result = next(args);
                if (!started) {
                    started = true;
                    clearBCXCache();
                    setTimeout(setupDOMObserver, 500);
                    // 進房間時關係已同步 → 重新公告白名單($friend/$white 等才會即時)
                    setTimeout(() => { try { publishSharedSettings(); } catch (e) {} }, 800);
                    // 若離開時仍在強控 → 回到房間重新顯示人群／頭上符咒（若啟用）
                    setTimeout(() => { try { if (isForced()) { updateCrowd(true); updateHeadTalisman(); } } catch (e) {} }, 900);
                }
                return result;
            });
            modApi.hookFunction('ChatRoomLeave', 0, (args, next) => {
                const result = next(args);
                if (_domObserver) { _domObserver.disconnect(); setDomObserver(null); }
                removePanel();
                clearBCXCache();
                started = false; // 允許下次進房間重建
                return result;
            });
        } else {
            _fallbackInterval = setInterval(() => {
                if (typeof CurrentScreen !== 'undefined' && CurrentScreen === 'ChatRoom') {
                    clearInterval(_fallbackInterval);
                    _fallbackInterval = null;
                    setTimeout(setupDOMObserver, 500);
                }
            }, 1000);
        }
    }

    // ════════════════════════════════════════
    //  初始化
    // ════════════════════════════════════════
    async function initialize() {
        console.log(`🐈‍⬛ [HSC] ⌛ 初始化 v${MOD_VER}...`);

        const sdkReady = await waitForBcModSdk();
        if (!sdkReady) {
            console.error('🐈‍⬛ [HSC] ❌ bcModSdk 載入逾時');
            return;
        }
        try {
            const _api = bcModSdk.registerMod({
                name:       'Liko - HSC',
                fullName:   "Hypnotic Slave Club",
                version:    MOD_VER,
                repository: 'https://github.com/awdrrawd/BC-HSC',
            });
            // ★ 統一保護所有 hook 回呼：讓任何 hook 都不會把例外拋回 bcModSdk。
            //   bcModSdk 執行 hook 時是 `enter(); c = hook(); exit(); return c;`——exit（BCX 用來
            //   收掉 debug context 的收尾）沒有包 try/finally，所以只要 hook 一拋例外，exit 就被跳過，
            //   BCX 的 context 殘留在堆疊上 → 下一個 root context（socket 訊息 / 點擊 / 動畫幀）就會報
            //   "Root context when we already have context"（Array(1) = 我們這顆殘留的 context）。
            //   包一層：出錯記一次；若 hook 還沒呼叫過 next 就補跑（維持 BC 原行為），已呼叫過則不重跑
            //   （避免原函式跑兩次），最終一定正常回傳 → exit 一定被呼叫 → 不再殘留。
            //   用 Object.create 包一層（不改動 _api 本身，避免 SDK 凍結物件時在嚴格模式下拋錯），
            //   只覆寫 hookFunction，其餘方法（onUnload…）沿原型透傳。
            //   注意：_api 是凍結物件，hookFunction 為唯讀，直接指派（即使在 Object.create 的子物件上）
            //   會因原型鏈上的唯讀屬性而在嚴格模式拋錯 → 改用 defineProperty 直接定義自有屬性覆蓋。
            const _origHook = _api.hookFunction.bind(_api);
            const safeApi = Object.create(_api);
            Object.defineProperty(safeApi, 'hookFunction', {
                configurable: true, writable: true,
                value: (target, priority, hook) => _origHook(target, priority, function (args, next) {
                    let called = false;
                    const wrappedNext = a => { called = true; return next(a); };
                    try { return hook.call(this, args, wrappedNext); }
                    catch (e) {
                        try { console.warn('🐈‍⬛ [HSC] hook 例外（已吞下，避免殘留 BCX context）:', target, e); } catch (e2) {}
                        if (!called) { try { return next(args); } catch (e3) {} }
                        return undefined;
                    }
                }),
            });
            setModApi(safeApi);
        } catch (e) {
            console.error('🐈‍⬛ [HSC] ❌ registerMod 失敗:', e.message);
            return;
        }
        console.log(`🐈‍⬛ [HSC] ✅ v${MOD_VER} loaded`);

        await waitForLogin();
        const gameReady = await waitForGame();

        if (!gameReady) {
            console.error('🐈‍⬛ [HSC] ❌ 遊戲載入逾時');
            return;
        }

        injectStyles();

        // 先載入 i18n（讓預設文本等依語言產生）
        await ensureI18n();
        // 安裝 ColorAPI（供註冊/資料頁按鈕依實際背景色挑深/淺圖示）：直接 import 進來、
        //  借用 HSC 自己的 modApi（透過 getModApi 存取器延遲讀取，此刻 HSC 可能還沒
        //  registerMod 完成），不再另外 fetch 一份腳本、也不再讓它自己註冊一個新 mod。
        installColorAPI(getModApi);
        // ★ 等帳號真正登入後，才讀取／還原設定（否則會讀到登入前的空資料 → 存檔覆蓋真資料 → 掉設定）。不設逾時。
        await waitForLogin();
        await waitForExtensionSettings();
        // ★ 先把伺服器公告的上次催眠狀態存起來（要在 publishSharedSettings 覆寫前先讀）
        let _savedHypno = null;
        try { _savedHypno = Player?.OnlineSharedSettings?.[ES_KEY]?.hypno || null; } catch (e) {}
        // 還原設定 + 開啟本地 DB + 對外公告
        loadSettings();
        await HSCDB.open();
        publishSharedSettings();
        registerPreferenceScreen();
        applyDepthLoop();
        startHypnoDecay();     // 催眠值每 12 秒 -1
        // 登入還原：依上次公告的催眠進度，還原自己的狀態（與他人一致；不重播儀式、不再發旁白）
        try {
            const hs = _savedHypno;
            console.log('🐈‍⬛ [HSC] 登入還原催眠狀態:', hs);
            if (hs && ((hs.v || 0) > 0 || hs.f)) {
                // 催眠系統已停用（總開關或催眠狀態關）卻殘留公告 → 不還原，改公告清除，
                //  否則他人頭上會一直殘留進度球/符咒（停用者自己看不到，難以察覺）。
                if (CONFIG.enabled && CONFIG.hypnoEnabled) restoreHypnoState(hs.v, hs.f, hs.r, hs.inf);
                else { try { disableHypno(); } catch (e) {} }
            }
        } catch (e) {}
        // 資料保險：頁面關閉/重整前，強制送出 BC 帳號更新佇列。
        //  BC 的 ServerAccountUpdate 對 OnlineSharedSettings 等是 debounce ~2 秒且「沒有 unload flush」，
        //  關頁/重連若落在這 2 秒內，剛改的資料就永遠不會送出 → 看起來像被清空。這裡補上 flush。
        try {
            if (typeof window !== 'undefined' && !window._hscUnloadFlush) {
                window._hscUnloadFlush = () => { try { if (typeof ServerAccountUpdate?.SyncToServer === 'function') ServerAccountUpdate.SyncToServer(); } catch (e) {} };
                window.addEventListener('pagehide', window._hscUnloadFlush);
                window.addEventListener('beforeunload', window._hscUnloadFlush);
            }
        } catch (e) {}

        if (modApi) {
            try {
                modApi.onUnload(() => {
                        if (_domObserver)      { _domObserver.disconnect(); setDomObserver(null); }
                        if (_fallbackInterval) { clearInterval(_fallbackInterval); _fallbackInterval = null; }
                        if (_screenGuard)      { clearInterval(_screenGuard); _screenGuard = null; }
                        try { stopHypnoAnim(); updateHeadTalisman(); } catch (e) {}
                        if (_depthTimer)       { clearInterval(_depthTimer); setDepthTimer(null); }
                        removePanel();
                        const overlay = document.getElementById('hsc-overlay');
                        if (overlay) overlay.remove();
                        const styles = document.getElementById('hsc-styles');
                        if (styles) styles.remove();
                        const canvas = document.getElementById('MainCanvas') || document.querySelector('canvas');
                        if (canvas) { canvas.style.filter = ''; canvas.style.transform = ''; }
                });
            } catch (e) {
                // 舊版 bcModSdk 不支援 onUnload，忽略即可
            }
        }

        hookDrawCharacter();
        hookGhostDraw();
        hookAtmosphere();      // 催眠模糊/染色（BC 原生繪圖）
        hookCharAnchor();      // 記錄角色真實繪製座標（含活動位移），供喘氣/符咒等定位
        hookOrgasmStage();
        hookProfileButton();
        hookRemoteEdit();
        hookChatInput();       // 只掛 keydown 保底，CommandCombine 在進房間後才註冊
        hookHypnoSpeech();     // 強控中攔截說話
        hookL10n();            // 在地化訊息：接收端依自己語言替換夾帶標記的訊息
        hookCensor();          // 面部/名稱識別障礙（強控中看不清他人臉與名字）
        waitForChatRoom();
        // 邊緣觸發：只在「離開 ChatRoom 的那一刻」清一次暫態特效，
        //  絕不在房內輪詢清除（避免誤清正在播放的特效）。
        if (!_screenGuard) {
            let _lastScreen = (typeof CurrentScreen !== 'undefined') ? CurrentScreen : '';
            _screenGuard = setInterval(() => {
                const cur = (typeof CurrentScreen !== 'undefined') ? CurrentScreen : '';
                if (_lastScreen === 'ChatRoom' && cur !== 'ChatRoom') clearTransientEffects();
                _lastScreen = cur;
            }, 400);
        }
        console.log(`🐈‍⬛ [HSC] ✅ 初始化完成 v${MOD_VER}`);

        // 進入房間後顯示載入提示（一次性）
        let _loadedNotified = false;
        const _loadCheck = setInterval(() => {
            if (typeof CurrentScreen === 'undefined' || CurrentScreen !== 'ChatRoom') return;
            clearInterval(_loadCheck);
            if (_loadedNotified) return;
            _loadedNotified = true;
            setTimeout(() => {
                printChat(ui('loaded', { v: MOD_VER }));
            }, 1000);
        }, 500);
    }


export {
    initialize,
};
