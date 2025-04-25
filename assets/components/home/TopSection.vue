<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from "nuxt/app"

// 預先載入最大內容繪製圖片
import mainImage from '@/assets/img/main.webp'
import waveImage from '@/assets/img/wave.webp'
import birdLImage from '@/assets/img/bird_left.webp'
import birdRImage from '@/assets/img/bird_right.webp'
useHead({
  link: [
    { rel: 'preload', as: 'image', href: mainImage, type: 'image/webp'},
    { rel: 'preload', as: 'image', href: waveImage, type: 'image/webp'},
    { rel: 'preload', as: 'image', href: birdRImage, type: 'image/webp'},
    { rel: 'preload', as: 'image', href: birdLImage, type: 'image/webp'}
  ]
})

const { $gsap, $ScrollTrigger } = useNuxtApp()
const scrollContainer = ref<HTMLDivElement | null>(null)
const overlayContainer = ref<HTMLDivElement | null>(null)

const setupScrollAnimations = ({ isMobile }: { isMobile: boolean }) => {
  const container = scrollContainer.value
  const overlay = overlayContainer.value
  if (!(container && overlay) ) return

  $ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: isMobile ? "bottom+=25 top" : "bottom top+=100",
    pin: overlay,
    pinSpacing: false,
    scrub: true,
  })

  if(isMobile){
    $gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top+=100 top',
        end: 'top+=300 top',
        scrub: 1.2,
      }
    })
    .fromTo(".wave", 
      { 
        backgroundPosition: 'center 80%', 
        backgroundSize: '220%', 
        opacity: 0.9
      }, 
      { 
        backgroundPosition: 'center 90%', 
        backgroundSize: '230%', 
        opacity: 0.5
      }
    )
    .to(".wave", { opacity: 0.25, duration: 1, ease: "power1.out" })

    // $gsap.fromTo(".main-visual",
    //   { width: '110vw', height: '80vw', left: '10vw' },
    //   { width: '100vw', height: '60vw', left: '20vw',
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: container,
    //       start: 'top+=200 top',
    //       end: 'top+=350 top',
    //       scrub: 0.5,
    //     }
    //   }
    // )
  }else{
    $gsap.fromTo(".main-visual",
      { opacity: 1},
      { opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: 'top+=300vh top',
          end: 'bottom+=100vh bottom',
          scrub: 0.5,
        }
      }
    )
    $gsap.fromTo(".unicorn",
      { opacity: 0},
      { opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: 'top+=300vh top',
          end: 'bottom+=100vh bottom',
          scrub: 0.5,
        }
      }
    )
  }

  $gsap.fromTo(".bird-right",
    { 
      scale: isMobile? 4: 1.5, 
      xPercent: isMobile? 175: 75,
      yPercent: isMobile? 175: 75
    },
    { 
      scale: isMobile? 2: 1, 
      xPercent: isMobile? -100: -75,
      yPercent: isMobile? -75: -75,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top+=100 top" : "top+=100vh top",
        end: isMobile ? "top+=300 top" : "top+=500vh top",
        scrub: 2 // 「滯後感」——越大越柔順，但不能只靠它來控制總時長。
      }
    }
  )

  $gsap.fromTo(".bird-left",
    { 
      scale: isMobile? 4: 2.5, 
      xPercent: isMobile? -200: -150, 
      yPercent: isMobile? 200: 50, 
    },
    {
      scale: isMobile? 2: 1.5, 
      xPercent: isMobile? 100: 150, 
      yPercent: isMobile? -100: -50, 
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top+=250 top" : "top+=400vh top",
        end: isMobile ? "bottom+=50 bottom" : "bottom+=200vh bottom",
        scrub: 1
      }
    }
  )
}

onMounted(() => {
  const container = scrollContainer.value
  const overlay = overlayContainer.value
  if (!(container && overlay) ) return

  // 使用 ScrollTrigger 的 matchMedia
  $ScrollTrigger.matchMedia({
    // 桌面版動畫設定
    "(min-width: 768px)": () => {
      setupScrollAnimations({ isMobile: false })
    },
    // 手機版動畫設定
    "(max-width: 767px)": () => {
      setupScrollAnimations({ isMobile: true })
    }
  })
})

</script>

<template>
  <section 
    ref="scrollContainer"
    class="topContainer" 
  >
    <h1>
      邱君婷 | Chiu Chun-Ting
      <span class="visually-hidden">Paintings, Exhibitions, and the Journey of a Contemporary Artist</span>
    </h1>

    <div 
      ref="overlayContainer"
      class="overlay"
    >
      <div class="main-visual">
        <div class="unicorn_main"></div>
      </div>
      <div class="unicorn">
        <div class="unicorn-sprite"></div>
      </div>
      <div class="wave"></div>
      <div class="bird-right"></div>
      <div class="bird-left"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.topContainer{
  position: relative;
  margin-top: -4.5rem;
  height: 450vh;
  @media (max-width: 767px) {
    height: 250vh; // 手機版 scroll 範圍縮短
  }

  h1{
    text-align: center;
    position: fixed;
    top: 32.5vh;
    left: calc(50% - 7rem);
    width: 14rem;
    height: 2rem;
    /* 平板模式 */
    @media (max-width: 767px) {
      top: 25vh;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  img {
    position: absolute;
    height: auto;
    max-width: none;
  }

  .main-visual,
  .unicorn{
    position: absolute;
    width: 100%;
    top: 40vh;
    height:380px;
    left: 0;

    max-width: none;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  .main-visual{
    /* 平板模式 */
    @media (max-width: 768px) {
      width: 80vw;
      height: 80vw;
      left: 10vw;
      top: 35vh;
    }
    .unicorn_main{
      display:block;	
      width:556.5px; /* 9461/17 */
      height:380px;
      background-size: cover;
      background-image: image-set(
        url('@/assets/img/main.webp') type('image/webp'),
        url('@/assets/img/main.png') type('image/png')
      );
      /* 平板模式 */
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }

  .unicorn{
    /* 平板模式 */
    @media (max-width: 768px) {
      display:none;	
    }
    .unicorn-sprite{
      display:block;	
      width:556.5px; /* 9461/17 */
      height:380px;
      background-size: cover;
      background-image:url('@/assets/img/unicorn.webp');	
      animation: walk 1.6s steps(17) infinite;
      @keyframes walk {
        from {background-position:0 0;}
        to {background-position:-9461px 0;}
      }
    }
  }

  .wave{
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center -10%;
    background-image: image-set(
      url('@/assets/img/wave.webp') type('image/webp'),
      url('@/assets/img/wave.png') type('image/png')
    );

    height: 150vw;
    width: 150vw;
    left: calc(50% - 70vw);
    top: -35vw;
    /* 平板模式 */
    @media (max-width: 768px) {
      background-size: 220%;
      background-position: center 80%;
      width: 110vw;
      height: 110vw;
      left: 0%;
      top: 0%;
    }
  }

  .bird-right,
  .bird-left{
    height: 100vw;
    width: 100vw;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .bird-right{
    background-image: image-set(
      url('@/assets/img/bird_right.webp') type('image/webp'),
      url('@/assets/img/bird_right.png') type('image/png')
    );
  }
  .bird-left{
    background-image: image-set(
      url('@/assets/img/bird_left.webp') type('image/webp'),
      url('@/assets/img/bird_left.png') type('image/png')
    );
  }
}


</style>