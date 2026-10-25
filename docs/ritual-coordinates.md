# 催眠儀式動畫座標系

`hypno/hypno-anim.js` 的符咒動畫（進場、穿到人物前方、縮小移到頭部、閃光、震動）全部以**同一套座標**定位：viewport 的 CSS 像素。

## 座標來源

```js
const rect = canvas.getBoundingClientRect();           // MainCanvas 在 viewport 的矩形
const cx   = rect.left + rect.width  * A.charXpct / 100;
const cy   = rect.top  + rect.height * A.charYpct / 100;
const cTop = cy - Hd / 2;                              // Hd = rect.height * A.charHpct / 100
const yHead = cTop + Hd * A.headYPct / 100;            // 腰、前方、頭部同理
```

- 動畫的外層容器是 `position: fixed; inset: 0` 的 DOM，所有元素以 viewport 座標放置。
- `_place(el, cx, cy, width, opacity)` 以 `translate(-50%, -50%)` 把元素**中心**放在 `(cx, cy)`；置中只靠它處理，建立元素時不得再加 `marginLeft`／`marginTop` 的置中偏移，否則會偏移兩次。
- 動畫參數（`charXpct`、`charHpct`、`waistPct`、`headYPct` 等）都在 `ANIM` 常數，以人物區矩形的百分比表示，調整位置只改這裡。

## BC 畫布與人物區

BC 主畫布是 `2000×1000`，人物位於左側 `1000×1000`。因此人物中心的水平位置以主畫布寬度的百分比表示（約 1/4 處），人物高度以畫布高度的百分比表示。

## 高 DPI

符咒 canvas 的 backing store 依 `devicePixelRatio`（上限 2）放大，CSS 尺寸維持邏輯大小，線條與光暈在高 DPI 螢幕上不會模糊。

## 不應採用的做法

- 不要把已算出的「中心」誤用成元素的左上角。
- 不要透過 `/2` 或 `/4` 反覆抵銷可見偏移；找出座標被多轉換一次的位置。
- 不要先轉成 BC 座標，再轉成其他座標，最後又轉回 CSS 座標；全程只用 viewport CSS 像素。
- 不要為了移動某個元素而改動人物或符咒動畫的位置。
- 不要在局部透明 canvas 填滿矩形暗角，否則 canvas 邊界可能可見。

## 動畫行為（改動時不應破壞）

符咒進場、停留與兩次閃光；符咒由人物後方穿到前方；符咒縮小並移動到頭部；人物快照淡入淡出；最後震動階段與動畫總時長；`done` 回呼、`stopHypnoAnim()` 與催眠狀態進入流程。
