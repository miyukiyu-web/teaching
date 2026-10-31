// 所有科目統一在這裡新增、刪除、更名及調整顯示順序。
// 各科目的章節、單元、教材連結分別存放在 course-*.js。
// 首頁 index.html 保持原樣：先讀取 courses-data.js，再讀取 catalog.js。
window.TEACHING_COURSES = {
  "shortcuts": [
    {
      "name": "多功能抽籤工具",
      "url": "https://script.google.com/macros/s/AKfycbwqX4AE4kglrlO7CbSWjnWsPSh5Y5ZhrzlyovKC8f7OvFdo2PyLSE6ArHZErwoyb9gPFw/exec"
    }
  ],
  "subjects": [
    {
      "id": "it",
      "name": "資訊科技",
      "code": "CS",
      "description": "從資料結構到數位社會，建立完整的資訊科技基礎。",
      "file": "course-it.js",
      "chapters": []
    },
    {
      "id": "security",
      "name": "資訊安全概論",
      "code": "SEC",
      "description": "上學期18週：資訊安全、社交工程、資安威脅與攻擊。",
      "file": "course-security.js",
      "chapters": []
    },
    {
      "id": "security-defense",
      "name": "資訊安全威脅與防護",
      "code": "SEC2",
      "description": "下學期18週：密碼安全、身分驗證、網路安全、攻擊與防禦。",
      "file": "course-security-defense.js",
      "chapters": []
    },
    {
      "id": "advanced",
      "name": "進階程式設計",
      "code": "DEV",
      "description": "以Python演算法為核心，培養解題與程式設計能力。",
      "file": "course-advanced.js",
      "chapters": []
    },
    {
      "id": "ai",
      "name": "從零開始學AI",
      "code": "AI",
      "description": "從基本概念出發，探索人工智慧的原理與應用。",
      "file": "course-ai.js",
      "chapters": []
    },
    {
      "id": "python",
      "name": "Python程式設計",
      "code": "PY",
      "description": "從第一行 Python 開始，透過練習累積程式設計能力。",
      "file": "course-python.js",
      "chapters": []
    }
  ]
};

// 在瀏覽器解析首頁時，同步插入各科目 JS，確保 catalog.js 執行前內容已載入。
// 適用於 index.html 原有的一般 script 標籤：<script src="courses-data.js"></script>
// 未使用 async / defer 或 type="module"。請勿將本檔動態載入或改為 async。
for (const subject of window.TEACHING_COURSES.subjects) {
  if (!subject.file) continue;
  // 只接受本目錄下的 JS 檔案名稱，避免插入外部路徑。
  if (!/^[-a-zA-Z0-9_]+\.js$/.test(subject.file)) {
    console.error("無效的課程檔名：", subject.file);
    continue;
  }
  document.write('<script src="' + subject.file + '"><\/script>');
}
