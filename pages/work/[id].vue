<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
  <main>
    <header>
      <h1>系列作品{{ route.params.id }}</h1>
      <!-- <p>dsadsadasd</p> -->
    </header>
    <section class="grid-container">
      <div class="grid-item"><NuxtImg src="/img/series1/ghkv.jpg" /></div>
      <div class="grid-item"><NuxtImg src="/img/series1/gjcjgcj.jpg" /></div>
      <div class="grid-item"><NuxtImg src="/img/series1/yukv.jpg" /></div>
      <div class="grid-item"><NuxtImg src="/img/series1/ghkv.jpg" /></div>
      <div class="grid-item"><NuxtImg src="/img/series1/gjcjgcj.jpg" /></div>
      <div class="grid-item"><NuxtImg src="/img/series1/yukv.jpg" /></div>
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