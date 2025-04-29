<script setup>
import { useRoute } from 'vue-router'
import CustomLoadingIndicator from '~/assets/components/layout/Loading.vue'
import HamburgerMenu from '~/assets/components/layout/HamburgerMenu.vue'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const baseURL = 'https://chiuchunting.github.io'

// 監聽 route（頁面切換）: locale-語系切換目前會換path
watch(
  () => route.path,
  () => {
    const lang = locale.value === 'zh-TW'? 'zh-TW' : 'en-US'
    const alternate = locale.value === 'zh-TW'? 'en-US': 'zh-TW'
    const currentPath = route.path

    const canonicalURL = `${baseURL}${currentPath}`
    const alternateURL = locale.value === 'zh-TW'
      ? `${baseURL}/en${currentPath}`
      : `${baseURL}${currentPath.replace(/^\/en/, '')}`
    
    console.log(canonicalURL);
    console.log(alternateURL);
    
    useHead({
      htmlAttrs: {lang: lang },
      link: [
        { rel: 'canonical', href: canonicalURL },
        { rel: 'alternate', hreflang: alternate, href: alternateURL }
      ],
      meta: [
        { property: 'og:locale', content: lang },
        { property: 'og:locale:alternate', content: alternate },
        { property: 'og:url', content: canonicalURL }
      ]
    })
  }, 
  { immediate: true }
)
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
      <NuxtLink :to="localePath('/')" class="homeLink" rel="home" title="邱君婷 Chiu Chun-Ting">
        邱君婷 | Chiu Chun-Ting
        <span class="visually-hidden">artist portfolio, exhibition archive, latest news</span>
      </NuxtLink>
      <HamburgerMenu />
    </header>

    <CustomLoadingIndicator />

    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.main {
  position: relative;
  width: 100vw;
  // &.index___en,
  // &.index___zh-TW{
    // .mainHeader{
    //   display: none;
    //   &.block5{
    //     display: flex;
    //   }
    // }
  // }
  &.about___en,
  &.about___zh-TW{
    padding: 0;
  }
  &.series-name-id___en,
  &.series-name-id___zh-TW{
    .mainHeader{
      position: initial;
      z-index: 1;
      padding-bottom: 0;
    }
  }
  &.exhibitions___en,
  &.exhibitions___zh-TW{
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