// 初始化 GA4 並綁定 router

import { defineNuxtPlugin } from 'nuxt/app'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
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
  scriptTag.onload = () => {
    // 2. 初始化 dataLayer 與 gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
  
    window.gtag = gtag
  
    gtag('js', new Date())
    gtag('config', GA_ID, {
      send_page_view: false,
    })
    gtag('set', 'debug_mode', true)
  
    // 初始 page_view
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    })

    // 監聽路由變化
    const router = useRouter()
    router.afterEach((to) => {
      console.log(to.fullPath)
      gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_title: document.title,
        page_location: window.location.href,
      })
    })
  }
  document.head.appendChild(scriptTag as Node);
})