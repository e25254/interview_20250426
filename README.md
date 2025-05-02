# Next.js 專案

這是一個使用 [Next.js](https://nextjs.org) 建立的專案，使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 引導。

## 線上演示

本專案已部署在 GCP 上，您可以通過以下網址訪問：

[https://interview20250426.jerryjie.online/](https://interview20250426.jerryjie.online/)

## 環境變量配置

本專案使用環境變量來配置 API 基礎 URL。請按照以下步驟設置：

1. 將專案根目錄中的 `env.example` 文件複製並重命名為 `.env.local`（用於開發環境）：

```bash
# 在專案根目錄執行
cp env.example .env.local
```

2. 如有需要，可以修改 `.env.local` 中的變量值以適應您的開發環境。

3. 對於生產環境，您可以基於同樣的 `env.example` 創建 `.env.production` 文件：

```bash
# 在專案根目錄執行
cp env.example .env.production
```

### 環境變量說明

| 變量名                   | 說明               | 默認值                |
| ------------------------ | ------------------ | --------------------- |
| NEXT_PUBLIC_API_BASE_URL | API 服務的基礎 URL | http://localhost:3000 |

注意：

- 帶有 `NEXT_PUBLIC_` 前綴的環境變量在客戶端和服務器端都可訪問
- 設置或修改環境變量後需要重新啟動開發服務器才能生效

## 啟動專案

### 使用 Docker 啟動

#### 前提條件

- 已安裝 [Docker](https://www.docker.com/get-started)

#### 從 Docker Hub 拉取映像

您可以直接從 Docker Hub 拉取預構建的映像：

```bash
docker pull e25254/intervie_20250426:v1.0.0
```

然後運行容器：

```bash
docker run -p 3000:3000 e25254/intervie_20250426:v1.0.0
```

#### 本地構建映像

1. **構建 Docker 映像**

   ```bash
   docker build -t interview-app .
   ```

2. **運行容器**

   ```bash
   docker run -p 3000:3000 interview-app
   ```

3. **訪問應用**

   打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 不使用 Docker 啟動

#### 前提條件

- 已安裝 [Node.js](https://nodejs.org/) (版本為`v22.9.0`)
- 已安裝 npm (通常隨 Node.js 一起安裝)

#### 開發環境

1. **安裝依賴**

   ```bash
   npm install
   ```

2. **啟動開發服務器**

   ```bash
   npm run dev
   ```

   也可以使用：

   ```bash
   yarn dev
   ```

3. **訪問應用**

   打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

#### 生產環境

1. **安裝依賴**

   ```bash
   npm install
   ```

2. **構建應用**

   ```bash
   npm run build
   ```

3. **啟動生產服務器**

   ```bash
   npm start
   ```

4. **訪問應用**

   打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)


## 技術實作亮點

- **Tailwind CSS**：採用 Tailwind CSS 作為 UI 框架，實現響應式設計和組件化開發，確保跨裝置的一致視覺體驗
- **伺服器端渲染與資料預載**：透過 Next.js 伺服器端預先載入列表資料，大幅提升初次渲染速度與使用者體驗，減少頁面閃爍現象
- **SEO 優化**：透過 SSR 預渲染技術，在首次加載時預先加載前 10 筆資料，改善搜尋引擎索引效果，提升網站能見度
- **Intersection Observer API**：使用現代瀏覽器 API 實現高效的無限滾動，避免傳統 scroll 事件的效能問題，提供流暢的使用者體驗
- **Redux Toolkit**：採用 Redux 官方推薦的 toolkit 管理全局狀態，具有嚴謹的類型定義，確保狀態管理的可預測性和安全性
- **模組化架構**：依照功能將代碼分為 components、containers、modules 等層級，提高可維護性和可擴展性
- **TanStack Query 狀態管理**：採用 useQuery 優化 API 請求生命週期管理，實現智能快取、背景資料更新與失敗重試機制，降低網路請求負擔並提升使用者體驗
- **效能最佳化策略**：針對使用者交互實作 throttle 與 debounce 控制機制，在無限滾動與搜尋功能中有效防止頻繁 API 請求，大幅降低伺服器負載並優化前端渲染效能
