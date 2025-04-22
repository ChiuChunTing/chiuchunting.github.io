<script setup lang="ts">
import { worksList } from '@/assets/data/worksList'
import { useRoute, useRouter } from 'vue-router'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const seriesName = route.params.name
const targetSeries = worksList.find(item => item.series === seriesName)
if (!targetSeries) {
  router.push('/404')
}

watch(()=> locale.value, () => {
  const title = `${seriesName} | Chiu Chun-Ting 邱君婷`
  const description = t('works.seo.seriesDescription', { year: seriesName })
  useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description
  })
}, { immediate: true })

</script>

<template>
  <main v-if="targetSeries" class="grid">
    <header class="grid-header">
      <h1>{{ seriesName }}</h1>
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
          width="800"
          height="800"
          :alt="work[$t('key')] || ''"
          placeholder="blur"
          loading="lazy"
        />
      </nuxt-link>
    </section>

    <WebFooter />

  </main>
</template>

<style lang="scss" scoped>
main{
  margin-top: 3rem;
  margin-bottom: 15rem;
  .grid-item{
    img{
      object-fit: contain !important;
    }
  }
}

footer{
  margin-top: 10vh;
}
</style>