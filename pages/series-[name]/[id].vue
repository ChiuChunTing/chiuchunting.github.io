<script setup lang="ts">
import { seriesList } from '@/assets/data/worksList'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const seriesName = route.params.name
const imageId = route.params.id

const series = seriesList.find(item => item.name === seriesName);
const imgInfo = series ? series.works.find(work => work.name === imageId) : null;
if (!imgInfo) {
  router.push('/404')
}
</script>

<template>
  <main>
    <header>
      <h1>系列{{ route.params.name }}</h1>
    </header>

    <section v-if="imgInfo">
      <NuxtImg :src="imgInfo.img" />
      <p>{{ imgInfo.name }}</p>
    </section>

    <section>
      <h2>其他系列</h2>
      <ul>
        <li v-for="series in seriesList" :key="series.name">
          <nuxt-link :to="{ name: 'series-name-all', params: { name: series.name} }">
            {{ series.title }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  margin-bottom: 6rem;
}
header{
  text-align: center;
  margin: 4rem auto 6rem;
  h1{
    font-size: 1.2rem;
  }
}
section{
  height: auto;
}
.grid-container {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 預設三欄 */
  grid-auto-rows: auto; /* 自動調整行高 */
  align-items: stretch; /* 子項目高度撐滿行高 */
  gap: 1rem; /* 欄間距 */

  .grid-item {
    aspect-ratio: 1 / 1;
    img{
      max-width: 100%; /* 確保圖片不超過欄寬 */
      height: auto;    /* 保持圖片比例 */
    }
  }
}
/* 平板模式 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 兩欄 */
  }
}

/* 手機模式 */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr; /* 一欄 */
  }
}
</style>