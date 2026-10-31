# Miyuki 教學首頁｜靜態課程版

## 內容

- 五門課程：資訊科技、資訊安全、進階程式設計、從零開始學AI、Python程式設計。
- 資訊科技：9章、36個單元，依老師提供的章節名稱整理。
- 其他4門課程保留入口，尚未提供章節，因此顯示「即將開課」。
- 深色科技風課程卡片、章節展開／收合、單元搜尋、教材數量統計。
- 保留既有4份硬體與網路教材於第6章，及多功能抽籤工具常用連結。
- 未填教材網址的單元顯示「教材準備中」，不會產生無效按鈕。
- 課程清單完全來自本機 courses-data.js，不讀取試算表、不呼叫 GAS、不使用 iframe，開啟本機 index.html 也能查看。使用者點選外部教材後，仍依該教材網站本身的權限使用。

## 上傳 GitHub

1. 解壓縮檔案。
2. 將 index.html、catalog.js、courses-data.js 上傳至儲存庫最外層，覆蓋舊版同名檔案；courses-data.js 是新增檔案，請一併上傳。
3. 按 Commit changes，等待 GitHub Pages 更新後按 Ctrl+F5。
4. 舊的 config.js 已不會被網頁使用，可以刪除。GAS 與試算表無須再維護，也不必變更其設定。

## 新增一個單元的教材連結（最簡單）

打開 courses-data.js，用 Ctrl+F 找到單元，例如「陣列」。原本是：

```javascript
{
  "id": "1-1",
  "title": "陣列",
  "url": "",
  "resources": []
}
```

把空白網址改成實際教材連結，例如：

```javascript
{
  "id": "1-1",
  "title": "陣列",
  "url": "https://example.com/array.html",
  "resources": []
}
```

example.com 只是格式範例，請替換成您的教材網址。儲存檔案並更新 GitHub 後，單元名稱就會成為可點擊的連結。

## 同一個單元放多份教材

在該單元的 resources 增加內容，例如：

```javascript
"resources": [
  { "name": "陣列教學簡報", "url": "https://example.com/slides" },
  { "name": "陣列互動練習", "url": "https://example.com/practice" }
]
```

教材數量會自動更新。若同時填 url 與 resources，會顯示單元主連結及額外教材。

## 新增其他課程的章節

在 subjects 中找到課程名稱，將該課程的 "chapters": [] 改成：

```javascript
"chapters": [
  {
    "id": "1",
    "title": "第一章的名稱",
    "description": "本章的簡短介紹。",
    "units": [
      { "id": "1-1", "title": "第一節名稱", "url": "", "resources": [] },
      { "id": "1-2", "title": "第二節名稱", "url": "", "resources": [] }
    ]
  }
]
```

可參考資訊科技現有章節複製格式，再修改名稱與連結。兩個單元或章節之間要有逗號，保留引號及大括號。

## 修改常用工具連結

courses-data.js 最前方的 shortcuts 可新增工具，例如：

```javascript
"shortcuts": [
  { "name": "工具名稱", "url": "https://example.com/tool" }
]
```

## 檔案用途

| 檔案 | 用途 |
| --- | --- |
| index.html | 網站文字、版面與科技風樣式 |
| courses-data.js | 五門課程、章節、單元及教材連結；日後主要修改這份 |
| catalog.js | 靜態課程顯示、搜尋及展開功能 |
| .nojekyll | GitHub Pages 靜態檔案設定 |
| README.md | 本說明 |

GitHub 與原本 ChatGPT 網址是兩個獨立的發布位置；在 GitHub 修改課程資料後，原本 ChatGPT 網址不會自動同步。
