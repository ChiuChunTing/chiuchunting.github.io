// 初始化 GA4 並綁定 router

import { defineNuxtPlugin } from 'nuxt/app'

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const GA_ID = runtimeConfig.public.ga4Id
  if (!GA_ID) return

  // 1. 注入 GA script
  const scriptTag = document.createElement('script')
  scriptTag.setAttribute('async', '')
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(scriptTag as Node);

  // 2. 初始化 dataLayer 與 gtag
  (window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  window.gtag = gtag;

  gtag('js', new Date())
  gtag('config', GA_ID, {
    send_page_view: false,
  })

  // 自動追蹤 PageView
  const router = useRouter()
  router.afterEach((to) => {
    gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href,
    })
  })
})