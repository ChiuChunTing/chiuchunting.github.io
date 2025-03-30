<script setup lang="ts">
import { worksList } from '@/assets/data/worksList'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const seriesName = route.params.name
const targetSeries = worksList.find(item => item.series === seriesName)
if (!targetSeries) {
  router.push('/404')
}
</script>

<template>
  <main v-if="targetSeries" class="grid">
    <header class="grid-header">
      <h1># 00{{ seriesName }}</h1>
    </header>
    <section class="grid-container">
      <nuxt-link 
        v-for="work in targetSeries.works" 
        :key="work.index"
        :to="{ 
          name: 'series-name-id', 
          params: { 
            name: targetSeries.series, 
            id: work.index
          }
        }"
        class="grid-item"
      >
        <CldImage
          v-if="work.img"
          :src="work.img"
          width="987"
          height="987"
          :alt="work.nameTw"
        />
      </nuxt-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  padding: 3rem 0;
  margin-bottom: 15rem;
}
</style>