<script setup>
import { useRoute } from 'vue-router'
import CustomLoadingIndicator from '~/assets/components/layout/Loading.vue'
import HamburgerMenu from '~/assets/components/layout/HamburgerMenu.vue'
import Socials from '~/assets/components/layout/Socials.vue'
const route = useRoute()
const { locale } = useI18n()

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
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
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
    <header class="mainHeader">
      <NuxtLink to="/" class="homeLink">
        邱君婷|Chiu Chun-Ting
      </NuxtLink>
      <HamburgerMenu />
    </header>

    <CustomLoadingIndicator />

    <NuxtPage />

    <footer>
      <Socials />
      <div>© 2025 Chiu Chun-Ting</div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  &.about{
    padding: 0;
  }
  &.series-name-id{
    .mainHeader{
      padding-bottom: 0;
    }
    .homeLink{
      visibility: hidden;
    }
  }
  .mainHeader{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

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
  >footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    color: var(--textGrey2);
    .socials{
      justify-content: center;
      align-items: center;
    }
  }
  .socials{
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    margin: 1rem auto;
    a{
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      background-position: center;
      background-size: contain;
      opacity: 0.9;
      transition-property: opacity;
      transition-duration: 1.6s;
      &:hover{
        opacity: 1;
      }
      &.fb{
        background-image:url('@/assets/img/icons/fb_light.png');	
      }
      &.email{
        background-image:url('@/assets/img/icons/mail_light.png');	
      }
    }
  }
}

</style>