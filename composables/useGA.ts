// 提供事件追蹤方法
export function useGA() {
  const trackEvent = (
    eventName: string,
    params?: Record<string, any>
  ) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    } else {
      console.warn('[useGA] gtag 尚未載入')
    }
  }

  return { trackEvent }
}