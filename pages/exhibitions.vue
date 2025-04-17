<script setup>
import UnicornIndicator from '@/assets/components/layout/Unicorn.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const { locale, t } = useI18n()

const start = '2025/04/24'
const end = '2025/05/17'

useSeoMeta({
  title: t('exhibition.seo.title'),
  ogTitle: t('exhibition.seo.title'),
  description: t('exhibition.seo.description', { start, end }),
  ogDescription: t('exhibition.seo.description', { start, end }),
  ogImage: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  // ogUrl: 'https://yourdomain.com/' + locale.value + '/exhibition/landscapes-of-the-soul',
  twitterImage: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: t('exhibition.seo.twitterTitle'),
  twitterDescription: t('exhibition.seo.twitterDescription', { end }),
  ogImageWidth: 1280,
  ogImageHeight: 720,
})

</script>

<template>
  <section>
    <NuxtImg 
      src="/img/exhibitionImg.jpg" 
      :alt="t('exhibition.seo.title')"
    />
    <div class="info">
      <p>{{t('exhibition.title')}}。</p>
      <p>{{t('exhibition.location')}}。</p>
      <p>{{start}} - {{ end }}</p>
    </div>
  </section>

  <section class="context mt-5">
    <p>{{ $t('exhibition.content1') }}</p>
    <p>{{ $t('exhibition.content2') }}</p>
    <p>{{ $t('exhibition.content3') }}</p>
    <p>{{ $t('exhibition.content4') }}</p>
  </section>

  <section class="unicorn">
    <UnicornIndicator/>

  </section>
  <section class="context mb-5">
    <b>{{ $t('exhibition.content5') }}</b>
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