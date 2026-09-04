// ════════════════════════════════════════
//  HSC module: icons.js
//  註冊按鈕圖示：HSC-iconW（白底用）/ HSC-iconB（黑底用）
//  圖檔放在 public/，隨 build 部署到 bundle 根目錄；用 import.meta.url 解析出網址，
//  本地 vite preview 與 GitHub Pages 皆適用。
// ════════════════════════════════════════

// 依 bundle（assets/main.js）位置，解析出同層根目錄的素材網址（= GitHub Pages 回退來源）。
export function assetUrl(path) {
    const url = new URL(import.meta.url);
    url.pathname = url.pathname.replace(/\/assets\/[^/]+$/, `/${String(path).replace(/^\//, '')}`);
    url.search = '';
    return url.toString();
}

// ── 圖片來源：CDN 優先（jsDelivr）──
// 理由：jsDelivr 全球節點、對中國較穩，且每次都送 Access-Control-Allow-Origin: *；
//  BC 原生 DrawGetImage 會先用 crossOrigin='anonymous' 載入，但「載入失敗兩次後會拿掉
//  crossOrigin 重載」（Drawing.js DrawGetImageOnError）→ 一旦失敗過就變成無 CORS 圖，
//  畫到 MainCanvas 就汙染整張畫布。來源越穩、ACAO 越確定，被汙染的機率越低。
// public/ 是 build 時由 Assets/ Translation/ 生成（未提交 repo），jsDelivr 直接指向 repo 來源。
const CDN_ROOT = 'https://cdn.jsdelivr.net/gh/awdrrawd/BC-HSC@main/';

// 邏輯路徑 → CDN 網址。repo 來源：icon 在 Assets/Icon/、其餘圖在 Assets/Images/、
//  音源在 Assets/Sound/；字庫（Translation/）不算素材留在根目錄。
//  （對照：Pages 由 copy-assets 把圖片攤平到根目錄，故 assetUrl 用裸檔名即 Pages 圖。）
export function cdnUrl(logical) {
    const p = String(logical).replace(/^\//, '');
    // 共用引擎源碼（BC_i18n）在 repo 的 src/expansion/，是執行期 fetch 的 IIFE；
    //  邏輯路徑用 expansion/ 對外一致。（ColorAPI 已改為 ES module 直接 import，不走這條。）
    if (/^expansion\//i.test(p)) return CDN_ROOT + 'src/' + p;
    if (/^Sound\//i.test(p)) return CDN_ROOT + 'Assets/' + p;   // Assets/Sound/
    if (/^Translation\//i.test(p)) return CDN_ROOT + p;         // 根目錄 Translation/
    if (/^HSC-icon/i.test(p)) return CDN_ROOT + 'Assets/Icon/' + p;
    return CDN_ROOT + 'Assets/Images/' + p;
}
// 圖片 CDN 網址（傳檔名，例：'HSC-iconW.png'）
export function imageUrl(name) { return cdnUrl(String(name).replace(/^\//, '')); }
// 音源 CDN 網址（傳 'Sound/' 之後的檔名，或空字串取基底）
export function soundUrl(name) { return cdnUrl('Sound/' + String(name).replace(/^\//, '')); }

// CDN 網址 → 對應的 Pages 網址（回退用）；非本 CDN 網址原樣回傳。
export function toPagesUrl(url) {
    const s = String(url);
    if (!s.startsWith(CDN_ROOT)) return s;
    const rel = s.slice(CDN_ROOT.length)
        .replace(/^Assets\/(?:Icon|Images)\//, '')      // 圖片在 Pages 根目錄
        .replace(/^Assets\//, '')                        // Assets/Sound/ → Pages 的 Sound/
        .replace(/^src\/expansion\//, 'expansion/');     // 引擎在 Pages 的 expansion/
    return assetUrl(rel);
}

// fetch（CDN 優先）+ 失效回退 Pages：CDN 非 2xx 或連線失敗時，改抓對應的 Pages 網址。
//  給音源等「用 fetch 取二進位 / 文字」的資源用（圖片走 loadHscImage，不走這裡）。
export async function fetchAsset(url, init) {
    try {
        const r = await fetch(url, init);
        if (r.ok) return r;
        const fb = toPagesUrl(url);
        return (fb !== url) ? fetch(fb, init) : r;
    } catch (e) {
        const fb = toPagesUrl(url);
        if (fb !== url) return fetch(fb, init);
        throw e;
    }
}

// 建立一張「CORS 乾淨、CDN 優先、失效回退 Pages」的 Image。
//  與 BC 不同：crossOrigin 全程保留，寧可載不出來也不退成無 CORS（那會汙染畫布）。
//  onReady(img) 於成功載入後呼叫（沿用舊有 onload 旗標寫法）。
export function loadHscImage(name, onReady) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    let stage = 0;   // 0=CDN 中 / 1=已回退 Pages / 2=放棄
    img.addEventListener('load', () => { try { onReady && onReady(img); } catch (e) {} });
    img.addEventListener('error', () => {
        if (stage === 0) { stage = 1; img.src = assetUrl(name); }   // CDN 失敗 → Pages（仍保留 crossOrigin）
        else { stage = 2; }                                          // 都失敗 → 放棄，維持乾淨
    });
    img.src = imageUrl(name);
    return img;
}

// 白底按鈕用（深色線稿）／黑底按鈕用（白色線稿）：網址走 CDN。
export const HSC_ICON_W = imageUrl('HSC-iconW.png');
export const HSC_ICON_B = imageUrl('HSC-iconB.png');

// 預先用「永不放棄 crossOrigin」的方式載入兩個按鈕圖，塞進 BC 的圖片快取（DrawCacheImage）。
//  這樣 DrawImageResize(HSC_ICON_*) 與偏好頁註冊鈕的 Image() 都會重用這份乾淨圖，
//  不會走到 BC「失敗後拿掉 crossOrigin」的路徑而汙染 MainCanvas。
(function _registerCleanIcons() {
    try {
        // DrawCacheImage 為 BC Drawing.js 的頂層 Map；同一全域環境可直接取用。
        if (typeof DrawCacheImage === 'undefined' || !DrawCacheImage || typeof DrawCacheImage.set !== 'function') return;
        DrawCacheImage.set(HSC_ICON_W, loadHscImage('HSC-iconW.png'));
        DrawCacheImage.set(HSC_ICON_B, loadHscImage('HSC-iconB.png'));
    } catch (e) { /* 取不到 BC 快取 → 交回 BC 原生載入（多半仍為 crossOrigin） */ }
})();

// ── 判定「當前 UI 主題色」是否過深 ──
// 優先序：既有 ColorAPI（專業工具）→ LCE 正在使用的主題色 → HSC 自行取樣。
// HSC 不安裝 ColorAPI、不註冊額外 mod，也不建立額外繪圖 hook。
let _themeDark = null;   // null = 尚未計算
// 重算並快取當前主題深淺（進入畫面時呼叫一次）。
export function refreshThemeIsDark() {
    _themeDark = _computeThemeIsDark();
    return _themeDark;
}
// 取快取值；從未算過則即時算一次（給早於 refresh 的呼叫方，如偏好頁註冊鈕）。
export function hscThemeIsDark() {
    return _themeDark === null ? refreshThemeIsDark() : _themeDark;
}
function _computeThemeIsDark() {
    const ColorAPI = (typeof window !== 'undefined') ? window.Liko?.__Sys_ColorAPI__ : null;
    if (ColorAPI) {
        try {
            const color = (typeof ColorAPI.getThemeColor === 'function')
                ? ColorAPI.getThemeColor()
                : ColorAPI.getCanvasColor({ x: 1000, y: 110, size: 8 });
            if (color) { const d = ColorAPI.isDark(color); if (d !== null) return d; }
        } catch { /* ColorAPI 呼叫失敗 → LCE / 本地取樣 */ }
    }

    try {
        const theme = window.Liko?.LCE?.Theme;
        if (theme?.enabled && theme.Main) {
            const d = _isDarkColor(theme.Main);
            if (d !== null) return d;
        }
    } catch { /* LCE 不可用 → 本地取樣 */ }

    const sampled = _sampleCanvasColor({ x: 1000, y: 110, size: 8 });
    const sampledDark = _isDarkColor(sampled);
    if (sampledDark !== null) return sampledDark;
    return false;
}

let _sampleCanvas = null;
let _sampleContext = null;

function _sampleCanvasColor({ x, y, size }) {
    try {
        const source = (typeof MainCanvas !== 'undefined' && MainCanvas?.canvas)
            ? MainCanvas.canvas
            : document.getElementById('MainCanvas');
        if (!source) return null;
        if (!_sampleCanvas) {
            _sampleCanvas = document.createElement('canvas');
            _sampleContext = _sampleCanvas.getContext('2d', { willReadFrequently: true });
        }
        if (!_sampleContext) return null;
        if (_sampleCanvas.width !== size || _sampleCanvas.height !== size) {
            _sampleCanvas.width = size;
            _sampleCanvas.height = size;
        }
        _sampleContext.clearRect(0, 0, size, size);
        _sampleContext.drawImage(source, x, y, size, size, 0, 0, size, size);
        const data = _sampleContext.getImageData(0, 0, size, size).data;
        const tally = new Map();
        let best = null, count = 0;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) continue;
            const key = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
            const next = (tally.get(key) || 0) + 1;
            tally.set(key, next);
            if (next > count) { best = key; count = next; }
        }
        return best === null ? null : `#${best.toString(16).padStart(6, '0')}`;
    } catch { return null; }
}

function _isDarkColor(color, threshold = 0.5) {
    if (typeof color !== 'string') return null;
    const match = color.trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!match) return null;
    let hex = match[1];
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const channel = offset => {
        const value = parseInt(hex.slice(offset, offset + 2), 16) / 255;
        return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4) < threshold;
}

// 依當前主題深淺選圖（給不易取樣座標的按鈕，如偏好頁註冊鈕）
export function hscIconForTheme() {
    return hscThemeIsDark() ? HSC_ICON_B : HSC_ICON_W;
}
