# Miyuki 的教學日常｜GitHub 發布版

此套件是 2026-10-29 已接上 GAS 課程目錄的最新版網站前端，與目前發布的首頁使用相同的 index.html、catalog.js、config.js。

## 檔案

| 檔案 | 用途 |
| --- | --- |
| index.html | 個人教學首頁、版面與插畫 |
| catalog.js | 課程載入、重新讀取與 GAS 目錄嵌入 |
| config.js | 已填入目前使用的 GAS 正式部署網址 |
| .nojekyll | 讓 GitHub Pages 直接提供靜態檔案 |
| README.md | 上傳與維護說明 |

## 上傳到 GitHub

1. 解壓縮此套件。
2. 在 GitHub 建立儲存庫，例如 miyuki-teaching。
3. 選 Add file → Upload files，上傳解壓縮後的檔案。請把 index.html、catalog.js、config.js 放在儲存庫最外層，不要只上傳 ZIP，也不要再包一層資料夾。
4. 點 Commit changes。
5. 選 Settings → Pages。
6. Source 選 Deploy from a branch，分支選 main，資料夾選 / (root)，按 Save。
7. 等部署成功後，使用 Pages 頁面提供的正式網址開啟網站。

若 Windows 隱藏了 .nojekyll，仍可上傳其餘檔案；本網站沒有依賴以底線開頭的檔案。

## GAS 與試算表如何運作

- config.js 已設定您的 GAS 網頁應用程式網址及 embed 模式。
- 開啟首頁就會在「探索我的課程」區域載入現有 GAS 網頁，沿用該網頁讀取試算表的功能。
- 課程目錄內的視覺樣式、搜尋與科目分類由您現有的 GAS 前端提供。
- 修改試算表後，可按首頁「重新讀取」重新載入課程目錄。
- 若瀏覽器限制嵌入或需要 Google 登入，可按「另開課程目錄」。實際能否存取仍依 GAS 的部署權限及教材連結本身的權限而定。

## 搬到 GitHub 時需要重建 GAS 嗎？

不需要。此套件保存的是目前首頁前端，GAS 後端與試算表繼續使用原有部署，沒有包含 Google Apps Script 編輯器中實際部署程式的匯出備份。

若未來更換 GAS 部署網址，只需修改 config.js 內的 window.COURSE_API_URL，然後提交更新。請保留 window.COURSE_SOURCE_MODE = 'embed'。

## 維護

- 調整個人介紹或首頁設計：編輯 index.html。
- 更換 GAS 網址：編輯 config.js。
- 調整課程載入或嵌入功能：編輯 catalog.js。
- 更改課程內容：編輯原本的 Google 試算表，不需要修改 GitHub 檔案。

GitHub Pages 與原本網站是兩個獨立發布位置；之後在其中一處修改，不會自動同步到另一處。

GitHub 官方說明：
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

來源版本：8f8ba96e5823200aa74fd95ca302b129649255aa
