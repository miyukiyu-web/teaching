// 計畫成果資料：只需修改本檔，無須試算表或 GAS。
// 在任一計畫的 results: [] 內放入成果，例如：
// results: [
//   { name: "成果名稱", description: "簡短說明", url: "https://您的成果網址" },
//   { name: "活動紀錄", description: "", url: "https://您的紀錄網址" }
// ]
// 新增計畫：複製一個計畫物件，使用不同的 id，填入 name、code、description、results。
window.TEACHING_PROJECTS = [
  {
    "id": "youth-dream",
    "code": "DREAM / 01",
    "name": "青年百億圓夢計畫",
    "description": "彙整海外學習、交流活動與成果分享，記錄學生從探索到行動的學習歷程。",
    "results": [
        { name: "工作坊互動網頁", description: "115年10月03日嘉雲南區工作坊互動式網頁", url: "https://script.google.com/macros/s/AKfycbwKyB1qjUBBLRMwDbapXsHzDVfG_swgWFmXoRg5kbkey-rPoPVqs_kvkRlJBvMlopRaIg/exec" },
        { name: "成果網站", description: "115年青年百億圓夢計畫成果網頁", url: "https://script.google.com/macros/s/AKfycbxkewCpc9ABvsZXRHKZcep5w0fT3Y98iuguuHS8qFpewspxjr0iX5-FNUT1PZbvHw9p/exec" }
      
    ]
  },
  {
    "id": "ai-school",
    "code": "AI / 02",
    "name": "AI示範學校計畫",
    "description": "彙整 AI 教學實踐、課程設計與推動成果，分享科技融入教學的實作紀錄。",
    "results": []
  }
];
