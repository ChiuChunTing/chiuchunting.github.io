// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   baseURL: '/chiu-portfolio/'
  // },
  ssr: false,
  compatibilityDate: '2025-02-20',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/cloudinary',
    'nuxt-swiper',
    'nuxt-swiper',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'zh-TW',  name: '中文', file: 'zh-tw.json' },
      { code: 'en',  name: 'En', file: 'en.json' },
    ],
  //   lazy: true,
    strategy: 'no_prefix', // 不使用語言前綴
    defaultLocale: 'zh-TW', // 設定默認語言為中文
  },
  plugins: ['~/plugins/gsap.client.ts'],
  // cloudinary: {
    // defaults: {
      // transformation: [{ crop: 'fit', width: 800, height: 800 }]
    // }
  // },
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/main.scss',
  ]
})