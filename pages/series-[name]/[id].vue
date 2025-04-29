<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { worksList } from '@/assets/data/worksList'
import WebFooter from '@/assets/components/layout/WebFooter.vue'
const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

interface WorkItem {
  index: string
  nameTw: string
  nameEn: string
  size: string
  media: string
  year: number
}

// interface WorkSeries {
//   series: string
//   works: WorkItem[]
// }

const seriesIndex = ref('')
const targetWork = ref<WorkItem | null>(null)
const prevWork = ref<WorkItem | null>(null)
const nextWork = ref<WorkItem | null>(null)

watchEffect(() => {
  const seriesName = route.params.name
  const imageId = route.params.id

  const targetSeries = worksList.find(item => item.series === seriesName)
  if (!targetSeries) {
    throw showError({ statusCode: 404, statusMessage: t('404.series'), fatal: false })
  }

  const { series, works } = targetSeries
  seriesIndex.value = series? series: ''
  const imgInfoIndex = works.findIndex(work => work.index === imageId)
  if (imgInfoIndex === -1) {
    throw showError({ statusCode: 404, statusMessage: t('404.work'), fatal: false })
  }

  const worksCount = works.length
  targetWork.value = works[imgInfoIndex]

  if(worksCount > 1){    
    prevWork.value = imgInfoIndex >= 1 ? works[imgInfoIndex - 1]: null
    nextWork.value = imgInfoIndex < worksCount - 1 ? works[imgInfoIndex + 1] : null
  }

  const langKey = t('key') || 'nameTw'
  const name = targetWork.value && langKey in targetWork.value 
    ? targetWork.value[langKey as keyof WorkItem] 
    : ''
  const title = `${name} | Chiu Chun-Ting 邱君婷`

  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
  })
})

</script>

<template>
  <main v-if="seriesIndex">
    <header>
      <NuxtLink :to="localePath(`/series-${seriesIndex}/all`)">
        < {{ seriesIndex }}
      </NuxtLink>
    </header>

    <section v-if="targetWork" class="frame">
      <CldImage
        :src="targetWork.img"
        :alt="targetWork[$t('key')] || ''"
        width="800"
        height="800"
        placeholder="blur"
        loading="lazy"
      />

      <div class="info" v-if="targetWork">
        <p>{{ targetWork[$t('key')] || '' }}</p>
        <p>{{ targetWork.size }}</p>
        <p>{{ targetWork[$t('mediumKey')] || '' }}</p>
        <p>{{ targetWork.year }}</p>

        <button></button>
        <!-- <button>
          share
        </button> -->
      </div>
    </section>

    <WebFooter />

  </main>
</template>

<style lang="scss" scoped>
main{
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem;

  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem auto;
    a{
      font-size: 1rem;
    }
  }
  section.frame{
    height: auto;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 4rem;
    .page{
      flex-basis: 3rem;
    }
    img{
      height: 75vh;
      max-width: calc(100% - 15rem);
      min-height: 50vh;
      object-fit: contain !important;
      object-position: 50% 100%;
    }
    .info{
      flex-basis: 12rem;
      p, button{
        margin: 0;
        line-height: 1.8;
        font-size: 0.8rem;
      }
      button{
        width: 100%;
        text-align: right;
        padding: 0;
      }
      margin-bottom: -2rem;
    }
    /* 平板及手機模式 */
    @media (max-width: 1024px) {
      margin-top: 0;
      padding: 0;
      flex-direction: column;
      align-items: flex-end;
      .page,
      .info{
        width: 100%;
        flex-basis: auto;
        margin-bottom: 0;
        p{
          text-align: right;
        }
        button{
          margin-top: 5rem;
          text-align: center;
        }
      }
      img{
        height: auto;
        max-width: 90vw !important;
        min-height: 50vh !important;
        aspect-ratio: auto !important;
        object-position: 50% 50%;
      }
    }
  }
}
</style>