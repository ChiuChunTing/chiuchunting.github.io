// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL
  },
  ssr: false,
  compatibilityDate: '2025-04-19',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/cloudinary',
    'nuxt-swiper',
    '@nuxtjs/i18n'
  ],
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
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || ''
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
