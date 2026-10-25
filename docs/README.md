# HSC 技術文件

供維護者使用；安裝與功能介紹見[專案 README](../README.md)。

**🗺 互動式架構圖：[開啟 HSC 架構與功能分支圖](https://awdrrawd.github.io/BC-HSC/docs/hsc-architecture.html)**（GitHub Pages）  
依「前端 UI → 功能規則 → 資料 → 通訊 → BC 邊界」列出每個功能的模組與實際檔案，可搜尋、切換深淺色。離線或本機查看請直接開啟 [hsc-architecture.html](hsc-architecture.html)；文字版見 [architecture.md](architecture.md)。

| 文件 | 用途 |
|---|---|
| [architecture.md](architecture.md) | 啟動與公開邊界、模組邊界、初始化、觸發與效果、催眠狀態機、資料、通訊、Hooks、設計原則 |
| [hsc-architecture.html](https://awdrrawd.github.io/BC-HSC/docs/hsc-architecture.html) | 互動式功能分支圖（Pages 線上版） |
| [automation.md](automation.md) | 指令、GitHub Actions、需要的 GitHub 設定、BC 相容追蹤 |
| [standalone-screen.md](standalone-screen.md) | 實作筆記：做一個不被其他 mod 干擾的獨立全螢幕畫面（含 HSC 對照） |
| [ritual-coordinates.md](ritual-coordinates.md) | 實作筆記：催眠儀式動畫的座標系原則 |
| [verification.md](verification.md) | **待辦**：尚需遊戲內驗收或釐清的項目 |

## 維護原則

- 文件只描述**現況**；已完成的修補不留流水帳，待驗證項目放 `verification.md`，完成即刪。
- 文件檔名用 ASCII：非 ASCII 檔名在某些壓縮工具會被轉成 `#Uxxxx` 形式而產生重複檔。
- 新增、移除 BC hook 後更新 `scripts/bc-compat-baseline.json`；改檔名或刪模組後同步更新 `hsc-architecture.html` 頂端的 `features` 陣列。
- 修改後：`npm run check`。
