<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// const img = useImage()
import { useRoute } from 'vue-router'
import CustomLoadingIndicator from '@/assets/components/layout/Loading.vue'

const route = useRoute()
const socials = ref([{
  als:'FB',
  link: 'https://www.facebook.com/profile.php?id=1143919654',
  target: '_blank',
  rel: 'noopener noreferrer',
  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC'
},{
  als:'IG',
  link: 'https://www.instagram.com/chiu_j_t/',
  target: '_blank',
  rel: 'noopener noreferrer',
  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABWVBMVEVyHVFHcEx0Fvp8Fv1yFP1/FfyLCOyfBOmtAeS7AuDHAd3UANjZAs7rD6xyFvzjANTqAMHoA7l2F/yPFfx8GPmfD/zFF/XVWujoZuLyZt3pRt/yGdHyA8j1AKTViPj/9Pr////8g9f9A7r3DZz5vO794Pf+ruj9B6uzFPv7JLv+AJr+BI/+YMP/1vD+AIThG+n9GZn/vd3/YZz+AXP+GoT/r8r+AmT/b5z+HHH+I3f+G2P/ur7+FFD+Klb+fYv/wcr+LUf+LWX+AFn+Nzr+Ohz+RT7+inP+Si7/ztD+TxL/zbv+Wy//9fH+WgL+c1X+ZyX+PUv+Bzv+VXD+cxr/6eL+aQT+eAX+nDj+gwD+gxH+fSL+rYn+jwD+iwL+XhX/3rn/1bH9ZR/+lwP+nwH+xHH8ZC3+qAH+sAD+wAP+x1P+zGb+pl79mQn+uAD9J3T+ygD9O1n8pRL9twuaEkMNAAAAc3RSTlMBAF3G///////////GW9j//9nY/1r///////////7//////8b/////////////////////////////////////////////////////////////////////////////////xf///1v////////Y/9j/2VzGSus+GgAAAeNJREFUeAFFjEWiU0EQRc/tqu74V9wZ4TBiB6wG3wpzVoQ7zHCXeELypHH+KVchJAESaEs0IUv0Zv+7fwLgSAOk9ZFghcnfDw4AAg18cyhWCKNVob9NCZjQLWVrEGhJbJGDoCBpMwCrJTETAKBWgdeRGb4dmJW56PdI/KU1K4X15N+AFsW0+3/WVm7Pa0Pmu4Fh7HcbRIjMIhr3FItUGAH4SNZKjK32YjKpK3Iv0yUY0b8g0Vs0oK+8wbeyMBAQwVeo44R1z7XWq6rqpn5jiTmAeQO3iceg9zkYzKvc71iEmMFbqCJJ4tDcKFrLjX5D/MEdq8GpIUUgd/tgGboTgiUDPDZ44SXNpr0gWRcAgqEmEPJRNVPOxYaOth0oAHdCxWoOzslH+RCvlafYMgFUHvAIHoCjz16io80BrH/j0AAcJ9KWKkhn5sRyGjsDtr/sqyrsWNO1cW9/cDNLZgHLSzVvn+wMq9qbKKwy7TiIaKTW56pzW6Oa+N1OKEQdvvl2RyOE4DEOZurd1cHNeab27tyjOPfhFlucXP04ovF97B6jTOzdJwFLaNAff7N6c8incH1VpiSR67q2VgjzUU7JgbMTiQtFKmgAsCAuczlflmVZn7iGBFc1awB/p4tqUS3LDb8OPwBrSrZIO/KHZwAAAABJRU5ErkJggg=='
},{
  alt: 'EMAIL',
  link: 'mailto:cs@web4theme.com',
  target: '',
  rel: '',
  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEVHcEzZUUXXd2/z9PTeU0fZbmbo5+f0+vrx8vLbQjPaSz7WTkHotLHBOyzDTkPAOCjhhX7ZeHHEo6DqzMrFxcS8cGrae3Ti4uLMdm/p6urQ1NS8OSrl5eWBeqqfAAAAHXRSTlMAc5qd//z//////6Pxof3//+n////y6P/z//9ysazRhhoAAADtSURBVHgB1ZJXgoMwDERTXEUH7wo5uf85Y4mOyQEyCXXevC9uP5L74/klj7v0SmljXRZrtAcmCqWULzPClt4DFDOgIEmyeUrFQM0ES85zgEYAqGtgonUzYp3Mfd3MAHQ9OwAGIewgNYS/FfjHMC4S61rpx4A7gDD0MEkG4B76iDRugEEMQXuWeFDgdYhoTgCG2INYeJ76DEhEksA0R5MbmIi99zxHk+I2oJsAjDEGnvPekMsMTMiF97Qz+MWAfJ33RDlgnKNZQFcAOWJC/FdAaoWQPgcM1zNBR+DFgHTLfwe85KMsHu/LPCrufyEfyewjNsxN1fgAAAAASUVORK5CYII=',
}])

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
    '邱君婷邱君婷邱君婷邱君婷',
  ogDescription:
    '邱君婷邱君婷邱君婷邱君婷',
  ogImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: '邱君婷 | Chiu Chun-Ting',
  twitterDescription: '邱君婷邱君婷邱君婷邱君婷',
  ogImageWidth: 1280,
  ogImageHeight: 720,
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
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
    <header>
      <NuxtLink to="/">
        邱君婷 | Chiu Chun-Ting
      </NuxtLink>
      <nav>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/works">Works</NuxtLink>
        <NuxtLink to="/exhibitions">Exhibitions</NuxtLink>
        <!-- <NuxtLink to="/serial/2">serial 2</NuxtLink> -->
      </nav>
    </header>
    <CustomLoadingIndicator />
    <NuxtPage />
    <footer>
      <div>
        <a 
          v-for="(item, index) in socials"
          :key="index"
          :href="item.link" 
          :target="item.target" 
          :rel="item.rel"
        >
          <img :src="item.img" :alt="item.als">
        </a> 
      </div>
      <div>
        © 2024 Chiu Chun-Ting
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.main {
  &.about{
    padding: 0;
    >header{
      position: fixed;
      z-index: 1;
      padding: 1rem;
      a{
        color: #fff;
      }
    }
  }
  >header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    nav > a{
      margin: 0 1rem;
    }
  }
  >footer{
    display: flex;
    flex-direction: column;
    color: #999;
    >div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 1rem auto 0 auto;
      a{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        overflow: hidden;
        padding: 0.5rem .75rem;
        img{
          width: 100%;
        }
      }
    }
  }
}


</style>