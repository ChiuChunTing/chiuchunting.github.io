<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from "nuxt/app"
const { $gsap } = useNuxtApp()

const artist = ref(null)
onMounted(() => {
  $gsap.to(artist.value, {
    duration: 2,
    text: "邱君婷 Chiu Chun-Ting",
    ease: "power2",
    scrollTrigger: {
      trigger: ".about_header",
      start: "top+=100px top",
      end: "+=300px",
      scrub: true,
      // markers: { startColor: "white" }
    }
  })
})

const soloExhibition = ref([
  {year: 2016, name: '<春天的雷>伊日台中藝術空間，台中'},
  {year: 2015, name: '<蜂人/我親愛的獨角獸 高雅婷、邱君婷雙個展>日光大道富錦藝術空間，台北'},
  {year: 2014, name: '<Zaira-邱君婷、高慧芳雙個展>  madL替代空間，台北'},
  {year: 2013, name: '<邱君婷>創作個展  毓繡美術館籌備處，南投'},
  {year: 2012, name: '<一個偏僻的日夢-邱君婷個展>  日光大道富錦藝術空間，台北'},
  {year: 2011, name: '<日夢基地> 新竹教育大學迴廊，新竹'}
])

const groupExhibition = ref([
  {year: 2024, name: '<十年之前> 伊日藝術計畫，台北'},
  {year: 2022, name: '<花園> 慢慢鞥活美，台北'},
  {year: 2020, name: '<動物研究室> 241藝術空間，新竹'},
  {year: 2018, name: '<粉樂町> 當代藝術展，BELLAVITA，台北'},
  {year: 2018, name: '<Art Fair Tokyo>，東京，日本'},
  {year: 2017, name: '<動物派對> 駁二當代館，高雄'},
  {year: 2016, name: '<女書臉書 女性藝術家聯展> 桃園文化中心，桃園'},
  {year: 2015, name: '<台大粉樂町> 台灣大學，台北'},
  {year: 2015, name: '<童心未泯>  Galerie F&F，台北'},
  {year: 2014, name: '<Art Apart Fair 2014>  PARKROYAL on Pickering Hotel，新加坡'},
  {year: 2013, name: '<喃喃絮語-女性創作聯展>  臻品藝術空間，台中'},
  {year: 2012, name: '<松山原創基地節-藝術超市> 松山菸廠，台北'},
  {year: 2012, name: '<合流> 新竹教育大學毓繡藝術空間，新竹'},
  {year: 2011, name: '<Zaira>  清華大學藝術工坊，新竹'},
  {year: 2011, name: '<除此之外-雙個展>  金變堂藝術空間，新竹'},
  {year: 2011, name: '<拆解‧日常>  大象藝術空間，台中'},
  {year: 2011, name: '<餘溫與距離> KING空間，上海'},
  {year: 2010, name: '<平行世代-兩岸青年藝術家交流展>  上海大學美術學院99創意中心，上海'}
])

const publicCollection = ref([
  {year: 2013, name: '毓繡美術館巷弄美學計畫'},
  {year: 2011, name: '國家美術館，青年藝術家典藏'}
])

</script>

<template>
  <main>
    <header
      class="about_header"

    >
    </header>

    <section>
      <h1 ref="artist">邱君婷</h1>
      <p>1987年生</p>
      <p>2013畢業於國立新竹教育大學藝術創作與教育碩士班</p>
    </section>

    <section>
      <h2>個展</h2>
      <ul>
        <li v-for="(item, index) in soloExhibition" :key="index">
          <span>{{ item.year }}</span>
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section>
      <h2>聯展</h2>
      <ul>
        <li v-for="(item, index) in groupExhibition" :key="index">
          <span>{{ item.year }}</span>
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section>
      <h2>典藏</h2>
      <ul>
        <li v-for="(item, index) in publicCollection" :key="index">
          <span>{{ item.year }}</span>
          {{ item.name }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
header{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  height: 30vh;
  padding: .5rem;
  font-size: 0.8rem;

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(60, 77, 98, 0.5), transparent);
  }
}
section{
  width: 100%;
  max-width: 768px;
  margin: auto;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem;
  p{
    margin: 0;
    line-height: 1.6;
  }
}
</style>