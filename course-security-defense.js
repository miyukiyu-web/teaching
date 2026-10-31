// 本檔只維護「資訊安全威脅與防護」的章節、單元與教材連結。
// 增刪科目、更名、排序請改 courses-data.js。
// 單元主教材：url；附加教材：resources。
(function () {
  const subject = window.TEACHING_COURSES.subjects.find(s => s.id === "security-defense");
  if (!subject) return;
  subject.chapters = [
  {
    "id": "1",
    "title": "密碼安全與身分驗證",
    "description": "密碼管理、身分驗證及存取控制",
    "units": [
      {
        "id": "1-1",
        "title": "第1週｜資安防護基本概念",
        "url": "",
        "resources": []
      },
      {
        "id": "1-2",
        "title": "第2週｜密碼安全原理",
        "url": "",
        "resources": []
      },
      {
        "id": "1-3",
        "title": "第3週｜密碼管理與保護",
        "url": "",
        "resources": []
      },
      {
        "id": "1-4",
        "title": "第4週｜身分驗證技術",
        "url": "",
        "resources": []
      },
      {
        "id": "1-5",
        "title": "第5週｜存取控制與權限管理",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "2",
    "title": "網路安全基礎",
    "description": "IP、DNS、TCP、UDP、HTTP、HTTPS及封包觀察",
    "units": [
      {
        "id": "2-1",
        "title": "第6週｜網路安全基礎（一）：IP與DNS",
        "url": "",
        "resources": []
      },
      {
        "id": "2-2",
        "title": "第7週｜網路安全基礎（二）：TCP與UDP",
        "url": "",
        "resources": []
      },
      {
        "id": "2-3",
        "title": "第8週｜網路安全基礎（三）：HTTP與HTTPS",
        "url": "",
        "resources": []
      },
      {
        "id": "2-4",
        "title": "第9週｜網路封包分析實作",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "3",
    "title": "網路攻擊與防禦",
    "description": "竊聽、防火牆及無線網路安全",
    "units": [
      {
        "id": "3-1",
        "title": "第10週｜網路攻擊與防禦概論",
        "url": "",
        "resources": []
      },
      {
        "id": "3-2",
        "title": "第11週｜網路竊聽與中間人攻擊",
        "url": "",
        "resources": []
      },
      {
        "id": "3-3",
        "title": "第12週｜DDoS攻擊與防禦",
        "url": "",
        "resources": []
      },
      {
        "id": "3-4",
        "title": "第13週｜防火牆與網路防護",
        "url": "",
        "resources": []
      },
      {
        "id": "3-5",
        "title": "第14週｜無線網路安全",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "4",
    "title": "系統安全與資安實作",
    "description": "系統防護、加密備份與期末專題",
    "units": [
      {
        "id": "4-1",
        "title": "第15週｜系統安全與漏洞防護",
        "url": "",
        "resources": []
      },
      {
        "id": "4-2",
        "title": "第16週｜資料加密與備份",
        "url": "",
        "resources": []
      },
      {
        "id": "4-3",
        "title": "第17週｜資安防護情境實作",
        "url": "",
        "resources": []
      },
      {
        "id": "4-4",
        "title": "第18週｜期末成果發表",
        "url": "",
        "resources": []
      }
    ]
  }
];
})();
