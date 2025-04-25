<script setup lang="ts">
import TopSection from '@/assets/components/home/TopSection.vue'
import IntroductionSection from '@/assets/components/home/IntroductionSection.vue'
import ExhibitionSection from '@/assets/components/home/ExhibitionSection.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "邱君婷 Chiu Chun-Ting",
        "alternateName": "Chiu Chun-Ting",
        "url": "https://chiuchunting.github.io",
        "image": "https://chiuchunting.github.io/square.png",
        "sameAs": [
          "https://instagram.com/chiu_j_t",
          "https://github.com/chiuchunting",
          "https://www.facebook.com/profile.php?id=1143919654",
        ],
        "jobTitle": "Visual Artist",
        "description": "邱君婷，繪畫藝術家，以夢境與感知為語彙，建構游移於現實與幻想之間的詩性空間。",
        "nationality": "Taiwanese",
        "gender": "Female",
        "knowsAbout": ["Painting", "Visual Art", "Exhibition", "Symbolism", "Poetic Narratives"],
        "worksFor": {
          "@type": "Organization",
          "name": "Chiu Chun-Ting Studio"
        }
      })
    }
  ]
})

</script>

<template>
  <main>
    <TopSection />
    <IntroductionSection />
    <ExhibitionSection />
    <WebFooter/>
  </main>
</template>