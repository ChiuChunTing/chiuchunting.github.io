# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 目錄結構

/pages: 用來定義路由，Nuxt 會根據檔案名稱自動產生路由。
/components: 用來放置可重複使用的元件。
/layouts: 定義網站的頁面結構 (如 header、footer 等)。
/assets: 儲存靜態資源，如圖片或 SCSS。
/static: 不會經過 webpack 處理的靜態檔案。

1. [@nuxt/image](https://image.nuxt.com/get-started/installation)