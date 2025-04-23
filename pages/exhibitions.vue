<script setup>
import UnicornIndicator from '@/assets/components/layout/Unicorn.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const baseURL = 'https://chiuchunting.github.io/'
const { t, locale } = useI18n()
const title = '靈魂地景 | Landscapes of the Soul'
const location = '伊日後樂園 | BACK-Y'
const start = '2025/04/24'
const end = '2025/05/17'
watch(()=> locale.value, () => {
  useSeoMeta({
    title: t('exhibition.seo.title'),
    ogTitle: t('exhibition.seo.title'),
    description: t('exhibition.seo.description', { start, end }),
    ogDescription: t('exhibition.seo.description', { start, end }),
    ogImage: `${baseURL}adCarousel.jpg`,
    twitterImage: `${baseURL}adCarousel.jpg`,
    twitterTitle: t('exhibition.seo.title'),
    twitterDescription: t('exhibition.seo.description', { start, end }),
  })
}, { immediate: true })

</script>

<template>
  <section>
    <CldImage 
      src="exhibition_2025" 
      placeholder="blur"
      loading="lazy"
      :alt="t('exhibition.seo.title')"
      width="762"
      height="953"
    />

    <div class="info">
      <p>{{ title }}</p>
      <p>{{ location }}</p>
      <p>{{start}} - {{ end }}</p>
    </div>
  </section>

  <section class="context mt-5">
    <p>{{ $t('exhibition.content1') }}</p>
    <p>{{ $t('exhibition.content2') }}</p>
  </section>

  <section class="unicorn">
    <UnicornIndicator/>
  </section>

  <WebFooter />
</template>

<style lang="scss" scoped>
section{
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.5rem;
  img{
    width: 100%;
    max-width: 1024px;
    margin: auto;
  }

  .info{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    /* 平板模式 */
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
      gap: 0;
    }
    p{
      margin: 0;
    }
  }

  &.context{
    align-items: flex-start;
  }
  &.unicorn{
    padding: 0;
    @media (max-width: 600px) {
      transform: scale(.5);
      margin-left: -12.5%;
    }
    img{
      height: 380px;
    }
  }
}
</style>