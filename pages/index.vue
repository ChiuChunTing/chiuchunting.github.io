<script setup lang="ts">
import TopSection from '@/assets/components/home/TopSection.vue'
import IntroductionSection from '@/assets/components/home/IntroductionSection.vue'
import ExhibitionSection from '@/assets/components/home/ExhibitionSection.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'
const { t, locale } = useI18n()
const lang = computed(() => locale.value)
watch(lang, () => {
  useSeoMeta({
    description: t('home.seo.description'),
    ogDescription: t('home.seo.description'),
    twitterDescription: t('home.seo.description'),
  })
}, { immediate: true })
</script>

<template>
  <main>
    <TopSection />
    <IntroductionSection />
    <ExhibitionSection />
    <WebFooter/>
  </main>
</template>