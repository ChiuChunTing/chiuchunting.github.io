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
      // 目前都僅測到這種
	    isLoading.value = true
	    isTransparent.value = false
	  }
  }
}
const hide = () => {
  clear()
  // 僅允許在客戶端進行狀態的改變
  if (process.client) {
    // if(!isLoading.value){
    //   isLoading.value = true
    // }
    setTimeout(() => {
      isTransparent.value = true
      setTimeout(() => {
        isLoading.value = false
      }, 800)
	  }, 800)
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
  background-color: var(--white);
  transition-property: background-color, opacity;
  transition-duration: 1.6s;
  &.loader-visible{
    opacity: 1;
  }
  &.loader-transparent{
    opacity: 0.5;
  }
  &.loader-hidden{
    opacity: 0;
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

    @media (max-width: 600px) {
      transform: scale(.6);
    }
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
@keyframes fly {
  from {background-position:0 0;}
  to {background-position:-6526px 0;}
}
// @keyframes walker {
//   from {background-position:0 0;}
//   to {background-position:0 -4000px;}
// }
</style>