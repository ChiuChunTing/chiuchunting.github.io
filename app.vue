<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import CustomLoadingIndicator from '~/assets/components/layout/Loading.vue'
import HamburgerMenu from '~/assets/components/layout/HamburgerMenu.vue'

const route = useRoute()
const { t, locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const { baseURL } = runtimeConfig.app

const scrollY = ref(0)
onMounted(() => {
  const onScroll = () => {
    scrollY.value = Math.round(window.scrollY / window.innerHeight)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
// const nuxtApp = useNuxtApp()
// const unsubPageStart = nuxtApp.hook('page:start', show)
// const unsubPageFinish = nuxtApp.hook('page:finish', hide)
// onBeforeUnmount(() => {
//   unsubPageStart()
//   unsubPageFinish()
// })

const url = useRequestURL()
useHead({
    link: [
      { rel: 'icon', type: 'image/png', href: `${baseURL}favicon-96x96.png` },
      { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
      { rel: 'shortcut icon', href: `${baseURL}favicon.ico` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}apple-touch-icon.png` },
      { rel: 'canonical', href: url.href},
    ]
})

useSeoMeta({
  ogSiteName: '邱君婷 Chiu Chun-Ting',
  title: '邱君婷 | Chiu Chun-Ting',
  ogTitle: '邱君婷 | Chiu Chun-Ting',
  ogImage: `${baseURL}square.png`,
  twitterImage: `${baseURL}square.png`,  
  twitterCard: "summary_large_image",
  twitterTitle: '邱君婷 | Chiu Chun-Ting',
  ogImageWidth: 1040,
  ogImageHeight: 1040,
  ogUrl: url.href
})

const localeMap = {
  'zh-TW': 'zh_TW',
  'zh-CN': 'zh_CN',
  'en': 'en_US'
}
const lang = computed(() => localeMap[locale.value] || 'zh_TW')
watch(lang, (newLang) => {
  useHead({
    htmlAttrs: {lang: newLang },
    meta: [
      { property: 'og:locale', content: newLang },
      { property: 'og:locale:alternate', content: 'zh_TW' },
      { property: 'og:locale:alternate', content: 'en_US' },
      { property: 'description', content: t('home.seo.description') },
      { property: 'og:description', content: t('home.seo.description') },
      { name: 'twitter:description', content: t('home.seo.description') },
    ]
  })
}, { immediate: true })

</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="main" :class="route.name">
    <NuxtLoadingIndicator 
      :throttle="0"
      :height="5"
      color="repeating-linear-gradient(to right, rgb(174, 214, 223) 0%, rgb(42, 132, 194) 100%)"
    /> 
    <header class="mainHeader" :class="`block${scrollY}`">
      <NuxtLink to="/" class="homeLink" rel="home" title="邱君婷 Chiu Chun-Ting">
        邱君婷|Chiu Chun-Ting
      </NuxtLink>
      <HamburgerMenu />
    </header>

    <CustomLoadingIndicator />

    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  &.index{
    .mainHeader{
      display: none;
      &.block5{
        display: flex;
      }
    }
  }
  &.about{
    padding: 0;
  }
  &.series-name-id{
    .mainHeader{
      position: initial;
      z-index: 1;
      padding-bottom: 0;
    }
    // .homeLink{
    //   visibility: hidden;
    // }
  }
  &.exhibitions{
    .mainHeader{
      position: initial;
      z-index: 1;
    }
  }

  .mainHeader{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    /* 平板模式 */
    // @media (max-width: 768px) {
    //   position: initial;
    //   z-index: 1;
    // }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    background: linear-gradient(to bottom, rgba(255,255,255, 0.8) 20%, transparent 100%);
    a{
      font-size: 0.9rem;
      /* 平板模式 */
      @media (max-width: 768px) {
        font-size: 0.8rem; 
      }
    }
  }
}

</style>