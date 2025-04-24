<script setup>
import UnicornIndicator from '@/assets/components/layout/Unicorn.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const artist = '邱君婷 Chiu Chun-Ting'
const title = '靈魂地景 | Landscapes of the Soul'
const location = '伊日後樂園 | BACK-Y'
const start = '2025/04/24'
const end = '2025/05/17'
const siteImage1 = 'https://res.cloudinary.com/dxddw5huw/image/upload/t_square/v1744778738/exhibition_2025.jpg'
const siteImage2 = 'https://res.cloudinary.com/dxddw5huw/image/upload/t_square/v1745503404/exhibition_2025_2.jpg'
const siteURL = 'https://chiuchunting.github.io/exhibitions'
const description = `邱君婷的最新展覽《${title}》於 ${location} 展出，展期自 ${start} 至 ${end}，呈現她以夢境與感知為語彙的創作軌跡。`

const imageAlt = `${title}_${location}_${start}-${end}_${artist}`
useSeoMeta({
  title: `${title}｜展覽資訊 Exhibitions｜${artist}`,
  description: description,
  keywords: 'Chiu Chun-Ting, 邱君婷, 靈魂地景, 當代藝術展覽, 台北展覽, BACK-Y, 伊日後樂園, Taiwanese artist, solo exhibition, contemporary art',

  ogTitle: `${title}｜Chiu Chun-Ting Solo Exhibition`,
  ogDescription: `Discover Chiu Chun-Ting's latest solo exhibition '${title}' at ${location}, on view from ${start} to ${end}. A visual journey into dreams, memory, and symbolic landscapes.`,
  ogImage: siteImage1,
  ogUrl: siteURL,
  ogType: 'article',

  twitterTitle: `${title} | Chiu Chun-Ting Exhibition`,
  twitterDescription: `Explore 'Landscapes of the Soul', a solo show by Chiu Chun-Ting at BACK-Y, Taipei, from ${start} to ${end}.`,
  twitterImage: siteImage2
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": title,
        "startDate": "2025-04-24",
        "endDate": "2025-05-17",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taipei",
            "addressCountry": "TW"
          }
        },
        "image": [siteImage1, siteImage2],
        "description": description,
        "performer": {
          "@type": "Person",
          "name": artist
        },
        "organizer": {
          "@type": "Organization",
          "name": location,
          "url": "https://www.instagram.com/back_yiri/"
        },
        "url": siteURL
      })
    }
  ]
})

</script>

<template>
  <section>
    <CldImage 
      src="exhibition_2025" 
      placeholder="blur"
      loading="lazy"
      :alt="imageAlt"
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