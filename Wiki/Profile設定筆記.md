# BC Mod：如何做一個「不被其他 mod 干擾」的獨立全螢幕畫面

通用筆記。不管你的 mod 叫什麼名字，只要是想在 Bondage Club 裡做一個
「點一下、接管整個畫面、點掉再回去」的功能（設定頁、小遊戲、任何全螢幕 UI），
都適用這套步驟。文末附上 HSC 的實際案例對照。

## 為什麼不要用「疊在共用畫面上」那招

最直覺的做法是 hook 某個現有畫面的 `XxxRun`/`XxxClick`（例如 `InformationSheetRun`），
判斷「我的功能開著」就畫自己的內容、不呼叫 `next()`。這樣做的根本問題：

- BC modSDK 的 `hookFunction(name, priority, fn)`，**優先權數字越大越先執行（越外層）**。
  你的 hook 能不能「蓋過」別人，取決於你的優先權數字夠不夠大。
- 這是一個**共用、多方插隊**的擴充點，沒有獨佔機制。只要有下一個 mod 用更高的
  優先權插進來，一樣會蓋在你上面——你今天贏過所有已知對手，不代表明天贏得了。
- 這種做法需要你知道所有其他 mod 的優先權數字，並且對方也得知道你的存在才能配合避讓。
  雙方都不知道對方存在時，這場「軍備競賽」沒有終點。

## 正確做法：真的切換 `CurrentScreen`

BC 主迴圈的本質是：

```js
if (typeof window[CurrentScreen + "Run"] === "function") window[CurrentScreen + "Run"]();
```

只要 `CurrentScreen` 不是你要離開的那個畫面（例如 `"InformationSheet"`），
遊戲主迴圈那一幀根本不會呼叫 `InformationSheetRun`，其他 mod 包在它上面的
hook 自然也不會被執行——不是「贏過對方」，是「對方的程式碼那一幀根本沒被叫到」。
這是結構性的隔離，不需要對方知道你存在、不需要比優先權數字，永遠不會被
「後來者優先權更高」打破。

### 步驟

**1. 選一個不會撞名的畫面字串**，例如 `"<YourModPrefix>_XxxScreen"`。

**2. 註冊 BC 畫面系統認得的幾個 `window[Screen + 動作]` 函式：**

```js
window[SCREEN + 'Background'] = 'Sheet';   // 必要！見下方「背景」說明
window[SCREEN + 'Run']    = () => { /* 每幀畫面 */ };
window[SCREEN + 'Click']  = () => { /* 點擊處理 */ };
window[SCREEN + 'Load']   = () => { /* 進入時（可留空）*/ };
window[SCREEN + 'Unload'] = () => { /* 離開時清理（可留空）*/ };
window[SCREEN + 'Exit']   = () => { /* Esc / 退出鍵行為 */ };
window[SCREEN + 'Resize'] = () => { /* 視窗尺寸變化（可留空）*/ };
```
這幾個名字（`Run/Click/Load/Unload/Exit/Resize/Background`）是 BC 每個畫面
的固定命名慣例，可以直接對照 BC 本體任何一個畫面的原始碼（例如
`InformationSheetRun/Click/Exit/Unload`、`LoginRun/Click/Load/Unload/Resize`）確認。

**3. 背景（容易漏掉）**：
`window[Screen + 'Background']` 決定畫面套用哪張背景圖（BC 原始碼裡到處都是
`XxxBackground = "某張圖"` 這種宣告）。沒設的話背景不會套用，會直接透出你切換
「前一個」畫面的背景（通常是聊天室），視覺上像破圖。偷懶的做法是直接沿用一個
現成、你也用得上的背景名稱（例如 `'Sheet'` 那張羊皮紙），不用自己準備新圖。

**4. 略過翻譯檔抓取（會導致卡很久，非常重要）**：
`CommonSetScreen` 切畫面時，內部會呼叫 `TextLoad()` 去抓
`Screens/<Module>/<Screen>/Text_<Screen>.csv` 這個翻譯檔。你的假畫面在
伺服器上不存在這個檔案，一定 404，而且會**退避重試**（幾秒 → 十幾秒 → …），
實測會卡到 2-3 分鐘才放棄。解法是 hook `TextLoad`，遇到自己的畫面名稱時
直接短路、不呼叫 `next()`：

```js
modApi.hookFunction('TextLoad', 1, (args, next) => {
    if (CurrentScreen === SCREEN) return true;   // 回傳 truthy，不要回傳 undefined
    return next(args);
});
```
（回傳 `true` 而不是完全不回傳，是為了盡量避免 `CommonSetScreen` 把「沒有值」
當成「載入失敗」而印警告；這部分沒有 BC 核心原始碼可以百分之百驗證，抓大方向
即可，就算 console 還是跳一行警告，只要功能正常，通常可以忽略。）

**這個 hook 要在 mod 一開始載入時就註冊好**，不要等使用者第一次點開功能才註冊——
免得連第一次進入都撞上這個問題。

**5. 進入畫面**：

```js
function openMyScreen() {
    // 先切畫面：此時你的「開啟中」狀態旗標還沒設，原本畫面的 XxxExit
    // 才會被正常觸發（讓其他 mod 收到正常的離開通知），不會被你自己
    // 「開啟中就攔截 Exit」的邏輯誤傷。
    CommonSetScreen(CurrentModule, SCREEN);
    // 畫面確定切過去之後，才真正進入「開啟中」狀態、開始畫東西
    myState.isOpen = true;
}
```

**6. 離開畫面**：

```js
function closeMyScreen() {
    myState.isOpen = false;
    if (CurrentScreen === SCREEN) {
        CommonSetScreen(CurrentModule, '原本畫面的名字');
    }
}
```

原本畫面若有「目前選中誰／看哪個角色」這類全域變數（像
`InformationSheetSelection`），只要你自始至終沒有清空它，切回去時通常會
自動沿用，不需要特地存一份再還原。

### 檢查清單（照順序踩雷）

1. 圖示/畫面殘留、被其他 mod 蓋掉 → 確認真的有 `CommonSetScreen` 切走，
   不是還停留在共用畫面上疊 canvas。
2. 切換後卡很久 → 忘了 hook `TextLoad` 短路 CSV 抓取。
3. 背景破圖、透出前一個畫面 → 忘了宣告 `window[Screen+'Background']`。
4. 二次進入行為怪異 → 檢查「開啟中」狀態旗標有沒有在畫面真的切過去
   **之後**才設定，而不是切換前就設定（會誤觸發原畫面的 Exit 邏輯）。
5. mod 本身若有多種安裝方式（loader 版 / 本體直裝版並存的可能）→
   別只靠 loader 檔案裡 `if (window.YourNamespace.YourMod) return;` 這種檢查，
   那只能防「同一份 loader 重複匯入自己」。真正塞資料、呼叫初始化邏輯的
   那個檔案（相當於這裡的 `main.js`）本身也要做同樣的重複檢查，因為誰先
   誰後、會不會被執行第二次，不是 loader 這層能完全保證的。

## HSC 的實際案例對照

| 步驟 | 對應到 HSC 的檔案/程式碼 |
|---|---|
| 畫面字串 | `core/config.js`：`HSC_SCREEN = "HSC_ProfileEdit"` |
| 註冊 Run/Click/…/Background | `ui/profile.js` 的 `_registerHscScreen()`，mod 載入時就呼叫 |
| hook TextLoad | `ui/profile.js` 的 `modApi.hookFunction('TextLoad', 1, ...)` |
| 進入畫面 | `ui/profile.js` 的 `openRemoteSettings(C)`：先 `CommonSetScreen` 再 `EXT.openRemote(...)` |
| 離開畫面 | `ui/preference.js` 的 `EXT.closeRemote()` |
| main.js 防重複初始化 | `src/main.js` 開頭的 `_hscAlreadyInitialized` 判斷 |

（原本走「優先權比大小」那條路的紀錄：`InformationSheetRun` 這類共用 hook
的優先權要設得比所有已知外部 mod 都高，這是治標的權宜做法，保留當防呆
用途沒問題，但不建議當主要解法。）
