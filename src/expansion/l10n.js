// ════════════════════════════════════════
//  HSC module: l10n.js — 聊天訊息在地化（改用共用引擎 window.Liko.__Sys_L10N__）
//  送出時 Text 放英文底本（沒裝插件者看到英文），Dictionary 夾帶 { Tag:'Liko_L10N', ns, key, data }；
//  裝了引擎的「接收端」hook ChatRoomMessage，偵測標記就用「自己的語言」重寫顯示（含自己發的）。
//  L10N 字庫在 Translation/<LANG>.js（一國一檔，同時含 UI 與 L10N；由 i18n.js 的 ensureI18n 載入、註冊到 __Sys_L10N__）。
//  {0} = 觸發者名稱（原本的 $me）。
// ════════════════════════════════════════

import { modApi } from '../core/config.js';

// 取觸發者名稱（送出時作為 {0} 代入；接收端顯示時已由引擎替換）
function _senderName() {
    return (typeof CharacterNickname === 'function' ? CharacterNickname(Player) : '')
        || (typeof Player !== 'undefined' && (Player.Nickname || Player.Name)) || '';
}

// 安裝接收端 hook（共用引擎內部只裝一次；多插件共用同一個 ChatRoomMessage hook）
export function hookL10n() {
    try { window.Liko?.__Sys_L10N__?.install(modApi); }
    catch (e) { console.warn('🐈‍⬛ [HSC] L10N install 失敗:', e.message); }
}

// 發一條在地化系統 Action：底本走英文，另夾帶 Liko_L10N 標記讓接收端依語言替換。
//  key 對應 HSC-l10n.js 內的字串；{0} 由觸發者名稱代入。
export function sendLocalizedAction(key) {
    try { window.Liko?.__Sys_L10N__?.send('HSC', key, _senderName()); }
    catch (e) {}
}

// 測試指令：送一條 l10n_test（各端會依自己語言即時顯示）。console 用 window.Liko.HSC.l10nTest()
export function l10nTest(key = 'l10n_test') {
    try {
        if (typeof ServerSend !== 'function' || typeof Player === 'undefined') return '⚠️ 無法發送（未在遊戲內）';
        window.Liko?.__Sys_L10N__?.send('HSC', key, _senderName());
        return '📤 已送出 L10N 測試：裝了引擎的各端會依自己語言顯示，未裝者看到英文底本。';
    } catch (e) {
        return '⚠️ 錯誤：' + e.message;
    }
}
