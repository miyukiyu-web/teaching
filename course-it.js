// 本檔只維護「資訊科技」的章節、單元與教材連結。
// 增刪科目、更名、排序請改 courses-data.js。
// 單元主教材：url；附加教材：resources。
(function () {
  const subject = window.TEACHING_COURSES.subjects.find(s => s.id === "it");
  if (!subject) return;
  subject.chapters = [
  {
    "id": "1",
    "title": "基礎程式設計概念與實作",
    "description": "將想法寫成程式，逐步建立邏輯與實作能力。",
    "units": [
      {
        "id": "1-1",
        "title": "程式設計的概念",
        "url": "",
        "resources": []
      },
      {
        "id": "1-2",
        "title": "基礎程式設計的實作",
        "url": "",
        "resources": []
      }      
    ]
  },
  {
    "id": "2",
    "title": "資料結構與演算法概念",
    "description": "理解解題策略，練習比較不同方法的效率。",
    "units": [
      {
        "id": "2-1",
        "title": "資料結構",
        "url": "",
        "resources": []
      },
      {
        "id": "2-2",
        "title": "演算法",
        "url": "",
        "resources": []
      },
      {
        "id": "2-3",
        "title": "資料結構與演算法的應用",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "3",
    "title": "資料結構與演算法實作",
    "description": "從資料的排列方式，理解程式如何儲存與運用資訊。",
    "units": [
      {
        "id": "3-1",
        "title": "陣列資料結構實作",
        "url": "",
        "resources": []
      },
      {
        "id": "3-2",
        "title": "重要演算法實作與應用",
        "url": "",
        "resources": []
      },
      {
        "id": "3-3",
        "title": "演算法效能分析",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "4",
    "title": "系統平台運作原理",
    "description": "探索硬體、軟體與網路如何協同運作。",
    "units": [
      {
        "id": "4-1",
        "title": "系統平台簡介",
        "url": "",
        "resources": [
           {
            "name": "電腦組裝實驗室",
            "url": "https://ycsh-pc-assembly-lab.miyuki324.chatgpt.site/"
          },
          {
            "name": "電腦五大單元・資料流動實驗室",
            "url": "https://computer-flow-lab.miyuki324.chatgpt.site/"
          }
        ]
      },
      {
        "id": "4-2",
        "title": "工作管理與資源分配",
        "url": "",
        "resources": []
      },
      {
        "id": "4-3",
        "title": "網路運作原理",
        "url": "https://protocol-explorer-alpha.vercel.app/",
        "resources": [
           {
            "name": "網際網路與資料傳輸",
            "url": "https://script.google.com/macros/s/AKfycbxEIjgLicm8woNuXM0Ac0Z40E2z0xWaQg2MxcIqH7Dh4lPVQSDxRwhRLUszLPPBgd15/exec"
          },
          {
            "name": "封包實驗室",
            "url": "https://ycsh-tcp-udp-lab.miyuki324.chatgpt.site/"
          }
        ]
      }
    ]
  },
  {
    "id": "5",
    "title": "系統平台之未來發展",
    "description": "把搜尋、排序與遞迴轉化為可執行的程式。",
    "units": [
      {
        "id": "5-1",
        "title": "人工智慧",
        "url": "",
        "resources": []
      },
      {
        "id": "5-2",
        "title": "雲端運算",
        "url": "",
        "resources": []
      },
      {
        "id": "5-3",
        "title": "物聯網",
        "url": "",
        "resources": []
      },
      {
        "id": "5-4",
        "title": "第五代行動網路",
        "url": "",
        "resources": []
      },
      {
        "id": "5-5",
        "title": "量子電腦",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "6",
    "title": "大數據與機器學習",
    "description": "從資料找線索，認識機器學習與模式辨識。",
    "units": [
      {
        "id": "6-1",
        "title": "大數據的概念",
        "url": "",
        "resources": []
      },
      {
        "id": "6-2",
        "title": "資料分析的概念",
        "url": "",
        "resources": [
         
        ]
      },
      {
        "id": "6-3",
        "title": "常見的機器學習演算法",
        "url": "",
        "resources": [
         
        ]
      },
      {
        "id": "6-4",
        "title": "系統平台未來發展",
        "url": "",
        "resources": []
      }
    ]
  },
  {
    "id": "7",
    "title": "資訊科技應用",
    "description": "運用數位工具管理專案，完成團隊合作。",
    "units": [
      {
        "id": "7-1",
        "title": "數位合作共創的概念",
        "url": "",
        "resources": []
      },
      {
        "id": "7-2",
        "title": "專案管理的概念",
        "url": "",
        "resources": []
      },
      {
        "id": "7-3",
        "title": "版本控制的概念",
        "url": "",
        "resources": []
      },
      {
        "id": "7-4",
        "title": "資料分析小專題實作",
        "url": "",
        "resources": []
      }     
    ]
  },
  {
    "id": "8",
    "title": "資訊科技與人類社會",
    "description": "思考科技使用的責任，理解個人與社會的影響。",
    "units": [
      {
        "id": "8-1",
        "title": "資訊科技的合理使用原則",
        "url": "",
        "resources": []
      },
      {
        "id": "8-2",
        "title": "個人資料的保護",
        "url": "",
        "resources": []
      },
      {
        "id": "8-3",
        "title": "資訊科技對人與社會的影響與衝擊",
        "url": "",
        "resources": []
      }
    ]
  }
];
})();
