<script setup>
import { Pagination } from 'swiper/modules'
import { worksList } from '@/assets/data/worksList'
import WebFooter from '@/assets/components/layout/WebFooter.vue'
const localePath = useLocalePath()

const siteImage = 'https://res.cloudinary.com/dxddw5huw/image/upload/t_square/v1745503404/exhibition_2025_2.jpg'
useSeoMeta({
  title: '歷年作品與系列創作 | 邱君婷 Chiu Chun-Ting | Archive of Works',
  ogTitle: 'Chiu Chun-Ting Archive of Works | 歷年作品與系列創作 | 邱君婷',
  description: '邱君婷的歷年藝術作品與創作系列總覽，呈現她在夢境與記憶中展開的詩性視覺語言。Explore selected artworks and series by Chiu Chun-Ting that visualize memory, perception, and symbolic storytelling.',
  ogDescription: 'Discover the evolving works and symbolic series by Taiwanese artist Chiu Chun-Ting, merging memory, dreams, and poetic imagery.',
  ogImage: siteImage,
  ogType: 'website',

  twitterTitle: 'Chiu Chun-Ting | Art Series & Works Overview',
  twitterDescription: 'An archive of selected artworks and series by Chiu Chun-Ting, reflecting her poetic approach to memory, childhood, and perception.',
  twitterImage: siteImage
})

// const placeholderPath = (publicId) => {
//   return $cloudinary.image.url(
//     `${publicId}.svg`, 
//     {
//       effect: "cartoonify:colors:2:detail:0.1",
//       width: 150,
//       crop:'scale'
//     }
//   )
// }
</script>

<template>
  <main>
    <section v-for="item in worksList" :key="item.name">
      <header>
        <h1>{{ item.series }}</h1>
        <NuxtLink 
          :key="item.series"
          :to="localePath(`/series-${item.series}/all`)"
        >
          More
        </NuxtLink>
      </header>
      <div class="series">
        <ClientOnly>
          <swiper-container 
            :slidesPerView="1"
            :spaceBetween="12"
            :loop="true"
            :breakpoints="{
              368: {
                slidesPerView: 2
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }"
            :pagination="{
              dynamicBullets: true,
              clickable: true,
            }"
            :modules="[Pagination]"

          >
            <swiper-slide v-for="work in item.works" :key="work.index">
              <NuxtLink 
                :key="work.index"
                :to="localePath(`/series-${item.series}/${work.index}`)"
              >
                <CldImage
                  v-if="work.img"
                  :src="work.img"
                  :alt="work[$t('key')] || ''"
                  width="700"
                  height="700"
                  placeholder="blur"
                  loading="lazy"
                />
              </NuxtLink>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </section>

    <WebFooter />
  </main>
</template>

<style lang="scss" scoped>
main{
  padding: 15vh 0;
  /* 平板模式 */
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
  section{
    flex-direction: column;
    width: 100%;
    height: auto;
    max-width: 1024px;
    margin: 0 auto 4rem;
    
    @media (max-width: 1100px) {
      max-width: 768px;
    }
    /* 平板模式 */
    @media (max-width: 800px) {
      max-width: none;
    }

    >header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .series{
      width: 100%;
      img{
        width: 100%;
        object-fit: contain !important;
      }
    }
  }
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28rem;
  @media (max-width: 600px) {
    height: 18rem;
  }
  @media (max-width: 368px) {
    height: 20rem;
  }
}

footer{
  margin-top: 25vh;
}
</style>