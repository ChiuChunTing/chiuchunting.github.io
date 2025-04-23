// https://nuxt.com/docs/api/configuration/nuxt-config
const siteURL = 'https://chiuchunting.github.io/'

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
    head: {
      meta: [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
        { property: 'og:type', content: 'article'},
        { property: 'og:title', content: '邱君婷 Chiu Chun-Ting'},
        { property: 'og:site_name', content: '邱君婷 Chiu Chun-Ting'},
        { property: 'og:image', content: `${siteURL}square.png` },
        { property: 'og:url', content: siteURL},
      ]
    }
  },
  ssr: false,
  modules: [
    '@nuxt/image',
    '@nuxtjs/cloudinary',
    'nuxt-swiper',
    '@nuxtjs/i18n'
  ],
  compatibilityDate: '2025-04-23',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      ga4Id: process.env.GA_ID || '',
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || ''
    }
  },
  image: {
    cloudinary: {
      baseURL: '' // 會自動從 runtimeConfig 中取得
    }
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    useComponent: true,
    secure: true
  },
  i18n: {
    locales: [
      { code: 'zh-TW',  name: '中文', file: 'zh-tw.json' },
      { code: 'en',  name: 'En', file: 'en.json' },
    ],
    strategy: 'no_prefix', // 不使用語言前綴
    defaultLocale: 'zh-TW', // 設定默認語言為中文
  },
  plugins: [
    '~/plugins/gsap.client.ts',
    '~/plugins/ga.client.ts',
  ],
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/main.scss',
  ]
})
