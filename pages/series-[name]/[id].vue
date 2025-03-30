<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { worksList } from '@/assets/data/worksList'

const route = useRoute()
const router = useRouter()

interface Work {
  index: string
  nameTw: string
  nameEn: string
  size: string
  media: string
  year: number
}

interface WorkSeries {
  series: string
  works: Work[]
}

const seriesIndex = ref('')
const targetWork = ref<Work | null>(null)
const prevWork = ref<Work | null>(null)
const nextWork = ref<Work | null>(null)

watchEffect(() => {
  const seriesName = route.params.name
  const imageId = route.params.id

  const targetSeries = worksList.find(item => item.series === seriesName)
  if (!targetSeries) {
    router.push('/404')
    return
  }

  const { series, works } = targetSeries
  seriesIndex.value = series? series: ''
  const imgInfoIndex = works.findIndex(work => work.index === imageId)
  if (imgInfoIndex === -1) {
    router.push('/404')
    return
  }

  const worksCount = works.length
  targetWork.value = works[imgInfoIndex]
  if(worksCount > 1){    
    prevWork.value = imgInfoIndex >= 1 ? works[imgInfoIndex - 1]: null
    nextWork.value = imgInfoIndex < worksCount - 1 ? works[imgInfoIndex + 1] : null
  }
})


</script>

<template>
  <main v-if="seriesIndex">
    <header>
      <nuxt-link :to="{ 
        name: 'series-name-all', 
        params: { 
          name: seriesIndex
        } 
      }">
        < Series {{ seriesIndex }}
      </nuxt-link>
    </header>

    <section v-if="targetWork" class="frame">
      <div class="page" v-if="prevWork || nextWork">
        <nuxt-link 
          v-if="prevWork"
          :to="{ 
            name: 'series-name-id', 
            params: { 
              name: seriesIndex, 
              id: prevWork.index
            }
          }"
        >
          <
        </nuxt-link>
        <nuxt-link
          v-if="nextWork"
          :to="{ 
            name: 'series-name-id', 
            params: { 
              name: seriesIndex, 
              id: nextWork.index
            }
          }"
        >
          >
        </nuxt-link>
      </div>

      <CldImage
        v-if="targetWork.img"
        :src="targetWork.img"
        :alt="targetWork.nameTw"
      />
      <div class="info">
        <p>{{ targetWork.nameTw }}</p>
        <p>{{ targetWork.size }}</p>
        <p>{{ targetWork.mediumTw }}</p>
        <p>{{ targetWork.year }}</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  max-width: 1024px;
  margin: 0 auto;
  padding: 10vh 1.5rem;
  header{
    margin: 1rem auto;
    a{
      font-size: 1rem;
    }
  }
  .frame{
    margin-bottom: 5rem;
    align-items: flex-end;
    gap: 1rem;
    .page{
      flex-basis: 3rem;
    }
    img{
      max-width: calc(100% - 15rem);
      height: 75vh;
    }
    .info{
      flex-basis: 12rem;
      p{
        margin: 0;
        line-height: 1.8;
        font-size: 0.8rem;
      }
    }
    /* 平板及手機模式 */
    @media (max-width: 768px) {
      margin-top: 0;
      padding: 0;
      flex-direction: column;
      align-items: flex-end;
      .page,
      .info{
        flex-basis: auto;
        p{
          text-align: right;
        }
      }
      img{
        max-width: none;
        height: auto; 
      }
    }
  }
}

</style>