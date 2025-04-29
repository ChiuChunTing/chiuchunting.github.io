<script setup>
import { useSchemaOrg } from '@unhead/schema-org/vue'

import { exhibitionList } from '@/assets/data/exhibition'
import UnicornIndicator from '@/assets/components/layout/Unicorn.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const currentExhibition = exhibitionList[0]

useSeoMeta({
  title: currentExhibition.title,
  description: currentExhibition.description,
  keywords: currentExhibition.keywords,

  ogTitle: currentExhibition.ogTitle,
  ogDescription: currentExhibition.ogDescription,
  ogImage: currentExhibition.siteImage1,
  ogType: 'article',

  twitterTitle: currentExhibition.ogTitle,
  twitterDescription: currentExhibition.ogDescription,
  twitterImage: currentExhibition.siteImage2
})

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": currentExhibition.name,
    "startDate": currentExhibition.startDate,
    "endDate": currentExhibition.endDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": currentExhibition.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Taipei",
        "addressCountry": "TW"
      }
    },
    "image": [currentExhibition.siteImage1, currentExhibition.siteImage2],
    "description": currentExhibition.description,
    "performer": {
      "@type": "Person",
      "name": currentExhibition.artist
    },
    "organizer": {
      "@type": "Organization",
      "name": currentExhibition.location,
      "url": "https://www.instagram.com/back_yiri/"
    },
    "url": currentExhibition.siteURL
  }
])

</script>

<template>
  <section>
    <CldImage 
      src="exhibition_2025" 
      placeholder="blur"
      loading="lazy"
      :alt="currentExhibition.imageAlt"
      width="762"
      height="953"
    />

    <div class="info">
      <p>{{ currentExhibition.name }}</p>
      <p>{{ currentExhibition.location }}</p>
      <p>{{ currentExhibition.start}} - {{ currentExhibition.end }}</p>
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
  padding: 2rem 1.5rem;
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