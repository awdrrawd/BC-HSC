<h1 align="center">🌀 Liko-HSC — Hypnotic Slave Club</h1>
<h3 align="center">沉浸式催眠視覺與聲音效果</h3>

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.2-purple.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)
![BondageClub](https://img.shields.io/badge/BondageClub-Compatible-pink.svg)
![Languages](https://img.shields.io/badge/i18n-11%20languages-blue.svg)

</div>

Bondage Club UserScript：收到 `[Voice]` 訊息或自訂觸發詞時，播放沉浸式催眠視覺與音效；累積催眠值達 100% 後進入**催眠狀態（強控）**，並可在個人資料頁遠端編輯他人允許的催眠文本。  
A Bondage Club UserScript that plays immersive hypnosis visuals and sounds on `[Voice]` messages or custom trigger words. Accumulated hypnosis reaching 100% puts you into a **hypnotic state**, and others you allow can edit your hypnosis texts from your profile.

---

## ✨ 功能 · Features

### 🔊 語音催眠 · Voice Hypnosis
收到 `[Voice]` 訊息或自訂觸發詞時觸發（對象可限定為白名單或所有人）。  
Triggered by `[Voice]` messages or custom trigger words (anyone or a whitelist).

- **視覺**：粉紅暈染、催眠螺旋、同心圓電波、畫面扭曲、邊緣暗角、彈幕文字、氣喘粒子、訊息浮現、**高潮特效**（快照碎裂＋紅白閃＋震動；可設定「高潮時才觸發」或「每次都觸發」）。
- **角色**：表情切換（最多 10 組，4 組內建，可自訂編輯）、狀態 emote。
- **聲音**：喘息／催眠／高潮／深度四類音效庫（預設關閉），可選預設音源或上傳本機音檔。
- 強度 0.1–3.0；可啟用中央頭像模式；每次觸發可累加興奮值與催眠值。

### 🕯 日常干擾 · Daily Interference
無需觸發詞，依間隔（1–99 分鐘）定時播放輕度催眠效果：煙霧、氣喘、彈幕、幽靈、人影模糊、音效、訊息浮現、聊天紀錄模糊（可逐項開關）。

### 🌀 催眠狀態 · Hypnotic State
- **催眠值 0–100**：語音與日常干擾各自累加，未強控時每 12 秒 −1；達 100% 進入強控。
- **時間制清醒**：自動清醒 15–99 分鐘（或關閉自動清醒，只能靠清醒詞）；強控中再被觸發可延長 10–990 秒。他人說出清醒詞即清醒，本人隨時可用 `/hsc wake`。
- **強控效果**（皆可單獨開關）：世界模糊與淡紫染色、額頭符咒（持續震動）、面部與名稱識別障礙、畫面下緣圍觀人群、他人聊天／悄悄話化為彈幕、訊息煙霧遮蔽、進出訊息改為模糊敘述、催眠高潮。
- **說話攔截**：強控中說話會先發出「思考」動作，2 秒後隨機四選一：呆立不說話、停頓後照說原句、改說「催眠回應」中的一句，或被念頭占滿而觸發自慰活動（無法執行時改發動作描述）。整句剛好是「允許句」之一時不攔截。
- **他人可見**：頭上的催眠進度球、符咒與倒數，可選擇是否看到他人的氣喘。

### ✍ 個人資料頁遠端編輯 · Remote Editing
在其他玩家的個人資料頁開啟 HSC 按鈕（對方未安裝 HSC 不顯示；未授權為灰色）：依對方設定新增或移除催眠文本、狀態訊息、觸發詞、清醒詞、催眠回應與允許句。每類內容可分別設為**僅自己／白名單／所有人**。

### ⚙ 設定與面板 · Settings & Panel
- **BC 偏好設定 → HSC**：基本、效果、文本、表情、聲音、關於六個分頁，並含語音／日常／催眠狀態的獨立表單。
- **`/hsc show`** 開啟聊天室內的快速控制面板。
- 設定存於 BC 帳號並同步，可匯出／匯入 JSON；本機上傳的音檔與大量文本存在瀏覽器 IndexedDB。
- 白名單可含會員編號與代號 `$owner`（主人）、`$lover`（愛人，含 [AFC](https://github.com/awdrrawd/BC-AFC) 拓展戀人）、`$friend`、`$white`。

### 🌐 多語系 · i18n
繁體中文、簡體中文、英文、日文、韓文、德文、法文、西班牙文、越南文、俄文、烏克蘭文；語言預設跟隨遊戲。

---

## 💬 聊天指令 · Commands

| 指令 | 說明 |
|---|---|
| `/hsc help` | 顯示說明 |
| `/hsc setting` | 開啟設定頁 |
| `/hsc show` | 顯示聊天室控制面板 |
| `/hsc test [文字]` | 立即觸發一次語音效果 |
| `/hsc climax` | 測試高潮特效 |
| `/hsc wake` | 強控中立即清醒 |

---

## 📦 安裝 · Installation

| 方式 | 步驟 |
|---|---|
| **Tampermonkey / Violentmonkey** | 安裝 **[loader.user.js](https://github.com/awdrrawd/BC-HSC/raw/refs/heads/main/loader.user.js)**，載入器會抓取 CI 發佈在 GitHub Pages 的最新版 |
| **瀏覽器控制台** | 需已載入 [bcModSdk](https://github.com/Jomshir98/bondage-club-mod-sdk)；F12 → Console 貼上下方程式碼 |

```javascript
import(`https://awdrrawd.github.io/BC-HSC/assets/main.js?v=${Date.now()}`);
```

選用相容：BCX（「Hear my voice」類規則）、LSCG（進度球顯示在其狀態圖示上方）、[AFC](https://github.com/awdrrawd/BC-AFC)（`$lover` 白名單）、WCE（表情眼睛組）。

---

## 🛠️ 開發 · Development

ES 模組位於 `src/`，由 Vite 打包為極小的 `dist/assets/main.js`（入口）與 `app.js`（本體）；推送到 `main` 後由 GitHub Actions 檢查並部署到 Pages。

```bash
npm ci
npm run dev       # vite build --watch + preview :5174，搭配 loader.local.user.js
npm run build     # 產生 dist/（不進版控）
npm run lint      # ESLint，警告數必須為 0
npm test          # 生命週期、設定、表情、偏好排版、安全、BC 相容、翻譯
npm run check     # lint + test + build
npm run check:bc  # BC_SOURCE_DIR=<BC 根目錄>，比對被掛鉤的 BC 函式
```

本地開發：安裝 `loader.local.user.js`（讀 `http://localhost:5174/assets/main.js`），執行 `npm run dev` 後重整 BC 分頁。  
主程式版本號來源為 `package.json`（經 Vite `define` 注入為 `__HSC_VERSION__`）；loader 版本獨立，只有載入機制變更時才更新。

對外 API：`window.Liko.HSC`（`trigger`、`test`、`runDepth`、`command`、`hypno`、`isForced`、`wake`、`getConfig`、`save`、`reload`、`exportSettings`、`importSettings`、`expressions.getState`…），供測試與其他插件連動。

## 📚 文件 · Documentation

架構、自動化與實作筆記見 **[docs/](docs/README.md)**；互動式架構圖見 [hsc-architecture.html](https://awdrrawd.github.io/BC-HSC/docs/hsc-architecture.html)。

## 📄 授權 · License

MIT License © Likolisu。使用本專案程式碼時請附上來源連結或保留版權聲明。

🐾 Made with 🐾 by **Likolisu**
