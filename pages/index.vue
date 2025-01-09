<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

// const runtimeConfig = useRuntimeConfig() // 取得環境變數
// const appConfig = useAppConfig() //取得

let scrollInstance = null
const scrollContainerRef = ref(null) // 用於指向滾動容器
const swiperCreativeRef = ref(null)
const swiper = useSwiper(swiperCreativeRef)
const slides = ref(
  Array.from({ length: 6 }, (_, idx) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'
    return {
      id: idx + 1,
      bg: `rgba(${r}, ${g}, ${b}, 0.1)`,
      color: contrast,
    }
  }),
)
onMounted(() => {
  // scrollInstance = new LocomotiveScroll({
  //   el: scrollContainerRef.value, // 滾動容器
  //   smooth: true,              // 平滑滾動
  //   multiplier: 1,             // 滾動速度倍率
  // })
  console.log(swiper.instance)

})

onBeforeUnmount(() => {
  // if (scrollInstance) scrollInstance.destroy()
})
</script>

<template>
  <main ref="scrollContainerRef" class="home">
    <section>
      <NuxtImg src="/main_h.JPG" />
    </section>
    <section class="workSection">
      <div class="workSection-inner">
        <ClientOnly>
          <swiper-container 
            ref="swiperCreativeRef" 
            :loop="true"
            :navigation="true"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
            }"
            :effect="'creative'"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }" 
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: [0, 0, -400]
              },
              next: {
                translate: ['100%', 0, 0]
              },
            }" 
          >
            <swiper-slide
              v-for="slide in slides"
              :key="slide.id"
              :style="{
                backgroundColor: slide.bg,
                color: slide.color
              }"
            >
              <div class="workSection-img">
                <img :src="`https://picsum.photos/id/${Math.round(Math.random() * 100)}/400/300`" alt="">
                <p>adasdasdasdasdsadasdfdsvsdawdlkol;jiljnfealnflanf</p>
              </div>
              <div>
                
              </div>
              <NuxtLink :to="`/works/${slide.id}`">works {{ slide.id }}</NuxtLink>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </section>
    <section>
      自我介紹及contact
    </section>
  </main> 
</template>

<style lang="scss" scoped>
.home{
  padding: 0.5rem 1rem;
  section{
    img{
      width: 100%;
    }
    &:nth-child(1){
      // padding: 1rem;
      // background-color: rgb(105, 160, 142);
    }
    .workSection{
      background-color: rgb(76, 116, 154);
      min-width: 100vh;
      &-inner {
        width: 100%;
      }
      &-img{
        width: 20rem;
        img{
          width: 100%;
          background-color: #fff;
        }
        p{
          word-wrap: break-word;
        }
      }
    }
    &:nth-child(3){
      background-color: rgb(159, 155, 112);
    }
  }
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>