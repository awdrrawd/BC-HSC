# 自動檢查與部署

## 指令

| 指令 | 內容 |
|---|---|
| `npm run lint` | ESLint，`--max-warnings 0`；`no-undef` 會抓出漏掉的跨模組 import |
| `npm test` | 依序執行：生命週期取消／清理、設定往返與遷移、表情回歸、偏好設定排版與白名單按鈕、安全回歸、BC 相容檢查器、翻譯鍵與佔位符 |
| `npm run check` | lint → test → build |
| `npm run check:bc` | 對照 BC 原始碼，見下方「BC 相容追蹤」 |

測試是邏輯與模擬環境測試：排版只做幾何回歸，沒有在 CI 安裝瀏覽器做像素截圖比較（見 [verification.md](verification.md)）。

## GitHub Actions

| 工作流程 | 觸發 | 內容 |
|---|---|---|
| `ci.yml`（HSC checks） | PR、手動，並由 `deploy.yml` 以 `workflow_call` 呼叫 | Node 24、`npm ci --ignore-scripts`、`npm audit --omit=dev --audit-level=high`、`npm run check`；同一個 PR 有新提交時取消舊檢查，main 的檢查不中斷 |
| `deploy.yml` | push `main`、手動 | 先呼叫 `ci.yml`；成功後建置、上傳 `dist/`、部署 Pages；發布後執行 `scripts/check-deployment.mjs` |
| `bc-compat.yml` | 每週一、手動 | 對照 BC 原始碼檢查被 hook 的函式，見下方 |
| `dependabot.yml` | 每週一台北時間 09:00 | npm 與 GitHub Actions；npm 的 minor／patch 合併成一個 PR，major 各自獨立 |

- **發布後檢查**：`check-deployment.mjs` 重試取得 `assets/main.js`、`assets/app.js`、`Translation/EN.js`、`Translation/TW.js`、`HSC-iconW.png`、`expansion/BC_i18n.js`，確認不是 HTML 錯誤頁；EN／TW 翻譯另與本次提交內容逐位元比對，避免舊版殘留。重試仍失敗則該次工作失敗，**不自動回滾**。
- `dist/` 與 `public/` 不進版控：`main.js`、`app.js` 一律由 CI 部署時建置。
- 所有 checkout 設定 `persist-credentials: false`；安裝一律 `npm ci --ignore-scripts`（建置不需要依賴的安裝腳本）。開發工具（vite、concurrently 等）的漏洞不阻擋發布，由 Dependabot 處理。
- `deploy.yml` 的權限維持頂層 `pages: write`、`id-token: write`。

## 需要在 GitHub 設定

1. Settings → Actions → General：允許此專案使用 GitHub Actions 與官方 actions。流程使用內建 `GITHUB_TOKEN`，不需要 PAT 或 Secret。
2. Settings → Pages → Build and deployment → Source：選 **GitHub Actions**。
3. 第一次 HSC checks 成功後，Settings → Rules → Rulesets 為 `main` 建立規則：要求 PR、要求狀態檢查 **HSC checks**（來源 GitHub Actions）。方案不支援 Rulesets 時用分支保護。
4. `github-pages` environment 的部署分支允許 `main`；若有 required reviewers，每次部署仍需批准。
5. Settings → Security 啟用 Dependabot alerts／security updates，才會收到已知漏洞通知。
6. BC 相容追蹤需在 Actions Variables 設定 `BC_SOURCE_REPO`（必填）與 `BC_SOURCE_REF`（選填）；未設定時略過。

## BC 相容追蹤

每週一對照 Bondage Club 原始碼，確認 HSC 掛鉤的 20 個 BC 函式仍存在、**函式內容與基準相同**，以及 `eslint.config.js` 的 BC 全域符號仍存在。差異只開或更新一則 `bc-compat` issue（內容沒變不重複打擾，差異消失自動關閉）；工作流程本身不會失敗，也不影響部署。本機：`BC_SOURCE_DIR=<BC 根目錄> npm run check:bc`。

- 基準檔 `scripts/bc-compat-baseline.json` 記錄每個被 hook 函式的內容雜湊（原始碼 CRC32，CRLF 先正規化，與 ModSDK 的 `originalHash` 同一演算法），目前對應 BC **R133**。雜湊不同代表 BC 改動了該函式，請檢視 hook 行為是否仍正確。
- 確認無誤後更新基準並提交：`node scripts/check-bc-compat.mjs --bc-dir <BC 原始碼> --update`。**每次新增、移除 hook 後也要更新**，否則下次檢查會列出「基準尚未收錄／已不再 hook」。
- `Player.GetBlurLevel` 這類成員（定義在 `CharacterCreate` 內）頂層找不到時，改找任何位置的同名函式屬性，只用於偵測變動。
- 執行期組出名稱的 hook（例如高潮函式候選）無法解析，須在旁邊加 `// bc-compat: any-of 名稱A 名稱B …`；依列出順序，第一個存在的就是實際被 hook 的目標，只記錄它的雜湊，全部不存在才算缺失。
- 沒有基準檔時只做存在性檢查。結束碼：0 一致、1 有差異、2 檢查本身出錯。
- 檢查器本身由 `scripts/test-bc-compat.mjs` 測試（已在 `npm test` 內，不需要 BC 原始碼）。

## 已知限制

載入器的 `@require`（bcmodsdk）與圖示／CDN 仍指向 `@main`；要鎖到 commit SHA 或 tag，必須由維護者決定釘選哪個版本。
