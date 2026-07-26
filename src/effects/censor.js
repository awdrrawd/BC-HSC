// ════════════════════════════════════════
//  HSC module: censor.js  （面部識別障礙 / 名稱識別障礙）
//  催眠狀態效果：玩家進入強控（isForced）時，看不清「他人」的臉與名字。
//   - 面部：在對方臉上蓋一團會蠕動的塗鴉（circle 圓圈 / line 線條，二選一）。
//   - 名稱：聊天室名牌 + profile 的名字/暱稱/ID 用黑塊遮住。
//  座標完全用 BC 原生 DrawCharacter 傳入的 X/Y/Zoom + CharacterAppearanceYOffset，
//  任何身高／姿勢／翻頁都對得準。塗鴉幀預先烘焙成離屏畫布（快取），不吃效能。
// ════════════════════════════════════════

import { CONFIG, modApi } from '../core/config.js';
import { isForced } from '../hypno/hypno.js';
import { faceAssetToBc } from '../util/geometry.js';

const CFG = {
    variants: 5, framesPerLoop: 16, loopSeconds: 1.6,
    faceRadius: 80, faceBodyY: 130, liveJitter: 4, color: 'black',
};

// ── 確定性偽隨機（同一角色永遠同一種塗鴉）──
const SR = (s) => { const x = Math.sin(s) * 10000; return x - Math.floor(x); };
const Hash = (n) => Math.abs(Math.floor(SR(n * 0.123 + 7) * 1e6));

function drawCircle(ctx, cx, cy, R, seed) {
    const loop = (baseR, s, nLoops, pts) => {
        const arr = [];
        for (let l = 0; l < nLoops; l++) {
            const coX = (SR(s + l * 11.1) - 0.5) * baseR * 0.7, coY = (SR(s + l * 22.2) - 0.5) * baseR * 0.7;
            const rX = baseR * (0.4 + SR(s + l * 33.3) * 0.7), rY = baseR * (0.4 + SR(s + l * 44.4) * 0.7);
            const rot = SR(s + l * 55.5) * Math.PI * 2, st = SR(s + l * 66.6) * Math.PI * 2, dir = SR(s + l * 77.7) > 0.5 ? 1 : -1;
            for (let p = 0; p <= pts; p++) {
                const a = st + dir * (p / pts) * Math.PI * 2, co = Math.cos(rot), si = Math.sin(rot);
                const ex = Math.cos(a) * rX, ey = Math.sin(a) * rY;
                arr.push({ x: cx + coX + (ex * co - ey * si), y: cy + coY + (ex * si + ey * co) });
            }
        }
        return arr;
    };
    const smooth = (pts, lw) => {
        ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++)
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, (pts[i].x + pts[i + 1].x) / 2, (pts[i].y + pts[i + 1].y) / 2);
        ctx.stroke();
    };
    smooth(loop(R, seed, 10, 14), 5); smooth(loop(R * 0.7, seed + 999, 10, 14), 3);
}
function drawLine(ctx, cx, cy, R, seed) {
    const radial = (baseR, s, n) => {
        const arr = [];
        for (let i = 0; i < n; i++) { const a = SR(s + i * 12.9898) * Math.PI * 2, d = SR(s + i * 78.233) * baseR; arr.push({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d }); }
        return arr;
    };
    const poly = (pts, lw) => {
        ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.closePath(); ctx.stroke();
    };
    poly(radial(R, seed, 20), 10); poly(radial(R * 0.7, seed + 999, 20), 14);
}

function bake(style, variant, frameIdx) {
    const R = CFG.faceRadius, pad = R + 14 + 6, size = Math.ceil(pad * 2);
    const cv = document.createElement('canvas'); cv.width = size; cv.height = size;
    const ctx = cv.getContext('2d');
    ctx.strokeStyle = CFG.color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    (style === 'line' ? drawLine : drawCircle)(ctx, pad, pad, R, variant * 1000 + frameIdx * 7.77 + 3.3);
    return cv;
}
const CACHE = { key: null, frames: null };
function ensureCache(style) {
    const key = `${style}|${CFG.variants}|${CFG.framesPerLoop}|${CFG.faceRadius}`;
    if (CACHE.key === key) return;
    CACHE.frames = [];
    for (let v = 0; v < CFG.variants; v++) { const a = []; for (let f = 0; f < CFG.framesPerLoop; f++) a.push(bake(style, v, f)); CACHE.frames.push(a); }
    CACHE.key = key;
}

// 目前是否該套用識別障礙（催眠系統開 + 強控中）
function _active() { return CONFIG.enabled && CONFIG.hypnoEnabled && isForced(); }

// 面部塗鴉：畫在「他人」臉上（聊天室 / profile）
function _drawFaceCensor(C, X, Y, Zoom, ctx) {
    const style = CONFIG.faceCensorStyle === 'line' ? 'line' : 'circle';
    ensureCache(style);
    const HR = (typeof C.HeightRatio === 'number') ? C.HeightRatio : 1;
    // 臉部座標改用共用工具 faceAssetToBc（與喘氣／符咒同一套 bodyAssetToBc 定位公式，含身高/姿勢/活動位移補正）
    const f = faceAssetToBc(C, X, Y, Zoom);
    const faceX = f.x, faceY = f.y;
    const h = Hash(C.MemberNumber || C.ID || 0);
    const period = (CFG.loopSeconds * 1000) / CFG.framesPerLoop;
    const now = (typeof CurrentTime !== 'undefined') ? CurrentTime : Date.now();
    const idx = (Math.floor(now / period) + h) % CFG.framesPerLoop;
    const sprite = CACHE.frames[h % CFG.variants][idx];
    const scale = Zoom * HR;
    const dw = sprite.width * scale, dh = sprite.height * scale;
    const jx = (Math.random() - 0.5) * CFG.liveJitter * scale, jy = (Math.random() - 0.5) * CFG.liveJitter * scale;
    ctx.drawImage(sprite, faceX - dw / 2 + jx, faceY - dh / 2 + jy, dw, dh);
}

// 名牌黑塊（聊天室）：蓋在 BC 畫名字的位置（Drawing.js:493，Y+980*Zoom）
function _drawNameCensor(C, X, Y, Zoom, ctx) {
    if (!C.Name) return;
    const prevFont = ctx.font, prevAlign = ctx.textAlign;
    const name = (typeof CharacterNickname === 'function') ? CharacterNickname(C) : (C.Name || '');
    ctx.font = (typeof CommonGetFont === 'function') ? CommonGetFont(30) : '30px Arial';
    const nameW = ctx.measureText(name).width;
    const cx = X + 255 * Zoom, cy = Y + 980 * Zoom;
    const boxW = nameW + 16, boxH = 36;
    ctx.fillStyle = 'black';
    ctx.fillRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);
    ctx.font = prevFont; ctx.textAlign = prevAlign;
}

// profile：遮掉名字 / 暱稱 / ID（攔 DrawText / DrawTextFit 後補畫黑塊）
//  ⚠ DrawTextFit 會為了塞進指定寬度而「縮小字級、甚至從前面裁字」（見 Drawing.js DrawingGetTextSize）。
//   舊版一律用固定 36px 量測 → 長名字（Name 行超過 450px 很常見）實際被縮小繪製，算出的黑塊卻偏右又偏寬，
//   蓋不到縮小後的名字；而短的 ID/會員編號行不會縮放，黑塊剛好對上 → 形成「只遮 ID、沒遮 NAME」。
//   這裡改用 BC 同一套 DrawingGetTextSize 取得「實際繪製的文字與字級」再量測定位，任何長度都對得準。
function _maskProfileToken(Text, X, Y, Width) {
    if (typeof Text !== 'string' || (CONFIG.nameCensor || 'off') === 'off' || !_active()) return;
    if (!(CurrentScreen === 'InformationSheet' || CurrentScreen === 'OnlineProfile')) return;
    const C = (typeof InformationSheetSelection !== 'undefined') ? InformationSheetSelection : null;
    if (!C || (typeof C.IsPlayer === 'function' && C.IsPlayer())) return;
    const nick = (typeof CharacterNickname === 'function') ? CharacterNickname(C) : null;
    const tokens = [C.Name, nick, C.MemberNumber != null ? String(C.MemberNumber) : null];
    // 含關係網：主人、戀人的名字/編號也一併遮蔽。
    //  ⚠ 必須用 profile「實際畫出來」的欄位：主人＝OwnerName()（線上讀 Ownership.Name，非 MemberName）／OwnerNumber()，
    //    戀人＝lover.Name / lover.MemberNumber（GetLovership 同時涵蓋線上與 NPC）。舊版用 .MemberName → 取到 undefined，
    //    名字就漏遮，只剩編號被遮（見「關系」欄位）。
    if (CONFIG.nameCensor === 'network') {
        try {
            const on = (typeof C.OwnerName === 'function') ? C.OwnerName() : (C.Ownership && C.Ownership.Name);
            if (on) tokens.push(on);
            const onum = (typeof C.OwnerNumber === 'function') ? C.OwnerNumber() : (C.Ownership && C.Ownership.MemberNumber);
            if (onum != null && onum !== -1) tokens.push(String(onum));
        } catch (e) {}
        try {
            const loves = (typeof C.GetLovership === 'function') ? C.GetLovership() : (Array.isArray(C.Lovership) ? C.Lovership : []);
            (loves || []).forEach(l => {
                if (!l) return;
                if (l.Name) tokens.push(l.Name);
                if (l.MemberNumber != null) tokens.push(String(l.MemberNumber));
            });
        } catch (e) {}
    }
    // 去重＋濾空。一行可能同時含「名字＋編號」（例："Dating with Cherry (12345)"）→ 需把全部符合的 token 都遮，
    //  不能只遮第一個（舊版 break 只遮到一個，導致名字或編號其一漏遮）。
    const toks = [...new Set(tokens.filter(t => t != null && String(t).length > 0).map(String))];
    // DrawTextFit（有傳 Width）會縮字級/裁字 → 取實際繪製的文字與字級；DrawText 不縮放 → 原文 36px。
    let drawText = Text, fontSize = 36;
    if (Width != null && typeof DrawingGetTextSize === 'function') {
        try { const res = DrawingGetTextSize(Text, Width); if (Array.isArray(res)) { drawText = res[0]; fontSize = Number(res[1]) || 36; } } catch (e) {}
    }
    const prev = MainCanvas.font, prevFill = MainCanvas.fillStyle;
    MainCanvas.font = (typeof CommonGetFont === 'function') ? CommonGetFont(fontSize) : fontSize + 'px Arial';
    const fullW = MainCanvas.measureText(drawText).width;
    // 依實際對齊方式定位（讀 textAlign，不再靠呼叫端猜 centered）：left→X、center→X-半寬、right→X-全寬
    const align = MainCanvas.textAlign || 'left';
    const baseX = align === 'center' ? X - fullW / 2 : align === 'right' ? X - fullW : X;
    MainCanvas.fillStyle = 'black';
    for (const t of toks) {
        let from = 0, i;
        while ((i = drawText.indexOf(t, from)) >= 0) {
            const prefixW = MainCanvas.measureText(drawText.slice(0, i)).width;
            const tokW = MainCanvas.measureText(t).width;
            MainCanvas.fillRect(baseX + prefixW - 3, Y - 22, tokW + 8, 44);
            from = i + t.length;
        }
    }
    MainCanvas.font = prev; MainCanvas.fillStyle = prevFill;
}

export function hookCensor() {
    if (!modApi) return;
    try {
        // 臉 + 聊天室名牌：DrawCharacter 之後補畫（名字也是 DrawCharacter 內畫的）
        modApi.hookFunction('DrawCharacter', 1, (args, next) => {
            const r = next(args);
            try {
                const C = args[0], X = args[1], Y = args[2], Zoom = args[3];
                const ctx = args[5] || MainCanvas;
                // 略過背後陰影（人影 clone，MemberNumber=-99999）——它已整個黑化，不需再蓋臉部塗鴉。
                if (C && _active() && C.MemberNumber !== -99999 && !(typeof C.IsPlayer === 'function' && C.IsPlayer())) {
                    const inChat = typeof CurrentScreen !== 'undefined' && CurrentScreen === 'ChatRoom';
                    const inProfile = typeof CurrentScreen !== 'undefined' && (CurrentScreen === 'InformationSheet' || CurrentScreen === 'OnlineProfile');
                    if (CONFIG.faceCensor && (inChat || inProfile)) _drawFaceCensor(C, X, Y, Zoom, ctx);
                    if ((CONFIG.nameCensor || 'off') !== 'off' && inChat) _drawNameCensor(C, X, Y, Zoom, ctx);
                }
            } catch (e) {}
            return r;
        });
        // profile 名字/暱稱/ID 黑塊
        modApi.hookFunction('DrawText', 0, (args, next) => {
            const r = next(args);
            try { _maskProfileToken(args[0], args[1], args[2]); } catch (e) {}   // 無 Width：不縮放，整段 36px
            return r;
        });
        modApi.hookFunction('DrawTextFit', 0, (args, next) => {
            const r = next(args);
            try { _maskProfileToken(args[0], args[1], args[2], args[3]); } catch (e) {}   // args[3]=Width：可能縮字級/裁字
            return r;
        });
    } catch (e) {
        console.warn('🐈‍⬛ [HSC] 識別障礙 hook 失敗:', e.message);
    }
}
