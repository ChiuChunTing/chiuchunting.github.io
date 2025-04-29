<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org/vue'
import TopSection from '@/assets/components/home/TopSection.vue'
import IntroductionSection from '@/assets/components/home/IntroductionSection.vue'
import ExhibitionSection from '@/assets/components/home/ExhibitionSection.vue'
import WebFooter from '@/assets/components/layout/WebFooter.vue'

// https://nuxtseo.com/learn/mastering-meta/schema-org
useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "邱君婷 Chiu Chun-Ting",
    "alternateName": "Chiu Chun-Ting",
    "url": "https://chiuchunting.github.io",
    "image": "https://chiuchunting.github.io/ChiuChunTing1.jpg",
    "sameAs": [
      "https://instagram.com/chiu_j_t",
      "https://github.com/chiuchunting",
      "https://www.facebook.com/profile.php?id=1143919654",
    ],
    "jobTitle": "Visual Artist",
    "description": "邱君婷以繪畫為語言，構築游移於現實與幻想、記憶與感知的詩性空間。Chiu Chun-Ting paints a poetic space between reality, memory, and imagination through visual storytelling.",
    "nationality": "Taiwanese",
    "gender": "Female",
    "knowsAbout": ["Painting", "Visual Art", "Exhibition", "Symbolism", "Poetic Narratives"],
    "worksFor": {
      "@type": "Organization",
      "name": "Chiu Chun-Ting Studio"
    }
  }
])

</script>

<template>
  <main>
    <TopSection />
    <IntroductionSection />
    <ExhibitionSection />
    <WebFooter/>
  </main>
</template>