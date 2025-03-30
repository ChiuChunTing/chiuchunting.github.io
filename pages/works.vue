<script setup>
import { worksList } from '@/assets/data/worksList'
</script>

<template>
  <main>
    <section v-for="item in worksList" :key="item.name">
      <header>
        <h2># 00{{ item.series }}</h2>
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
            :slidesPerView="3"
            :spaceBetween="30"
            :loop="true"
            :navigation="true"
          >
            <swiper-slide v-for="work in item.works" :key="work.index">
              <div class="workSection-swiper">
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
                    :alt="work.nameTw"
                    width="600"
                    height="600"
                  />
                </nuxt-link>
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
  padding: 15vh 0;
}
section{
  width: 100%;
  max-width: 768px;
  margin: 0 auto 2rem;

  flex-direction: column;
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