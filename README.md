# HSC — Hypnotic Slave Club (Bondage Club)

收到 `[Voice]` 訊息時觸發沉浸式催眠視覺／音效效果，支援 `/hsc` 指令。作者：莉柯莉絲(Likolisu)。

本專案以 **Vite** 打包成 `dist/assets/main.js` 與 `dist/assets/app.js`：使用者腳本先載入無靜態依賴的 `main.js`，同步完成防重複佔位後，才動態載入實際功能。GitHub Actions 於 push 到 `main` 時自動 build 並部署到 GitHub Pages。

## 文件

- [HSC 架構與擴充指南](docs/architecture.md)
- [互動式功能分支圖](docs/hsc-architecture.html)

## 安裝（使用者）

在 Tampermonkey 安裝 **`loader.user.js`**。它只是個載入器，會從 GitHub Pages 抓取打包後的主程式：
`https://awdrrawd.github.io/BC-HSC/assets/main.js`

## 開發

```bash
npm install
npm run dev      # vite build --watch + vite preview (port 5174)
npm run build    # 產生 dist/
npm run lint     # ESLint（no-undef 會抓出漏掉的跨模組 import）
```

本地測試：改裝 **`loader.local.user.js`**（從 `http://localhost:5174/assets/main.js` 載入），`npm run dev` 後重新整理 BC 分頁即可。

## 專案結構

```
loader.user.js          # 正式載入器（GitHub Pages）
loader.local.user.js    # 本地開發載入器（vite preview:5174）
<<<<<<< Updated upstream
vite.config.js          # 打包設定（單檔 inlineDynamicImports；__HSC_VERSION__ define）
=======
vite.config.js          # bootstrap + application chunk 打包設定；__HSC_VERSION__ define
>>>>>>> Stashed changes
# 素材來源（build 前由 scripts/copy-assets.mjs 複製到 public/，自我裝載、隨 Pages 部署）
Assets/                 # 集中的素材根目錄
  Icon/                 # icon（HSC-icon*.png）；幾乎不編輯，不算素材故獨立一夾
  Images/               # 會編輯的圖（crowd/electric/Hypnosis/Status 等）
  Sound/                # 音源（.mp3）；執行期由 bundle 同源抓（BC-HSC Pages）
Translation/            # i18n 字庫（文字資料不算素材，留在根目錄），一國一檔
public/                 # ← 由上面自動產生，已 gitignore；vite 部署到 Pages
src/
<<<<<<< Updated upstream
  main.js               # 進入點：設定 window.Liko.HSCApi、呼叫 initialize()
  modules/
    config.js           # 版本/共用可變狀態（CONFIG、modApi…）+ setter、預設值
    i18n.js             # 多語（引擎+字庫皆自我裝載自 BC-HSC，繁中 fallback 內建）
    storage.js          # ExtensionSettings / OnlineSharedSettings / IndexedDB / 匯入匯出
    icons.js            # 讀主題色(--tmd-element)/取樣畫布，自動挑 HSC-iconW / HSC-iconB + 按鈕色
    zlayers.js          # 集中的 z-index 分層表（上限 10，兩個堆疊環境）
    atmosphere.js       # 催眠模糊/淡紫（hook Player.GetBlurLevel/GetTints，BC 原生）
    geometry.js         # 畫布座標、頭/嘴位置換算、快取
    util.js             # 興奮度、BCX 清單、文本工具、效果佇列、雜項
    effects.js          # 粉紅暈染/暗角/螺旋/電波/扭曲/校正
    effects2.js         # 彈幕/喘氣粒子/高潮特效
    sound.js            # 音源載入與播放
    character-fx.js     # 表情/興奮度/狀態訊息/訊息浮現/廣播/中央頭像
    depth.js            # 背景催眠深度循環（人影、模糊…）
    run.js              # 主效果流程 runEffect / 解析 [Voice]
    commands.js         # /hsc 指令、聊天輸入攔截
    panel.js            # 控制面板、白名單解析、DOM observer
    hooks.js            # DrawCharacter / OrgasmStage hook
    preference.js       # 偏好設定頁（PreferenceRegisterExtensionSetting）
    profile.js          # 角色資料頁 HSC 按鈕、遠端編輯、設定頁註冊
    styles.js           # CSS 動畫
    core-init.js        # 等待工具與 initialize()
=======
  main.js               # 無靜態 import：先防重複佔位，再動態載入 app.js
  app.js                # 公開 API 與實際 initialize() 入口
  core/                 # 設定、儲存、生命週期、指令、網路與 hooks
  expansion/            # i18n、接收端在地化與主題色 API
  util/                 # 共用工具、文字、幾何、圖示與 z-index
  ui/                   # 控制面板、偏好設定與角色資料頁
  hypno/                # 催眠狀態、強控說話、動畫與頭頂顯示
  effects/              # 視覺、音效、角色及背景干擾效果
>>>>>>> Stashed changes
```

### 模組化重點

- **共用可變狀態**（`CONFIG`、`EXPRESSION_SETS`、`modApi`、`_depthTimer`、`_domObserver`…）集中由擁有模組以 ESM live-binding 匯出，重新指派一律經 setter（`setConfig` / `setModApi`…），其他模組只讀。
- **i18n**：優先使用共用的 `window.Liko.i18n` 引擎（跨插件一致語系），未就緒時退回內建詞庫。
- **主程式版本號**來源為 `package.json`，經 vite `define` 注入為 `__HSC_VERSION__`；loader 採獨立版本，只有載入機制變更時才手動更新。
- **對外 API**：`window.Liko.HSC`（`trigger` / `test` / `runDepth` / `command` / `getConfig` / `save`…），供測試與其他插件連動。

## 部署

push 到 `main` → `.github/workflows/deploy.yml` 自動 `npm run build` 並發佈 `dist/` 到 GitHub Pages（需在 repo Settings → Pages 選 GitHub Actions 來源）。
