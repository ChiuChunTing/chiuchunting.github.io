<script setup>
// https://ithelp.ithome.com.tw/articles/10332859
import { globalMiddleware } from '#build/middleware'
const isLoading = ref(false)
const isTransparent = ref(false)
let throttle = 0
let throttleTimer = null

const clear = () => {
  clearTimeout(throttleTimer)
  throttleTimer = null
}
const show = () => {
  clear()
  // 僅允許在客戶端進行狀態的改變
  if (process.client) {
	  if (throttle > 0) {
	    throttleTimer = setTimeout(() => {
	      isLoading.value = true
        isTransparent.value = false
	    }, throttle)
	  } else {
	    isLoading.value = true
	    isTransparent.value = false
	  }
  }
}
const hide = () => {
  clear()
  // 僅允許在客戶端進行狀態的改變
  if (process.client) {
    // 至少持續 1秒
    setTimeout(() => {
      isTransparent.value = true
	  }, 1000)
    // 至少持續 2秒
    setTimeout(() => {
	    isLoading.value = false
	  }, 2000)
  }
}

globalMiddleware.unshift(show)
const unsubRouterBeforeMiddleware = () => {
  globalMiddleware.splice(globalMiddleware.indexOf(show, 1))
}

const nuxtApp = useNuxtApp()
const unsubPageFinish = nuxtApp.hook('page:finish', hide)
const unsubError = nuxtApp.hook('vue:error', hide)

onBeforeUnmount(() => {
  unsubRouterBeforeMiddleware()
  unsubPageFinish()
  unsubError()
})
const router = useRouter()

router.onError(() => {
  hide()
})

router.beforeResolve((to, from) => {
  if (to === from || to.matched.every((comp, index) => comp.components && comp.components?.default === from.matched[index]?.components?.default))
    hide()
})

router.afterEach((_to, _from, failure) => {
  if (failure)
    hide()
})
</script>

<template>
  <div 
    class="loading" 
    :class="{
      'loader-visible': isLoading,
      'loader-transparent': isTransparent,
      'loader-hidden': !isLoading,
    }"
  >
    <div class="sprite"></div>
    <!-- <div class="sprite2"></div> -->
  </div>
</template>

<style lang="scss" scoped>
.loading{
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-items: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  // 模糊效果
  background-color: rgb(255 255 255 / 0.9);
  backdrop-filter: blur(4px);
  transition-property: background-color, visibility, opacity;
  transition-duration: 2s;
  &.loader-visible{
    visibility: visible;
    opacity: 1;
  }
  &.loader-transparent{
    opacity: 0;
  }
  &.loader-hidden{
    visibility: hidden;
    pointer-events: none;
  }
  .sprite {
    display:block;	
    margin:3em auto;
    background-repeat: no-repeat;
    background-position:0 0;
    background-color: transparent;
    width:543px; /* 6526/12 */
    height:380px;
    background-image:url('@/assets/img/fly.webp');	
    animation: fly 1.6s steps(12) infinite;
  }
  // .sprite2{
  //   display:block;	
  //   margin:3em auto;
  //   background-repeat: no-repeat;
  //   background-position:0 0;
  //   background-color: transparent;
  //   width:245px;
  //   height:400px;
  //   background-image: url(https://s.cdpn.io/13034/walker.png);	
  //   animation: walker 1s steps(5) infinite;
  // }
}
// @keyframes walker {
//   from {background-position:0 0;}
//   to {background-position:0 -4000px;}
// }
@keyframes fly {
  from {background-position:0 0;}
  to {background-position:-6526px 0;}
}
</style>