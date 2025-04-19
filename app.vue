<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useRoute } from 'vue-router'
import CustomLoadingIndicator from '~/assets/components/layout/Loading.vue'
import HamburgerMenu from '~/assets/components/layout/HamburgerMenu.vue'

const route = useRoute()
const { locale } = useI18n()
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

useSeoMeta({
  title: '邱君婷 | Chiu Chun-Ting',
  ogTitle: '邱君婷 | Chiu Chun-Ting',
  description:
    '邱君婷的個人作品與展覽資訊網站，展示藝術創作與最新動態。',
  ogDescription:
    '邱君婷的個人作品與展覽資訊網站，展示藝術創作與最新動態。',
  ogImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: '邱君婷 | Chiu Chun-Ting',
  twitterDescription: '邱君婷的個人作品與展覽資訊網站，展示藝術創作與最新動態。',
  ogImageWidth: 1280,
  ogImageHeight: 720,
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon',  href: '/favicon.ico' },
    { rel: 'apple-touch-icon',  sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ]
})

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value, // 當 locale 變化時，更新 lang 屬性
    }
  })
})
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
      <NuxtLink to="/" class="homeLink">
        邱君婷|Chiu Chun-Ting{{ scrollY }}
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