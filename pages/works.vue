<script setup>
import { Pagination } from 'swiper/modules'
import { worksList } from '@/assets/data/worksList'
</script>

<template>
  <main>
    <section v-for="item in worksList" :key="item.name">
      <header>
        <h1>{{ item.series }}</h1>
        <nuxt-link 
          :key="item.series"
          :to="{ name: 'series-name-all', params: { name: item.series} }"
        >
          More
        </nuxt-link>
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
              <nuxt-link 
                :key="work.index"
                :to="{ 
                  name: 'series-name-id', 
                  params: { 
                    name: item.series,
                    id: work.index
                  }
                }"
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
              </nuxt-link>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </section>
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
</style>