<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from "nuxt/app"
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
    end: isMobile ? "bottom+=50 top" : "bottom top+=100",
    pin: overlay,
    pinSpacing: false,
    scrub: true,
  })

  if(isMobile){
    const waveStart = isMobile ? "top+=50vh top" : "top+=100vh top"
    const waveEnd = isMobile ? "top+=200vh top" : "top+=250vh top"
    $gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: waveStart,
        end: waveEnd,
        scrub: 1.2,
      }
    })
    .fromTo(".wave", 
      { 
        left: isMobile ? "-50%" : "-22.5%%", 
        width: isMobile ? "220%" : "150%%", 
        height: isMobile ? "220%" : "150%", 
        bottom: isMobile ? "30vh" : "-8vh", 
        opacity: 0 
      }, 
      { 
        left: isMobile ? "-55%" : "-30%", 
        width: isMobile ? "230%" : "175%", 
        height: isMobile ? "220%" : "175%", 
        bottom: isMobile ? "35vh" : "5vh", 
        opacity: 1
      }
    )
    .to(".wave", { opacity: 0, duration: 1, ease: "power1.out" })
  }

  if(!isMobile){
    $gsap.fromTo(".main-visual",
      { opacity: 1},
      { opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top+=200vh top" : "top+=350vh top",
          end: isMobile ? "top+=250vh top" : "top+=450vh top",
          scrub: 0.5,
        }
      }
    )
    $gsap.fromTo(".unicorn",
      { opacity: 0, filter: "blur(4px)"},
      { opacity: 1, filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top+=200vh top" : "top+=350vh top",
          end: isMobile ? "top+=250vh top" : "top+=450vh top",
          scrub: 0.5,
        }
      }
    )
  }

  // desktop:滾動距離 380vh
  $gsap.fromTo(".bird-right",
    { 
      scale: isMobile? 1: 3, 
      xPercent: isMobile? 100: 150, 
      yPercent: 100
    },
    { scale: 1, xPercent: -100, yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top+=80vh top" : "top+=120vh top",
        end: isMobile ? "top+=300vh top" : "top+=500vh top",
        scrub: 0.5
      }
    }
  )

  $gsap.fromTo(".bird-left",
    { 
      scale: isMobile? 1: 3, 
      xPercent: isMobile? -100: -150, 
      yPercent: isMobile? 30: 50, 
    },
    { scale: 1.5, 
      xPercent: isMobile? 50: 150, 
      yPercent: isMobile? -50: -50, 
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top+=150vh top" : "top+=300vh top",
        end: isMobile ? "bottom+=50vh bottom" : "bottom+=50vh bottom",
        scrub: 1,
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

  // $ScrollTrigger.create({
  //   trigger: container, 
  //   start: "top top",
  //   // end: "bottom top",
  //   end: "bottom top+=100", // ⬅️ 可略加一些空間，避免 pin 到邊界太緊
  //   pin: overlay,
  //   pinSpacing: false, // 不添加額外的間距
  //   scrub: true, // 平滑滾動效果
  //   // markers: true, // 可選，顯示輔助標記
  // })

  // // 1：海浪圖片從部分顯示到全圖（使用 clip-path）
  // const waveTimeline = $gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container,
  //     start: "top+=100vh top",
  //     end: "top+=250vh top",
  //     scrub: 1.2
  //   }
  // })
  // waveTimeline.fromTo(".wave", 
  //   { left: "0%", bottom: "10%", width: "100%", opacity: 0}, 
  //   { left: "-20%", bottom: "0%", width: "150%", opacity: 1}
  // )
  // .to(".wave", 
  //   { 
  //     opacity: 0,  // 讓 .wave 變透明
  //     duration: 1, // 透明動畫持續 1 秒
  //     ease: "power1.out" // 平滑淡出
  //   }
  // )

  // // 2-1：主視覺圖片從不透明到透明
  // $gsap.fromTo(
  //   ".main-visual",
  //   { opacity: 1, height:"70vh",top: "10%" },
  //   { opacity: 0, height:"60vh",top: "15%",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top+=350vh top",
  //       end: "top+=450vh top",
  //       scrub: 0.5
  //     }
  //   }
  // );
  // // 2-2：中間小圖持續走動從透明到不透明
  // $gsap.fromTo(
  //   ".unicorn",
  //   { opacity: 0, filter: "blur(4px)", height:"70vh",top: "10%" },
  //   { opacity: 1, filter: "blur(0px)", height:"60vh",top: "15%",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top+=350vh top",
  //       end: "top+=450vh top",
  //       scrub: 0.5
  //     }
  //   }
  // )

  // // 3：鳥A從右下往左上移動
  // $gsap.fromTo(
  //   ".bird-right",
  //   { scale: 3, xPercent: 150, yPercent: 100 },
  //   { scale: 1, xPercent: -100, yPercent: -100,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top+=150vh top",
  //       end: "top+=400vh top",
  //       scrub: 1
  //     }
  //   }
  // )

  // // 步驟4：鳥B從左左下往右上移動
  // $gsap.fromTo(
  //   ".bird-left",
  //   { scale: 3, xPercent: -150, yPercent: 50 },
  //   { scale: 1.5, xPercent: 150, yPercent: -50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       // start: "top+=300vh top",
  //       // end: "top+=500vh top",
  //       start: "top+=300vh top",
  //       end: "bottom+=50vh bottom", // 在 container 元素的底部（bottom）到達視窗底部（bottom）時結束。
  //       scrub: 1
  //     }
    // }
  // )
})

</script>

<template>
  <section 
    ref="scrollContainer"
    class="topContainer" 
  >
    <h1>邱君婷 | Chiu Chun-Ting</h1>
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

      <!-- 步驟 3：鳥A從右下往左上移動 -->
      <div class="bird-right"></div>

      <!-- 步驟 4：鳥B從左下往右上移動 -->
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
    height: 300vh; // 手機版 scroll 範圍縮短
  }
  h1{
    position: fixed;
    bottom: 62.5vh;
    left: calc(50% - 10rem);
    width: 20rem;
    height: 2rem;
    text-align: center;
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
    bottom: 10vh;
    height:380px;
    left: 0;
    @media (max-width: 768px) {
      bottom: 30vh;
    }

    max-width: none;
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    img{
      height:380px;
      margin: auto;
      @media (max-width: 768px) {
        width: 90%;
        height: auto;
        margin-top: 50%;
      }
    }
    .unicorn_main,
    .unicorn-sprite{
      display:block;	
      width:556.5px; /* 9461/17 */
      height:380px;
    }
    .unicorn_main{
      background-size: contain;
      background-image:url('@/assets/img/main.png');	
    }
    .unicorn-sprite{
      background-image:url('@/assets/img/unicorn.webp');	
      animation: walk 1.6s steps(17) infinite;

      /* 平板模式 */
      @media (max-width: 768px) {
        display:none;	
      }
    }

    @keyframes walk {
      from {background-position:0 0;}
      to {background-position:-9461px 0;}
    }
  }

  .wave,
  .bird-right,
  .bird-left{
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .wave{
    height: 150vh;
    width: 150%;
    left: -22.5%;
    bottom: -8vh;
    background-image:url('@/assets/img/wave.png');	
  }
  .bird-right{
    background-image:url('@/assets/img/bird_right.png');	
  }
  .bird-left{
    background-image:url('@/assets/img/bird_left.png');	
  }
}

</style>