# 邱君婷 | Chiu Chun-Ting

[🚀 訪問網站 | Visit Website](https://israynotarray.com/)

📜 這是邱君婷的個人作品與展覽資訊網站，展示藝術創作與最新動態。

Chiu Chun-Ting's personal portfolio website, showcasing artistic creations and the latest exhibition updates.



## Setup

安裝

```bash
pnpm i
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

## 目錄結構

/pages: 用來定義路由，Nuxt 會根據檔案名稱自動產生路由。
/components: 用來放置可重複使用的元件。
/layouts: 定義網站的頁面結構 (如 header、footer 等)。
/assets: 儲存靜態資源，如圖片或 SCSS。
/static: 不會經過 webpack 處理的靜態檔案。
/i18n: 多國語言。

1. [@nuxt/image](https://image.nuxt.com/get-started/installation)
2. [@nuxt/i18n](https://i18n.nuxtjs.org/)