<script setup>
import { seriesList } from '@/assets/data/worksList'

// import { useRoute } from 'vue-router'
// const route = useRoute()
</script>

<template>
  <main>
    <section v-for="series in seriesList" :key="series.name">
      <header>
        <h2>系列名稱{{ series.name }}</h2>
        <nuxt-link 
          :key="series.name"
          :to="{ name: 'series-name-all', params: { name: series.name} }"
        >
          More
        </nuxt-link>
      </header>
      <div class="series">
        <ClientOnly>
          <swiper-container 
            :slidesPerView="3"
            :spaceBetween="30"
            :loop="true"
            :navigation="true"
          >
            <swiper-slide v-for="work in series.works" :key="work.name">
              <div class="workSection-swiper">
                <NuxtImg :src="work.img" />
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  padding: 3rem 0 6rem 0;
  // background-color: #ddd;
}
section{
  width: 100%;
  max-width: 768px;
  height: auto;
  margin: 0 auto 2rem;
  flex-direction: column;
  >header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >h2{
      color: #111;
    }
  }
  .series{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
}
</style>