<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from "nuxt/app"
const { $gsap, $Observer } = useNuxtApp()
let ObserverInstance = null

// 綁定 DOM 元素
// const homeContainer = ref<HTMLElement | null>(null)

const sections = ref([])
const images = ref([])
const slideImages = ref([])
const outerWrappers = ref([])
const innerWrappers = ref([])
const count = ref(1)
const countText = ref(null)
// 變數狀態
const currentIndex = ref(0)
const animating = ref(false)

// 初始化動畫
onMounted(() => {
    sections.value = $gsap.utils.toArray(".slide")
    outerWrappers.value = $gsap.utils.toArray(".slide__outer")
    innerWrappers.value = $gsap.utils.toArray(".slide__inner")
    slideImages.value = $gsap.utils.toArray(".slide__img")
    images.value = $gsap.utils.toArray(".image").reverse()

    $gsap.set(outerWrappers.value, { xPercent: 100 });
    $gsap.set(innerWrappers.value, { xPercent: -100 });
    $gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
    $gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

    ObserverInstance = $Observer.create({
        type: 'wheel,touch,pointer',
        preventDefault: true,
        wheelSpeed: -1,
        onUp: () => {
            if (animating.value) return
            gotoSection(currentIndex.value + 1, +1)
        },
        onDown: () => {
            if (animating.value) return
            gotoSection(currentIndex.value - 1, -1)
        },
        tolerance: 10 // 用來設定觸發滾動/滑動事件的最小位移距離，確保小幅度的滾動或誤觸不會觸發動畫。
    })

    document.addEventListener('keydown', logKey)
})

onUnmounted(() => {
  if (ObserverInstance) ObserverInstance.kill()
  document.removeEventListener('keydown', logKey)
})

// 轉場動畫
const years = [2025, 2024, 2023]
const gotoSection = (index, direction) => {
    animating.value = true

    const wrap = $gsap.utils.wrap(0, sections.value.length)
    index = wrap(index)
    count.value = index + 1

    const words = $gsap.utils.toArray(years[index])
    const textEl = $gsap.timeline({delay: 0.5})
    const timePerCharacter = 0.15
    words.forEach(el => {
        textEl.from(countText.value, {
            text: "", 
            duration: 4 * timePerCharacter, 
            ease: "power2"
        })
    })

    const tl = $gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
            animating.value = false
        }
    })
    const currentSection = sections.value[currentIndex.value]
    const nextSection = sections.value[index]
    const heading = currentSection.querySelector('.slide__heading')
    const nextHeading = nextSection.querySelector('.slide__heading')

    $gsap.set([sections.value, images.value], { zIndex: 0, autoAlpha: 0 })
    $gsap.set([currentSection, images.value[index]], { zIndex: 1, autoAlpha: 1 })
    $gsap.set([nextSection, images.value[currentIndex.value]], { zIndex: 2, autoAlpha: 1 })

    tl.fromTo(outerWrappers.value[index], { xPercent: 100 * direction }, { xPercent: 0 }, 0)
        .fromTo(innerWrappers.value[index], { xPercent: -100 * direction }, { xPercent: 0 }, 0)
        .to(heading, { '--width': 800, xPercent: 30 * direction }, 0)
        .fromTo(nextHeading, { '--width': 800, xPercent: -30 * direction }, { '--width': 200, xPercent: 0 }, 0)
        .fromTo(images.value[index], { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 }, { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 }, 0)
        .fromTo(images.value[currentIndex.value], { xPercent: 0, scaleX: 1, scaleY: 1 }, { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 }, 0)
        .fromTo(slideImages.value[index], { scale: 2 }, { scale: 1 }, 0)
        .timeScale(0.8)
    currentIndex.value = index

}

// 鍵盤控制
const logKey = (e) => {
    if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating.value) {
        gotoSection(currentIndex.value - 1, -1)
    }
    if (['ArrowDown', 'ArrowRight', 'Space', 'Enter'].includes(e.code) && !animating.value) {
        gotoSection(currentIndex.value + 1, 1)
    }
} 

</script>

<template>
    <section class="slide">
        <div class="slide__outer">
            <div class="slide__inner">
                <div class="slide__content">
                    <div class="slide__container">
                        <h2 class="slide__heading">Fragments of Devotion</h2>
                        <figure class="slide__img-cont">
                            <NuxtImg 
                                class="slide__img"
                                src="/img/series4/2.jpg" 
                                alt="主視覺"
                            />
                            <!-- <img class="slide__img"
                                src='https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400'
                                alt=''> -->
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="slide">
        <div class="slide__outer">
            <div class="slide__inner">
                <div class="slide__content">
                    <div class="slide__container">
                        <h2 class="slide__heading">Dreams Within the Snow</h2>
                        <figure class="slide__img-cont">
                            <NuxtImg 
                                class="slide__img"
                                src="/img/series5/2.jpg" 
                                alt="主視覺"
                            />
                            <!-- <img class="slide__img"
                            src='https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400'
                            alt=''> -->
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="overlay">
        <div class="overlay__content">
            <p class="overlay__count">
                <span ref="countText">2025</span>
            </p>
            <figure class="overlay__img-cont"> 
                <!-- <img class="image" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800" /> -->
                <NuxtImg 
                    class="image"
                    src="/img/series4/1.jpg" 
                    alt="主視覺"
                />
                <NuxtImg 
                    class="image"
                    src="/img/series5/little-crown.jpg" 
                    alt="主視覺"
                />
                <!-- <img class="image" src="https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800" /> -->
            </figure>
            <NuxtLink 
                :to="{ 
                    name: 'series-name-all', 
                    params: { name: `series${count}`}
                }"
                class="overlay__link"
            >
                More
            </NuxtLink>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.slide {
    height: 100%;
    width: 100%;
    top: 0;
    position: fixed;
    visibility: hidden;

    &__outer,
    &__inner {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
    }

    &__container {
        position: relative;
        max-width: 1400px;
        width: 100vw;
        margin: 0 auto;
        height: 90vh;
        margin-bottom: 10vh;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 0 1rem;
    }

    &__heading {
        --width: 200;
        mix-blend-mode: difference;
        grid-area: 2 / 1 / 3 / 10;
        align-self: end;

        display: block;
        text-align: left;
        font-size: 7vw;
        // font-size: clamp(3.5rem, 5vw, 15rem); // clamp(最小值, 首選值, 最大值）//比較適合用少少字
        font-weight: 900;
        font-variation-settings: "wdth" var(--width);
        margin: 0;
        padding: 0;
        color: #4131e3;
        z-index: 999;
    }

    &__img-cont {
        margin-top: 4rem;
        grid-area: 2 / 1 / 7 / 8;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.slide:nth-of-type(1) {
    visibility: visible;
    .slide__content {
        background-color: #fff;
    }
}

.slide:nth-of-type(2) {
    .slide__content {
        background-color: #f4f4f4;
    }
}

.slide:nth-of-type(3) {
    .slide__content {
        background-color: #fff;
    }
}

.slide:nth-of-type(4) {
    .slide__content {
        background-color: #f4f4f4;
    }
}

.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    &__content {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        max-width: 1400px;
        width: 100vw;
        height: 80vh;
        margin: 10vh auto 10vh auto;
        padding: 0 1rem;
    }

    &__img-cont {
        position: relative;
        overflow: hidden;
        margin: 0;
        grid-area: 5 / 2 / 10 / 11;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: 50% 50%;
        }
    }
    &__link {
        width: var(--width);
        grid-area: 10 / 9 / 10 / 11;
        color: #b3c200;
        border-bottom: 1px solid #b3c200;
        font-size: 1rem;
        padding-top: .5rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        z-index: 1;
    }
    &__count {
        grid-area: 3 / 10 / 4 / 10;
        font-size: clamp(3rem, 4vw, 15rem);
        min-width: 8rem;
        margin: 0;
        padding: 0;
        text-align: right;
        border-bottom: 7px #555 solid;
        color: #555;
    }
}

@media screen and (min-width: 900px) {
    .overlay__content,
    .slide__container {
        height: calc(100vh - 8rem);
        margin-top: 5rem;
        margin-bottom: 3rem;
        padding: 0 4rem;
    }
    .overlay__img-cont {
        grid-area: 4 / 5 / 11 / 11;
    }
    .overlay__count {
        grid-area: 3 / 10 / 4 / 11;
    }
    // .overlay__link {
    //     grid-area: 3 / 10 / 4 / 11;
    // }
    .slide__img-cont {
        margin-top: -28px;
        grid-area: 3 / 2 / 8 / 7;
    }
    .slide__heading {
        font-size: 6.5vw;
        grid-area: 1 / 1 / 1 / 10;
    }
}
</style>
