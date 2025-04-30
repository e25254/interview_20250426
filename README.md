# Next.js 專案

這是一個使用 [Next.js](https://nextjs.org) 建立的專案，使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 引導。

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

#### 步驟

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

#### 其他 Docker 命令

- **在後台運行容器**

  ```bash
  docker run -d -p 3000:3000 interview-app
  ```

- **查看運行中的容器**

  ```bash
  docker ps
  ```

- **停止容器**

  ```bash
  docker stop <container_id>
  ```

- **重新構建（不使用緩存）**

  ```bash
  docker build --no-cache -t interview-app .
  ```

### 不使用 Docker 啟動

#### 前提條件

- 已安裝 [Node.js](https://nodejs.org/) (推薦使用 v20.x)
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

## 專案特點

本專案具有以下技術實現：

- **Tailwind CSS**：採用 Tailwind CSS 作為 UI 框架，實現響應式設計和組件化開發
- **伺服器端資料緩存**：將 API 資料存儲在 Next.js 伺服器端，減少重複請求並提升資料獲取效率
- **SEO 優化**：透過 SSR 預渲染技術，在首次加載時預先加載前 10 筆資料，改善搜尋引擎索引效果
- **Intersection Observer API**：使用現代瀏覽器 API 實現高效的無限滾動，避免傳統 scroll 事件的效能問題
- **Redux Toolkit**：採用 Redux 官方推薦的 toolkit 管理全局狀態，具有嚴謹的類型定義
- **模組化架構**：依照功能將代碼分為 components、containers、modules 等層級，提高可維護性
