// 本檔只維護「資訊安全概論」的章節、單元與教材連結。
// 增刪科目、更名、排序請改 courses-data.js。
// 單元主教材：url；附加教材：resources。
(function () {
  const subject = window.TEACHING_COURSES.subjects.find(s => s.id === "security");
  if (!subject) return;
  subject.chapters = [
  {
    "id": "1",
    "title": "資訊安全基本概念",
    "description": "CIA三要素與資訊安全事件",
    "units": [
      {
        "id": "1-1",
        "title": "第1週｜資訊安全概論",
        "url": "",
        "resources": []
      },
      {
        "id": "1-2",
        "title": "第2週｜資訊安全CIA三要素",
        "url": "",
        "resources": []
      },
      {
        "id": "1-3",
        "title": "第3週｜資訊安全事件與案例",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "2",
    "title": "社交工程手法與辨識",
    "description": "網路釣魚、假冒網站及郵件鑑識",
    "units": [
      {
        "id": "2-1",
        "title": "第4週｜認識社交工程",
        "url": "",
        "resources": []
      },
      {
        "id": "2-2",
        "title": "第5週｜網路釣魚攻擊",
        "url": "",
        "resources": []
      },
      {
        "id": "2-3",
        "title": "第6週｜假冒網站與網路詐騙",
        "url": "",
        "resources": []
      },
      {
        "id": "2-4",
        "title": "第7週｜電子郵件安全",
        "url": "https://miyuki-phishing-detective.miyuki324.chatgpt.site",
        "resources": []
      },
      {
        "id": "2-5",
        "title": "第8週｜社交工程實作（一）：釣魚郵件辨識",
        "url": "",
        "resources": []
      },
      {
        "id": "2-6",
        "title": "第9週｜社交工程實作（二）：AI協作鑑識",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "3",
    "title": "資訊安全威脅與攻擊",
    "description": "惡意程式、勒索軟體與常見攻擊",
    "units": [
      {
        "id": "3-1",
        "title": "第10週｜資訊安全威脅分類",
        "url": "",
        "resources": []
      },
      {
        "id": "3-2",
        "title": "第11週｜惡意程式介紹",
        "url": "",
        "resources": []
      },
      {
        "id": "3-3",
        "title": "第12週｜勒索軟體攻擊",
        "url": "",
        "resources": []
      },
      {
        "id": "3-4",
        "title": "第13週｜資料外洩與隱私風險",
        "url": "",
        "resources": []
      },
      {
        "id": "3-5",
        "title": "第14週｜常見網路攻擊",
        "url": "",
        "resources": []
      },
      {
        "id": "3-6",
        "title": "第15週｜網站與應用程式威脅",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "4",
    "title": "AI資安議題與案例探究",
    "description": "案例分析與期末成果發表",
    "units": [
      {
        "id": "4-1",
        "title": "第16週｜AI時代的資安威脅",
        "url": "",
        "resources": []
      },
      {
        "id": "4-2",
        "title": "第17週｜資安事件案例探究",
        "url": "",
        "resources": []
      },
      {
        "id": "4-3",
        "title": "第18週｜期末成果發表",
        "url": "",
        "resources": []
      }
    ]
  }
];
})();
