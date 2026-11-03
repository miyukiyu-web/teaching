系統平台
===
## 一、電腦硬體
### 1-1 EDVAC：馮紐曼結構與現代電腦
1945 年 6 月，是現代電腦科學的里程碑。著名的美籍猶太裔數學家馮·紐曼（John von Neumann）與多位學者聯名發表了一篇長達 101 頁的報告《First draft of a report on the EDVAC》其中包括兩大建構電腦的原則：

> 1.大膽捨棄了十進制、改以二進制運算和儲存資料。
> 2.要被執行的程式得先放在記憶體中、要執行時再去記憶體中抓出來。

這兩點原則即為「可儲存程式的電腦（Stored Program Computer）」的核心的概念。
「可儲存程式電腦」這個概念並不是由馮紐曼提出，而是馮紐曼根據圖靈（Turing）提的圖靈機（Turing Machine）的想法，將可儲存程式電腦真正實作出來。
![](https://i.imgur.com/gVQC6Tv.png)

### 1-2 CPU架構與運行
* <font color=red>可儲存程式電腦（Stored Program Computer）的架構</font>，把即將被執行的程式放在記憶體中、要執行時再去記憶體中讀取出來
* 把<font color=blue>控制及算術邏輯單元</font>整合於一個晶片中，稱為<font color=red>微處理器（Microprocessor）</font>
* <font color=red>中央處理器（Central Processing Unit，CPU）</font>除了控制及算術邏輯單元外，還包含部份的記憶單元
* 電腦的五大單元：控制單元（CU）、算術邏輯單元（ALU）、記憶單元（Memory)、輸入單元(Input)、輸出單元(Output)
![](https://i.imgur.com/D2eh5db.png)

#### <font color=blue>■抽像概念</font>
![](https://i.imgur.com/I8WBPf3.png)

#### <font color=blue>■具體概念</font>
![](https://i.imgur.com/0rmmSTO.png)

#### 1-2.1 處理器(CPU)的關鍵發展
CPU的設計一直都是著重於通用性，簡單來說，就是什麼運算都得做
1. 一台電腦有多個CPU，或一個CPU內有多個「核心」：超級電腦則有數千到數萬個CPU，構成數百萬個運算核心
3. 網路連結了多台電腦，可以聯合多個CPU進行運算： 分散式系統，會把運算分散給許多網路上的電腦執行，例如：「雲端運算」平台
4. 圖形處理器加強了電腦的運算能力：
> * <font color=red>圖形處理器（Graphics Processing Unit，GPU）又稱顯示核心或繪圖晶片，是一種特殊用途的處理器，專門執行繪圖運算工作</font>
> * GPU通常具有數十個以上的運算核心，可執行大量計算

### 1-3 記憶裝置
![](https://i.imgur.com/P0aIx2v.png)
#### 1-3.1 RAM（Random Access Memory)隨機存取記憶體
RAM可分為
* 需要週期性充電的動態記憶體（DRAM）
* 不需要週期性充電的靜態記憶體（SRAM）

![](https://i.imgur.com/x4aj9r3.png)
圖示中的記憶體模組上一共有 8 個 DRAM 晶片。讓我們把一個 DRAM 晶片的內部結構剖開看看，會看到一個儲存陣列（Memorry Array）。CPU 會給這個儲存陣列「行地址」和「列地址」，就可以選出一個「儲存單元」。

常見的儲存單元包含了 4 bit 或 8 bit，每一個 bit 都會採用一個電路結構，我們稱為 DRAM 的一個「基本儲存單元」。這個基本儲存單元中包含了一個電晶體匹配一個電容。然後就可以視電容器是否有充電電荷存在、來判別目前的記憶狀態。

備註：位元（bit）是記憶體的最小單位，在二進位數字系統中，每個 0 或 1 就是一個 bit。

#### 1-3.2 ROM（Read Only Memory)唯讀記憶體
* ROM可讀取但無法寫入資料，電源關閉後資料仍會保留
* 適合用來存放開機自我測試程式與基本輸入輸出系統（Basic Input / Output System，BIOS）
![](https://i.imgur.com/gbtVFVJ.png)

#### 1-3.3 暫存器
* CPU的組成除了算術邏輯單元與控制單元外，還包含暫存器（Register）
* 暫存器是CPU內部暫時存放資料的地方，屬於CPU內部的記憶體，容量雖小，卻是存取速度最快的記憶體 
![](https://i.imgur.com/EBUDQ49.png)

#### 1-3.4 快取記憶體（Cache Memory）
* CPU內或CPU與主記憶體之間
* 存放即將可能被執行的程式與資料
* 可減少CPU對主記憶體（DRAM）的存取次數，提昇電腦整體執行速度。
* 快取記憶體容量雖比主記憶體小，但存取速度快於主記憶體
![](https://i.imgur.com/26s26nN.png)
#### ==Cache Memory的位置==
![](https://i.imgur.com/UdO7zIj.png)

#### 1-3.5 固態硬碟(SSD,Solid State Disk)
![](https://i.imgur.com/8KjVl7J.png)

#### 1-3.6 記憶體階層
![](https://i.imgur.com/S1ZYLZI.png)

## 二、系統平台的運作概念
系統平台指的是電腦系統中讓應用軟體執行的環境，包括電腦硬體、應用軟體、及作業系統，有些還包括網際網路

![](https://i.imgur.com/zU0xyNe.png)
#### 概念1：使用本地端運算平台的運作概念
> 1. 使用者向作業系統要求啟動硬碟中的WORD
> 2. 作業系將WORD載入主記憶體上
> 3. 再交CPU執行
> 4. 使用者在WORD中選擇列印
> 5. WORD要求作業系統列印
> 6. 作業系統將列印工作交給印表機

![](https://i.imgur.com/ASuzUeX.png)


#### 概念2：使用雲端運算平台的運作概念
> 1. 使用者向作業系統要求啟動硬碟中的Chrome
> 2. 作業系將Chrome載入主記憶體上
> 3. 再交CPU執行
> 4. 使用者在Chrome輸入Gmail網址
> 5. 連線Gmail伺服器
> 6. 在雲端收發電子郵件



## 三、作業系統
### 3-1 資源分配
多的工作需要使用有限的資源，可使用<font color=red>排程演算法</font>定各個工作取得資源的先後順序<font color=blue>
 ，一般評估作業系統進行工作排程所考量的要素測則如下：
> 1.CPU使用率：資源的用越高越好
> 2.工作完成量（throughput)：單位間所能完成的工作數
> 3.完工時間：一件工作進人系統，到其完時間，越短越好
> 4.等待時間：工作等待得服敄的時間總和，愈短愈好，且要兼顧公平性，避免有些工作長期占用資源，有些一直取不到資源
</font>
### 3-2 CPU工作排程

#### ==3-2.1 先到先執行（First-Come First-Served, FCFS）==
![](https://i.imgur.com/5u1soT4.png)
![](https://i.imgur.com/8y4Y08w.png)
![](https://i.imgur.com/uGrl5BD.png)

#### ==3-2.2 最短工作優先（Shortest Job First）==
![](https://i.imgur.com/QQhr740.png)
![](https://i.imgur.com/waNdNPK.png)

#### ==3-2.3 優先權排班法（Priority Scheduling, PS）==
![](https://i.imgur.com/NmZgLHw.png)
![](https://i.imgur.com/76bqyA8.png)
:::success
## 動動腦時間
![](https://i.imgur.com/MxXwBaS.png)
:::

### 3-3 記憶體配置

<font color=blue>記憶體配置過程中，其頁面的換出、換入需要頻繁磁碟I/O,會造成有較大的時間，因此好的頁面置換法應該追求最少的置換率</font>
:::info
#### 記憶體的分配使用
* <font color=red>主記憶體</font>預先切割成固定大小的<font color=red>「區塊」</font>
* <font color=red>程式</font>會預先被切成固定大小的<font color=red>「分頁」</font>，而分頁的大小跟主記憶體的區塊相同。
* 當主記憶體被塞滿，且有新的分頁必須移入時，主記憶體中的某些分頁必須讓位<font color=red>(移出)</font>
* 有時某些分頁必須再載入主記憶體，程序才能繼續執行，所以要將這些分頁再<font color=red>移入</font>

:::
> * 頁面置換演算法的功能：當出現缺頁異常，需調入新頁面而記憶體已滿時，置換演算法選擇被置換的物理頁面。
> * 頁面置換演算法的設計目標：儘可能減少頁面的調入調出次數，把未來不再訪問或短期內不訪問的頁面調出。

#### 3-3.1 先進先出置換法（First-In First-Out, FIFO）
* 思路：選擇在記憶體<font color=red>駐留時間最長</font>的頁面進行置換* 
* 特點：實現簡單；效能較差，調出的頁面可能是經常訪問的
最初的訪問次序依分頁編號為0-3
![](https://i.imgur.com/SHjNPlb.png)

#### 3-3.2 最久未使用置換法(LRU)
* 思路：選擇<font color=red >最長時間沒有被引用</font>的頁面進行置換，因為如果某些頁面長時間未被訪問，則它們在將來還可能會長時間不會訪問
* 特點：可能達到最優的效果，維護這樣的訪問連結串列開銷比較大
![](https://i.imgur.com/PKyUTCc.png)

#### 3-3.3 最少使用置換法（Least Frequently Used, LFU）
* 思路：選擇距離現在最長時間內<font color=red>沒有被訪問過或置換訪問次數最少的頁面</font>先調出。
* 特點：演算法開銷大，開始時頻繁使用，但以後不使用的頁面很難置換
詳細的置換過程見下圖：執行在4個頁幀中，假定最初的訪問次數a-＞8，b-＞5，c-＞6，d-＞2
![](https://i.imgur.com/kRoXGVS.png)

## 四、平行處理與分散式系統
![](https://i.imgur.com/lnbj2Fu.png)

### 4-1 平行處理
平行運算是指將一份工作切成較小的部分，交給<font color=red>多個處理器或多台電腦進行運算</font>
![](https://i.imgur.com/JdU4PdX.png)
![](https://i.imgur.com/uvmTmHC.png)

### 4-2 分散式系統：
* 分散式系統泛指一群<font color=red>透過網路連接在一起的機器</font>，通常是為了<font color=blue>「分擔資源需求」</font>，如主從架構(client-server)或同儕架構(peer to peer)
* 例如：同時上線玩遊戲的人數過多，需要分散到多台伺服器以達成分流。

![](https://i.imgur.com/q50Mphh.png)





:::success
### 動動手時間
請參考課本P105，觀察電腦資源使用狀況？
1. 程序管理
2. CPU及GPU負載
3. 記憶體分配
4. 網路流量
:::

## 資料參考來源
- [【Lynn 寫點科普】你知道你正在用的電腦是 70 年前發明的馮紐曼架構嗎？](https://www.inside.com.tw/article/9507-von-neumann-architecture)