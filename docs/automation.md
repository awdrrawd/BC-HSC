# 自動檢查與部署

本機執行 `npm run check`：lint → 設定往返／遷移測試 → 表情回歸 → 偏好設定排列與白名單按鈕 → 翻譯 key／佔位符 → 建置。

## GitHub 必須做的設定

1. 將本輪檔案提交並推送。尚未推送前，遠端不會執行新流程。
2. Settings → Actions → General：允許此專案使用 GitHub Actions 及官方 actions。流程使用內建 GITHUB_TOKEN，不需要新增 PAT 或 Secret。
3. Settings → Pages → Build and deployment → Source：選 GitHub Actions；若已如此設定，不必重設。
4. 第一次 HSC checks 成功後，Settings → Rules → Rulesets 為 main 建立啟用中的分支規則：要求 PR、要求狀態檢查，選 HSC checks（來源 GitHub Actions）。若帳號／方案未提供 Rulesets，可使用可用的分支保護設定。
5. 檢查 github-pages environment 的部署分支允許 main。若有 required reviewers，每次部署仍需要指定人員批准。

## 已加入的流程

- PR、main 推送、手動執行：HSC checks，使用 npm ci 和 Node 24。
- main 推送／手動部署：先呼叫相同檢查，成功才建置及部署 Pages。
- 發布後：檢查 JS、主要圖示、翻譯及共用引擎可讀取；EN/TW 翻譯比對此次提交，避免舊版本。重試仍失敗則該次工作顯示失敗，不自動回滾。
- 保留現有 lint 警告；語法／未定義等錯誤與測試失敗會阻止部署。

## 範圍與後續

本輪先落實設定資料層、整份設定套用、催眠計時器卸載及上述 CI。UI 逐欄修改／遠端編輯尚未全部遷入共用更新入口；其他效果的 timer／事件仍需逐模組整理。

版面目前做幾何回歸，尚未在 CI 安裝瀏覽器執行像素截圖比較。每週 BC 相容性追蹤尚未啟用，需先選定版本來源與介面基準。以上不需要現在建立排程或額外 Secret。

發布後請在遊戲手動確認：調整清醒分鐘／延長開關與秒數、重載後仍保留；匯出再匯入；催眠中匯入停用設定；兩個帳號檢查表情還原同步。
