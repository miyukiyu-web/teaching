一、保留目前線上版 index.html 和 catalog.js，不需修改。
二、將本資料夾的 courses-data.js 與所有 course-*.js 上傳 GitHub teaching 根目錄。
三、日後新增科目：在 courses-data.js 的 subjects 增加一筆（id、name、code、description、file、chapters: []），另建對應 course-*.js。首頁永不需加 script 標籤。
四、修改課程章節或教材：只改對應 course-*.js。
五、重要：這個載入方案適用於目前 index.html 的一般 script 同步載入方式（courses-data.js 在 catalog.js 之前）。
六、這份更新包不包含 index.html，以確保您指定的線上首頁完全保持原樣。
