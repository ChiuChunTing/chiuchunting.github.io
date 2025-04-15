<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from "nuxt/app"
import WebFooter from '@/assets/components/layout/WebFooter.vue'

const { $gsap } = useNuxtApp()
const { locale } = useI18n()
const artist = ref(null)
onMounted(() => {
  $gsap.to(artist.value, {
    duration: 2,
    text: "邱君婷 Chiu Chun-Ting",
    ease: "power2",
    scrollTrigger: {
      trigger: ".about_header",
      start: "top+=25px top",
      end: "+=300px",
      scrub: true,
      // markers: { startColor: "white" }
    }
  })
})

const soloExhibition = ref([
  {year: 2016, nameTw: '<春天的雷>伊日台中藝術空間，台中', nameEn: '<The Thunder Of Spring> YIRI ART Taichung Space, Taichung'},
  {year: 2015, nameTw: '<蜂人/我親愛的獨角獸 高雅婷、邱君婷雙個展>日光大道富錦藝術空間，台北', nameEn: '<Beekeeper/My deer unicorn> Kao Ya-Ting, Chiu Chun-Ting Duo Exhibition, Sonnentor Art  Space, Taipei'},
  {year: 2014, nameTw: '<Zaira-邱君婷、高慧芳雙個展> madL替代空間，台北', nameEn: '<Zaira> Chiu Chun-Ting, Kao Hui-Fang Duo Exhibition, MADL Alternative Space, Taipei'},
  {year: 2013, nameTw: '<邱君婷>創作個展 毓繡美術館籌備處，南投', nameEn: '<Chiu Chun-Ting> Solo Exhibition, YU-HSIU Fine Art Museum, Nantou'},
  {year: 2012, nameTw: '<一個偏僻的日夢-邱君婷個展> 日光大道富錦藝術空間，台北', nameEn: '<A Remote Daydream> Chiu Chun-Ting Solo Exhibition, Sonnentor Art  Space, Taipei'},
  {year: 2011, nameTw: '<日夢基地> 新竹教育大學迴廊，新竹', nameEn: '<Daydream Base> National Hsinchu University of Education, Hsinchu'}
])

const groupExhibition = ref([
  {year: 2024, nameTw: '<十年之前> 伊日藝術計畫，台北', nameEn: '<A Decade Ago> YIRI ART, Taipei'},
  {year: 2022, nameTw: '<花園> 慢慢鞥活美，台北', nameEn: '<The Garden> MM Studio, Taipei'},
  {year: 2020, nameTw: '<動物研究室> 241藝術空間，新竹', nameEn: '<Animal Lab> 241 Art Gallery, Hsinchu'},
  {year: 2018, nameTw: '<粉樂町> 當代藝術展，BELLAVITA，台北', nameEn: '<Very Fun Park> Contemporary Art Exhibition, BELLAVITA, Taipei'},
  {year: 2018, nameTw: '<Art Fair Tokyo>，東京，日本', nameEn: '<Art Fair Tokyo>, Tokyo, Japan'},
  {year: 2017, nameTw: '<動物派對> 駁二當代館，高雄', nameEn: '<Animal Party> The Pier-2 Art Center, Kaohsiung'},
  {year: 2016, nameTw: '<女書臉書 女性藝術家聯展> 桃園文化中心，桃園', nameEn: '<Nushu Facebook: Women Artists Group Exhibition> Taoyuan Cultural Center, Taoyuan'},
  {year: 2015, nameTw: '<台大粉樂町> 台灣大學，台北', nameEn: '<NTU Fun Town> National Taiwan University, Taipei'},
  {year: 2015, nameTw: '<童心未泯> Galerie F&F，台北', nameEn: '<Big boy> Galerie F&F, Taipei'},
  {year: 2014, nameTw: '<Art Apart Fair 2014> PARKROYAL on Pickering Hotel，新加坡', nameEn: '<Art Apart Fair 2014> PARKROYAL on Pickering Hotel, Singapore'},
  {year: 2013, nameTw: '<喃喃絮語-女性創作聯展> 臻品藝術空間，台中', nameEn: '<Whispering - Female Artists Group Exhibition> Pierre Gallery, Taichung'},
  {year: 2012, nameTw: '<松山原創基地節-藝術超市> 松山菸廠，台北', nameEn: '<Taipei Original Festival> Songshan Cultural and Creative Park, Taipei'},
  {year: 2012, nameTw: '<合流> 新竹教育大學毓繡藝術空間，新竹', nameEn: '<Confluence> Yu Hsiu Art Space, Hsinchu'},
  {year: 2011, nameTw: '<Zaira> 清華大學藝術工坊，新竹', nameEn: '<Zaira> National Tsing Hua University Art Center, Hsinchu'},
  {year: 2011, nameTw: '<除此之外-雙個展> 金變堂藝術空間，新竹', nameEn: '<In Addition to…> Duo Exhibition, Jin Bian Tang Art Space, Hsinchu'},
  {year: 2011, nameTw: '<拆解‧日常> 大象藝術空間，台中', nameEn: '<Dismantling/Daily> Da Xiang Art Space, Taichung'},
  {year: 2011, nameTw: '<餘溫與距離> KING空間，上海', nameEn: '<Sweltering And Distance> KING Space, Shanghai'},
  {year: 2010, nameTw: '<平行世代-兩岸青年藝術家交流展> 上海大學美術學院99創意中心，上海', nameEn: '<Exposition Communicating Young Artists Across The Taiwan Straits> 99 Art Center Fine Arts College of Shanghai University, Shanghai'}
])

const publicCollection = ref([
  {year: 2013, nameTw: '毓繡美術館巷弄美學計畫', nameEn: '<Self-portrait> <Melodica> <Cradle Bed> YU-HSIU Fine Art Museum'},
  {year: 2011, nameTw: '國家美術館，青年藝術家典藏', nameEn: '<Base 5> collected by National Taiwan Fine Art Museum'}
])

</script>

<template>
  <main>
    <header class="about_header"></header>

    <section>
      <h1 ref="artist">{{ $t('name') }}</h1>
      <p>{{ $t('birth') }}</p>
      <p v-if="$t('lang') === 'zh'">2013畢業於國立新竹教育大學藝術創作與教育碩士班</p>
    </section>

    <section v-if="$t('lang') === 'en'">
      <h2>Education</h2>
      <p>National Hsinchu University of Education_MFA, Taiwan</p>
    </section>

    <section>
      <h2>{{ $t('soloExhibition') }}</h2>
      <ul>
        <li v-for="(item, index) in soloExhibition" :key="index">
          <span>{{ item.year }}</span>
          {{ item[$t('key')] || '' }}
        </li>
      </ul>
    </section>
    <section>
      <h2>{{ $t('groupExhibition') }}</h2>
      <ul>
        <li v-for="(item, index) in groupExhibition" :key="index">
          <span>{{ item.year }}</span>
          {{ item[$t('key')] || '' }}
        </li>
      </ul>
    </section>
    <section>
      <h2>{{ $t('collection') }}</h2>
      <ul>
        <li v-for="(item, index) in publicCollection" :key="index">
          <span>{{ item.year }}</span>
          {{ item[$t('key')] || '' }}
        </li>
      </ul>
    </section>

    <WebFooter />
  </main>
</template>

<style lang="scss" scoped>
main{
  margin-bottom: 3rem;
}
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
  max-width: 768px;
  margin: auto;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem;

  p{
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  &.btn{
    position: fixed;
    top: 15rem;
    left: 10rem;
    flex-direction: row;
    justify-content: flex-end;
  }
}

footer{
  margin-top: 10vh;
}
</style>