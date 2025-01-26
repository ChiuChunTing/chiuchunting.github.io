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
      <NuxtImg src="/img/main.JPG" />
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
              <div class="workSection-swiper">
                <div class="workSection-img">
                  <img :src="`https://picsum.photos/id/${Math.round(Math.random() * 100)}/400/300`" alt="">
                </div>
                <div>
                  <h3>系列名稱{{ slide.id }}</h3>
                  <p>系列作品摘要系列作品摘要</p>
                  <NuxtLink :to="`/series-${slide.id}`">More</NuxtLink>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </section>

    <section class="center content about">
      <h2>自我介紹</h2>
      <p>本館歷經3年規劃，在2025年1月18日-5月11日終於推出德國觀念藝術家托瑪斯．德曼的首次個展。德曼1964年生於慕尼黑，主要在柏林和洛杉磯等地活躍創作，作品以大型的攝影及影像作品著稱。德曼的創作多取材自知名歷史或社會事件的報導圖片與影片，他先以紙材模型鉅細靡遺地重建現場，最後透過鏡頭的角度與構圖，試圖複製這段歷史場景以回朔所謂的真相，連結觀者的歷史與記憶。本展覽由獨立策展人道格拉斯．佛格策劃。本展集結藝術家近70件大型攝影作品、壁紙裝置以及2部動態影像，展現德曼處理攝影影像與真實世界之間互為表裡的對位關係，以及他對當代社會中影像文化慣性與認知悖論的提問。</p>
      <NuxtLink to="/about">More</NuxtLink>
    </section>

    <section class="center content exhibitions">
      <h2>最新展覽訊息</h2>
      <p>本館歷經3年規劃，在2025年1月18日-5月11日終於推出德國觀念藝術家托瑪斯．德曼的首次個展。德曼1964年生於慕尼黑，主要在柏林和洛杉磯等地活躍創作，作品以大型的攝影及影像作品著稱。德曼的創作多取材自知名歷史或社會事件的報導圖片與影片，他先以紙材模型鉅細靡遺地重建現場，最後透過鏡頭的角度與構圖，試圖複製這段歷史場景以回朔所謂的真相，連結觀者的歷史與記憶。本展覽由獨立策展人道格拉斯．佛格策劃。本展集結藝術家近70件大型攝影作品、壁紙裝置以及2部動態影像，展現德曼處理攝影影像與真實世界之間互為表裡的對位關係，以及他對當代社會中影像文化慣性與認知悖論的提問。</p>
      <NuxtLink to="/exhibitions">Details</NuxtLink>
    </section>
  </main> 
</template>

<style lang="scss" scoped>
.home{
  section{
    display: flex;
    justify-content: center; /* 水平置中 */
    align-items: center;    /* 垂直置中 */
    height: 100vh;         /* 區塊高度為螢幕高度 */
    width: 100vw;           /* 區塊寬度為螢幕寬度 */
    padding: 1rem;
    &:first-child{
      height: calc(100vh - 4.5rem);
    }
    &.center{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;
    }
    &.content{
      p{
        // 建議每行約 45-75 個字元（包含空格）。這是公認的最佳可讀範圍。
        max-width: 720px;
        line-height: 1.6; /* 行距 */
        font-size: 16px;  /* 字體大小 */
        word-wrap: break-word;
      }
    }
    img{
      max-width: calc(100vw - 23rem);
      width: 100%;
      object-fit: contain;
    }
    .workSection{
      // background-color: rgb(76, 116, 154);
      min-width: 100vh;
      &-inner {
        width: 100%;
      }
      &-swiper{
        background-color: #fff;
        color: #888;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      &-img{
        img{
          width: 100%;
        }
        p{
          word-wrap: break-word;
        }
      }
    }
    &.about{
      background-color: rgb(159, 155, 112);
    }
    &.exhibitions{
      // background-color: rgb(159, 155, 112);
    }
  }
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>