# 自動檢查與部署

本機執行 `npm run check`：lint → 設定往返／遷移測試 → 表情回歸 → 偏好設定排列與白名單按鈕 → 翻譯 key／佔位符 → 建置。

## GitHub 必須做的設定

1. 將本輪檔案提交並推送。尚未推送前，遠端不會執行新流程。
2. Settings → Actions → General：允許此專案使用 GitHub Actions 及官方 actions。流程使用內建 GITHUB_TOKEN，不需要新增 PAT 或 Secret。
3. Settings → Pages → Build and deployment → Source：選 GitHub Actions；若已如此設定，不必重設。
4. 第一次 HSC checks 成功後，Settings → Rules → Rulesets 為 main 建立啟用中的分支規則：要求 PR、要求狀態檢查，選 HSC checks（來源 GitHub Actions）。若帳號／方案未提供 Rulesets，可使用可用的分支保護設定。
5. 檢查 github-pages environment 的部署分支允許 main。若有 required reviewers，每次部署仍需要指定人員批准。

## 已加入的流程

- PR、手動執行：HSC checks，使用 npm ci 和 Node 24；main 的檢查由部署流程呼叫同一份，不重複觸發。
- main 推送／手動部署：先呼叫相同檢查，成功才建置及部署 Pages。
- 發布後：檢查 JS、主要圖示、翻譯及共用引擎可讀取；EN/TW 翻譯比對此次提交，避免舊版本。重試仍失敗則該次工作顯示失敗，不自動回滾。
- lint 警告數必須為 0（`--max-warnings 0`）；語法／未定義等錯誤、警告與測試失敗都會阻止部署。
- `dist/` 不進版控：`main.js`、`app.js` 一律由 CI 在部署時建置，本機 build 的結果不需要也不應該提交，避免與倉庫建置產生差異衝突。
- 每週一 BC compatibility：對照 Bondage Club 原始碼，確認 HSC 掛鉤的 20 個 BC 函式仍存在、**函式內容與基準相同**，以及 `eslint.config.js` 的 BC 全域符號仍存在。發現差異時只開／更新一則 `bc-compat` issue 通知（內容沒變不重複打擾，差異消失自動關閉），工作流程本身不會失敗，也不影響部署。需在 Actions Variables 設定 `BC_SOURCE_REPO`（必填）與 `BC_SOURCE_REF`（選填）；未設定時略過。本機可用 `BC_SOURCE_DIR=<BC 根目錄> npm run check:bc`。

### BC hook 內容檢查（參考 AEE）

- 基準檔 `scripts/bc-compat-baseline.json` 記錄每個被 hook 函式的內容雜湊（原始碼 CRC32，CRLF 先正規化，與 ModSDK 的 `originalHash` 同一演算法），目前對應 BC R133。BC 改動該函式時，雜湊不同會在 issue 列出「內容有變動」，提醒你檢視 hook 行為是否仍正確。
- 確認 hook 在新版 BC 仍正確後，更新基準並提交：`node scripts/check-bc-compat.mjs --bc-dir <BC 原始碼> --update`。每次新增、移除 hook 後也要更新一次，否則下次檢查會列出「基準尚未收錄／已不再 hook」。
- `Player.GetBlurLevel` 這類成員（定義在 `CharacterCreate` 內）頂層找不到時，改找任何位置的同名函式屬性，只用於偵測變動。
- 名稱在執行期組出的 hook（例如 `hooks.js` 的高潮函式候選）無法解析，須在旁邊加 `// bc-compat: any-of 名稱A 名稱B …`。依列出順序，第一個存在的就是實際被 hook 的目標，只記錄它的雜湊；全部不存在才算缺失。
- 沒有基準檔時只做存在性檢查。結束碼：0 一致、1 有差異、2 檢查本身出錯。
- 檢查器本身由 `scripts/test-bc-compat.mjs` 測試（已納入 `npm test`，不需要 BC 原始碼）。

## 供應鏈與權限

- 所有 checkout 都設定 `persist-credentials: false`，後續步驟不留存 GITHUB_TOKEN；安裝一律用 `npm ci --ignore-scripts`，不執行依賴的安裝腳本（建置不需要）。
- CI 的 `npm audit --omit=dev --audit-level=high`：正式依賴有 high 以上漏洞就失敗。開發工具（vite、concurrently 等）的漏洞不阻擋發布，由 Dependabot 處理。
- `.github/dependabot.yml`：每週一台北時間 09:00 檢查 npm 與 GitHub Actions；npm 的 minor／patch 合併成一個 PR，major 各自獨立。需要在 Settings → Security 另外啟用 Dependabot alerts／security updates，才會收到已知漏洞通知。
- 同一個 PR 有新提交時，舊的 HSC checks 會被取消；main 的檢查不中斷。
- `deploy.yml` 的權限維持原樣（頂層 `pages: write`、`id-token: write`）。
- 尚未處理：載入器的 `@require`（bcmodsdk）與圖示／CDN 仍指向 `@main`，要鎖到 commit SHA 或 tag 必須由你決定釘選哪個版本。

## 範圍與後續

本輪先落實設定資料層、整份設定套用、催眠計時器卸載及上述 CI。UI 逐欄修改／遠端編輯尚未全部遷入共用更新入口；其他效果的 timer／事件仍需逐模組整理。

版面目前做幾何回歸，尚未在 CI 安裝瀏覽器執行像素截圖比較。每週 BC 相容性追蹤已加入，只做符號存在性檢查，不驗證參數簽章或行為。以上不需要額外 Secret。

發布後請在遊戲手動確認：調整清醒分鐘／延長開關與秒數、重載後仍保留；匯出再匯入；催眠中匯入停用設定；兩個帳號檢查表情還原同步。
