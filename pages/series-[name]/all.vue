<script setup lang="ts">
import { worksList } from '@/assets/data/worksList'
import { useRoute, useRouter } from 'vue-router'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const seriesName = route.params.name

const targetSeries = worksList.find(item => item.series === seriesName)
if (!targetSeries) {
  router.push('/404')
}else{
  const title = `${seriesName} 年作品系列 | Works from ${seriesName}`
  const url = `https://chiuchunting.github.io/series-${seriesName}/all`
  const image = `https://res.cloudinary.com/dxddw5huw/image/upload/t_square/v1742481663/${targetSeries['works'][0]['img']}.jpg`
  const zhDesc = `本頁展示邱君婷於 ${seriesName} 年的系列作品，呈現她當年度在記憶、夢境與感知等主題上的創作延伸。`
  const enDesc = `This page presents selected artworks created by Chiu Chun-Ting in ${seriesName}, exploring themes of memory, dreams, and perception through symbolic visual language.`
  
  useSeoMeta({
    title: `${title} | 邱君婷 Chiu Chun-Ting`,
    description: `${zhDesc} ${enDesc}`,
    ogTitle: `${title} | Chiu Chun-Ting Art Archive`,
    ogDescription: enDesc,
    ogUrl: url,
    ogImage: image,
    ogType: 'article',
  
    twitterTitle: `${title} | Chiu Chun-Ting`,
    twitterDescription: enDesc,
    twitterImage: image,
    twitterCard: 'summary_large_image',
  
    keywords: `邱君婷, Chiu Chun-Ting, ${seriesName} 年作品, 年度創作, 藝術作品系列, contemporary artist, Taiwanese art, ${seriesName} artworks, symbolic painting`
  })
}

const parseAlt = (work:any) => {  
  return `${work[t('key')] || ''}_${work[t('mediumKey')] || ''}_${work['size'] || ''}_邱君婷ChiuChun-Ting`
}
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
          :alt="parseAlt(work)"
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