<script setup lang="ts">
import { seriesList } from '@/assets/data/seriesList'
import { ref, onMounted } from 'vue'
import { useNuxtApp } from "nuxt/app"
const { $gsap, $ScrollTrigger, $Observer } = useNuxtApp()
const router = useRouter()

const runtimeConfig = useRuntimeConfig()
const cloudName = runtimeConfig.public.cloudinaryCloudName
let ObserverInstance: any = null

const scrollWorkContainer = ref<HTMLDivElement | null>(null)
const sectionRefs = ref<HTMLDivElement[]>([])
const imageRefs = ref<HTMLElement[]>([])
const headingRefs = ref<HTMLElement[]>([])
const outerRefs = ref<HTMLElement[]>([])
const innerRefs = ref<HTMLElement[]>([])

onMounted(() => {
  const scrollContainer = scrollWorkContainer.value
  if (!scrollContainer ) return

  const gotoSection = (index: number, direction: number) => {
    animating = true

    const wrap = $gsap.utils.wrap(0, sections.length)
    index = wrap(index)

    let fromTop = direction === -1
    let dFactor = fromTop ? -1 : 1

    const waveTimeline = $gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => animating = false
    })

    if (currentIndex >= 0) {
      $gsap.set(sections[currentIndex], { zIndex: 0 })
      waveTimeline.to(imageRefs.value[currentIndex], { yPercent: -15 * dFactor })
        .set(sections[currentIndex], { autoAlpha: 0 })
    }

    $gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 })
    waveTimeline.fromTo(
      [outerRefs.value[index], innerRefs.value[index]],
      { yPercent: i => i ? -100 * dFactor : 100 * dFactor },
      { yPercent: 0 },
      0
    )
    .fromTo(imageRefs.value[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

    if (headings[index]) {
      const heading = headings[index]  // 領取第一個標題元素
      
      // 確保heading元素中有span標籤
      const spans = heading.querySelectorAll('div')
      
      // 如果存在span元素，執行動畫
      if (spans.length > 0) {
        waveTimeline.fromTo(
          spans, // 使用 heading 中的所有 div
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" }
          },
          0.2
        )
      }
    }
    currentIndex = index
  }

  $ScrollTrigger.create({
    trigger: scrollContainer, // 滾動到該區域時觸發
    start: "top top", // 當這個元素進入視窗的底部時觸發
    end: "bottom top",
    pin: scrollContainer, // 讓這個元素固定
    pinSpacing: false, // 不添加額外的間距
    scrub: true, // 平滑滾動效果
    // markers: true, // 可選，顯示輔助標記
    onEnter: () => {
      ObserverInstance = $Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true
      })
      gotoSection(0, 1)
    },
    onLeave: () => {
      // 當第三區塊離開視窗時銷毀 Observer
      if (ObserverInstance) {
        ObserverInstance.kill();
      }
    }
  })

  const sections = sectionRefs.value
  const headings = headingRefs.value
  if (!(sections.length > 0 && headings.length > 0) ) return

  // 手動拆分文字，將每個字符包裝在 <div> 裡
  headings.forEach((heading, index) => {
    if (!heading) return
    const text = seriesList[index]['series']
    heading.innerHTML = text.split('').map(char => `<div>${char}</div>`).join('')
  })

  let currentIndex = -1
  let animating = false
  
  $gsap.set(outerRefs.value, { yPercent: 100 })
  $gsap.set(innerRefs.value, { yPercent: -100 })
  

})

const linkPage = (series:string) => {
  router.push({ name: 'series-name-all', params: { name: series } })
}

</script>

<template>
  <section 
    ref="scrollWorkContainer" 
    class="worksContainer"
  >
    <div
      v-for="(sec, i) in seriesList"
      :key="i"
      ref="sectionRefs"
      class="seriesSection"
    >
      <div 
        ref="imageRefs" 
        class="bg" 
        :style="{ backgroundImage: `
          linear-gradient(180deg,rgba(5, 25, 40, 0.6) 20%,rgba(0, 0, 0, 0.1) 80%), 
          url(https://res.cloudinary.com/${cloudName}/image/upload/v1742482048/${sec.img}.jpg)
        ` }"
      ></div>
      <div ref="outerRefs" class="outer">
        <div ref="innerRefs" class="inner">
          <h2 ref="headingRefs" class="section-heading" @click="linkPage(sec.series)"></h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.worksContainer{
  height: 100vh;

  .seriesSection {
    width: 100vw;
    height: 100vh;
    top: 0;
    position: absolute;
    visibility: hidden;
  }
  .outer,
  .inner {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-heading{
    display: flex;
    gap: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    z-index: 2;
    font-family: "Cormorant Garamond", serif;
    font-size: 5rem;
    color: var(--whiteOpacity2);
    cursor: pointer;
  }

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;

    background-size: contain;
    background-color: #fff;
  }
}

</style>