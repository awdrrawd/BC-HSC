// ════════════════════════════════════════
//  HSC util: 文字工具
//  wrapDanmakuText — 自動換行：每 fullWidth 個全形字（半形算半寬）換一行。
//  彈幕、主台詞、耳邊句子共用。
// ════════════════════════════════════════

export function wrapDanmakuText(text, fullWidth = 12) {
    // 判斷全形字（CJK、全形標點等）= 2 寬度；半形 = 1 寬度
    const charWidth = (ch) => {
        const code = ch.codePointAt(0);
        // CJK 統一漢字、全形符號、片假名、平假名
        if ((code >= 0x1100 && code <= 0x115F) ||
            (code >= 0x2E80 && code <= 0x9FFF) ||
            (code >= 0xA000 && code <= 0xA4CF) ||
            (code >= 0xAC00 && code <= 0xD7AF) ||
            (code >= 0xF900 && code <= 0xFAFF) ||
            (code >= 0xFE10 && code <= 0xFE1F) ||
            (code >= 0xFE30 && code <= 0xFE4F) ||
            (code >= 0xFF00 && code <= 0xFF60) ||
            (code >= 0xFFE0 && code <= 0xFFE6)) return 2;
        return 1;
    };
    const halfLimit = fullWidth * 2; // 半形字元上限
    // 先依既有換行（$n / \n 已由 resolveMe 轉成真正換行）切段，逐段再自動換行
    const wrapSeg = (seg) => {
        const lines = [];
        let cur = '', curW = 0;
        for (const ch of [...seg]) {
            const w = charWidth(ch);
            if (curW + w > halfLimit) { lines.push(cur); cur = ch; curW = w; }
            else                      { cur += ch; curW += w; }
        }
        if (cur || lines.length === 0) lines.push(cur);  // 保留空行
        return lines;
    };
    return String(text).split('\n').flatMap(wrapSeg).join('\n');
}

// ── 來自他人（隱藏訊息 / 遠端編輯）的資料一律先經過這些函式 ──

/** 顯示用名稱：移除控制字元、雙向文字控制、括號（避免偽造 [Voice] 等標記），並限制長度。 */
export function safeDisplayName(raw, maxLen = 40) {
    const s = String(raw ?? '')
        // eslint-disable-next-line no-control-regex
        .replace(/[\u0000-\u001f\u007f\u200b-\u200f\u202a-\u202e\u2066-\u2069]/g, '')
        .replace(/[[\]【】]/g, '')
        .trim()
        .slice(0, maxLen);
    return s || '?';
}

/** 字串清單：只收字串、去空白、單筆/總數設上限（遠端可控資料不可無限大）。 */
export function cleanStringList(arr, maxItems = 200, maxLen = 500) {
    if (!Array.isArray(arr)) return [];
    return arr
        .filter(v => typeof v === 'string')
        .map(v => v.trim().slice(0, maxLen))
        .filter(Boolean)
        .slice(0, maxItems);
}

/** 數值夾限：非有限數值回傳 fallback。 */
export function clampNumber(v, min, max, fallback = min) {
    const n = Number(v);
    return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
}
