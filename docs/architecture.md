# HSC 架構

互動式架構圖：[hsc-architecture.html](hsc-architecture.html)（左側選功能，右側依「前端 → 功能規則 → 資料 → 通訊 → BC 邊界」顯示模組與實際檔案）。

## 啟動與公開邊界

- `src/main.js`：**沒有任何靜態 import**。ES 模組的相依會先於入口本體執行，若在此靜態匯入，防重複檢查就來不及阻止相依模組建立 hook、計時器或 DOM。它同步佔用 `window.Liko.HSC = {}`，再動態載入 `app.js`；載入失敗時只釋放自己尚未完成的佔位，之後可重試。
- `src/app.js`：空物件代表載入中的佔位，已有 `version` 才代表另一個實例完成初始化。通過後註冊公開 API（`trigger`、`test`、`runDepth`、`command`、`inSubscreen`、`hypno`、`isForced`、`wake`、`anim`、`getConfig`、`save`、`reload`、`exportSettings`、`importSettings`、`l10nTest`，以及 `expressions.getState`，`apiVersion` 1），再呼叫 `initialize()`。
- 建置為 `dist/assets/main.js`（約 2 KB）與 `app.js`；兩個檔案必須一起發佈。主程式版本號來自 `package.json`，經 Vite `define` 注入為 `__HSC_VERSION__`；`loader.user.js` 版本獨立。

## 模組邊界

| 目錄 | 責任 |
|---|---|
| `core/` | 設定模型與預設值、儲存、設定序列化／遷移、指令、Hidden 訊息送出佇列、初始化、集中式 Hooks |
| `effects/` | 語音、日常干擾與強控的視覺／聲音效果；效果生命週期與表情狀態 |
| `hypno/` | 催眠值與強控狀態機、符咒動畫、進度球、說話攔截 |
| `ui/` | 聊天室控制面板、BC 偏好設定頁、個人資料頁遠端編輯、CSS |
| `expansion/` | 共用翻譯引擎（`BC_i18n.js` 為執行期 fetch 的 IIFE）、UI 字串與聊天在地化 |
| `util/` | 幾何與畫布常數、文字、圖示與主題色取樣、z-index 宣告、通用工具 |
| `Translation/` | 11 語系字庫，一國一檔（UI 與聊天在地化各一套） |
| `Assets/` | `Icon/`、`Images/`、`Sound/` 素材；build 前由 `scripts/copy-assets.mjs` 複製到 `public/` |

共用可變狀態（`CONFIG`、`EXPRESSION_SETS`、`modApi`、`_depthTimer`、`_domObserver`…）集中由擁有模組以 ESM live-binding 匯出，重新指派一律經 setter（`setConfig`、`setModApi`…），其他模組只讀。

## 初始化流程（`core/core-init.js`）

1. 等待 bcModSdk（30 秒逾時）→ `registerMod`。
2. 等待登入與遊戲就緒 → 注入 CSS → 載入 i18n。
3. **等帳號真正登入後**才讀設定（否則會讀到登入前的空資料並覆蓋真資料）；先保存伺服器公告的上次催眠狀態，再 `loadSettings()`、開啟 `liko-hsc` IndexedDB、公布共享設定、註冊偏好設定頁。
4. 啟動日常干擾循環與催眠值衰減；依公告還原催眠進度（不重播儀式）。若催眠系統已停用卻殘留公告，改公告清除，避免他人頭上殘留進度球。
5. 安裝 Hooks 與監聽：角色繪製、幽靈、氛圍、座標錨點、高潮、個人資料按鈕、遠端編輯、輸入、說話攔截、L10N、識別障礙；等待聊天室。
6. 離開 `ChatRoom` 畫面的瞬間清一次暫態效果（hook `CommonSetScreen`，舊版改用輪詢備援）；`pagehide`／`beforeunload` 強制送出帳號更新佇列，避免 BC 的 2 秒 debounce 吞掉剛改的資料。
7. `modApi.onUnload` 負責卸載：計時器、observer、面板、overlay、樣式、canvas 濾鏡與表情效果。

## 觸發與效果

- **觸發偵測**：以 `MutationObserver` 監看聊天紀錄（`ui/panel.js` 的 `handleChatNode`），而不是 hook `ChatRoomMessage`。HSC 自己輸出的訊息帶 `data-hsc-owned` 標記並被略過，避免「輸出被當輸入再解析」。
- **流程**：`effects/run.js` 只在 `ChatRoom` 畫面內作用，依設定組合視覺與聲音；日常干擾由 `effects/depth.js` 依間隔循環。
- **效果生命週期**：`effects/lifecycle.js` 以「世代識別」取消工作——`stop()` 令既有工作失效並執行清理，新工作取得新世代，不受舊回呼影響。`transientEffects` 對應語音與日常效果，`forcedEffects` 對應強控期間效果。
- **表情**：`expression-state.js` 保證每個效果只能釋放自己的表情，原始快取直到最後一次還原才清除；對外只暴露唯讀快照（`expressions.getState`）。支援 WCE 的 `_Luzi` 眼睛組與 Emoticon 隔離。
- **z-index**：全部集中在 `util/zlayers.js`（上限 10），分為 `#hsc-overlay` 內部與 `body` 根層兩個堆疊環境；調整前後順序只改這裡。

## 催眠狀態機（`hypno/hypno.js`）

催眠值 0–100，未強控時每 12 秒 −1；達 100% 進入強控。強控為**時間制**：進入時清醒倒數＝自動清醒分鐘（關閉則無倒數）；強控中再被觸發且「延長」開啟，清醒時間加上設定秒數；倒數歸零或他人說出清醒詞（`wake`）立即清醒且催眠值歸 0。執行期數值重載後歸零，登入時依公告還原。強控中說話由 `hypno-speech.js` 攔截（四選一）。進度、符咒顏色與樣式、倒數經 `publishHypnoState` 公告，供他人在頭上顯示（`hypno-orb.js`，畫在 LSCG 狀態圖示上方、不重疊）。

## 資料與持久化

| 位置 | 內容 |
|---|---|
| `Player.ExtensionSettings.HSC` | 設定本體（LZString 壓縮，隨帳號同步；警戒線 `ES_BUDGET` 5 KB） |
| `Player.OnlineSharedSettings.HSC` | 對外公告：版本、各類內容的編輯權限、白名單（只含公開可展開的項目）、催眠進度／符咒／倒數 |
| localStorage | 每個帳號分開的本機設定備份（`ExtensionSettings` 被清空或登入時尚未載入時還原並補回伺服器）；音效設定 `HSC_sounds`（同瀏覽器跨帳號共用） |
| IndexedDB `liko-hsc` | 本機上傳的音效 bytes 與大量文本 |

文本內容**不放**在公開的 `OnlineSharedSettings`，只由 `HSC_PermReply` 攜帶。白名單支援會員編號與 `$owner`／`$lover`／`$friend`／`$white`；公開快照只展開 `$owner`／`$lover`，`$friend` 與 `$white` 是私人名單，不外露。設定序列化、深合併與舊版欄位遷移在 `core/settings-data.js`；`forcedGrowthDiv` 已停用但保留欄位以相容舊存檔。

## 通訊

所有 HSC 隱藏訊息（`ChatRoomChat`、`Type: Hidden`）都經 `core/net.js` 的 `hscServerSend`：任兩則至少間隔 250 ms，相同 `dedupeKey` 在視窗內（預設 800 ms）只送一次，回覆類可插隊。原因是 BC 的每則 Hidden 訊息都會廣播給房內所有人並被每人解析一次，瞬間連送容易造成 socket 尖峰。

| Tag | 用途 |
|---|---|
| `HSC_PermQuery` / `HSC_PermReply` | 查詢與回覆他人的編輯權限與文本 |
| `HSC_Access` | 通知對方有人正在檢視其文本（名稱為遠端可控文字，不得再被當成輸入解析） |
| `HSC_SetTexts` / `HSC_SetTextsAck` | 遠端編輯與確認；接收端驗證編輯權限後才套用 |
| `HSC_Changed` | 設定變更通知 |
| `HSC_Hypnotized` | 催眠廣播（持續時間、強度），供他人顯示喘氣 |

聊天在地化沿用共用引擎：送出時 Text 放英文底本，Dictionary 夾帶 `Liko_L10N` 標記，接收端依自己的語言改寫（`expansion/l10n.js`）。

## BC Hooks

Hook 分散在負責該功能的模組內（不是全在 `core/hooks.js`），共 20 個 BC 函式列入相容基準（R133）：

| 函式 | 位置 | 優先序 |
|---|---|---|
| `LoginResponse`、`ChatRoomRun`、`ChatRoomLeave`、`CommonSetScreen` | `core/core-init.js` | 0／0／0／5 |
| `ChatRoomCharacterViewDrawOverlay`、`Player.GetBlurLevel`／`HasTints`／`GetTints`、`DrawCharacter` | `core/hooks.js` | 1／4／1 |
| 高潮函式（`ActivityOrgasmStart` 等候選，存在才掛） | `core/hooks.js`（失敗退回 500 ms 輪詢 `OrgasmStage`） | 0 |
| `DrawCharacter`、`DrawText`、`DrawTextFit` | `effects/censor.js` | 1／0／0 |
| `DrawCharacter`（幽靈） | `effects/depth.js` | 2 |
| `ChatRoomSendChat` | `hypno/hypno-speech.js` | 5 |
| `TextLoad`、`InformationSheetRun`／`Click`／`Exit`、`ChatRoomMessage`、`ChatRoomSyncSingle`／`SyncCharacter` | `ui/profile.js` | 1／5／5／5／1／1／1 |
| `ChatRoomMessage`（L10N 改寫） | `expansion/BC_i18n.js` | 5 |

- 優先序數字大者先跑、屬外層。氛圍效果不自行繪製，而是透過 `Player.GetBlurLevel`／`GetTints` 讓 BC 的原生繪製管線處理，平時完全 `next(args)`。
- 掛鉤函式前先確認它存在：對不存在的名稱呼叫 `hookFunction` 會拋錯，而 bcModSdk 沒有 `try/finally`，BCX 的 context 會殘留並在登入後造成 `Root context when we already have context`。
- 執行期組出名稱的 hook 須在旁邊加 `// bc-compat: any-of 名稱A 名稱B …`，供相容性檢查器解析。

## 遠端編輯的獨立畫面（`ui/profile.js`）

遠端編輯**不是**疊在 `InformationSheet` 上，而是真的切換 `CurrentScreen` 到 `HSC_ProfileEdit`（`core/config.js` 的 `HSC_SCREEN`），讓其他 mod 掛在 `InformationSheet*` 上的 hook 那一幀根本不被呼叫，不必比優先權。實作要點與踩雷清單見 [standalone-screen.md](standalone-screen.md)。

## 設計原則與注意事項

1. **main.js 不得有靜態 import**；新增啟動時機的程式一律放 `app.js` 之後。
2. **不信任對方資料**：遠端可控文字（名稱、文本、訊息）不得進入 `innerHTML`，也不得被當成觸發輸入；遠端輸入有長度與數量上限，並以權限驗證後才套用。
3. **權限以對方公告為準**：能否編輯某類內容依對方公告的編輯模式（`off`／`whitelist`／`any`）與白名單判斷；接收端再次驗證。
4. **效果應可取消**：新效果的計時器、事件與 DOM 應掛在 `transientEffects` 或 `forcedEffects` 的 `onStop`，並用 `checkpoint()` 判斷回呼是否過期。
5. **強控須可自助解除**：`/hsc wake` 與計時清醒不應被任何效果或設定阻擋。
6. **新增 UI 文字同步 11 語系**；`scripts/check-translations.mjs` 檢查鍵與佔位符一致（UI 用 `{name}`，聊天在地化用 `{0}`）。
7. **新增、移除 hook 後更新相容基準**（見 [automation.md](automation.md)）。
8. 動畫與座標相關改動先讀 [ritual-coordinates.md](ritual-coordinates.md)。
