// https://nuxt.com/docs/api/configuration/nuxt-config
const siteURL = 'https://chiuchunting.github.io/'
const siteImage = `${siteURL}square.png`
const title = '邱君婷 Chiu Chun-Ting'
const description = '邱君婷的個人作品與展覽資訊網站，展示藝術創作與最新動態。Personal website of Chiu Chun-Ting, featuring artworks and exhibition updates.' 

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: title,
      link: [
        { rel: 'canonical', href: siteURL },
        { rel: 'icon', type: 'image/png', href: `${siteURL}favicon-96x96.png` },
        { rel: 'icon', type: 'image/svg+xml', href: `${siteURL}favicon.svg` },
        { rel: 'shortcut icon', href: `${siteURL}favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${siteURL}apple-touch-icon.png` },
      ],
      meta: [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description},
        { property: 'og:type', content: 'article'},
        { property: 'og:title', content: title},
        { property: 'og:description', content: description },
        { property: 'og:site_name', content: title},
        { property: 'og:image', content: siteImage },
        { property: 'og:url', content: siteURL},
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: siteImage },
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
