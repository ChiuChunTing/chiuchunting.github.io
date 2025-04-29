const siteURL = 'https://chiuchunting.github.io/'
const siteImage = 'https://res.cloudinary.com/dxddw5huw/image/upload/t_post1200X630smart/v1744778738/exhibition_2025.jpg'

const title = '邱君婷 Chiu Chun-Ting'
const keyword = '邱君婷, Chiu Chun-Ting, contemporary artist, visual art, symbolic painting, Taiwanese artist, art portfolio, mixed media, dreamlike art'

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
        { rel: 'me', href: 'https://github.com/ChiuChunTing' }
      ],
      meta: [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
        { name: 'google-site-verification', content: 'qpCWZmWAdp9f7j7RYEUQjWn2YgGl2yqRcZ6dj5JEL8A'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: keyword},
        { property: 'og:type', content: 'website'},
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:url', content: siteURL},
        { property: 'og:site_name', content: title},
        { property: 'og:title', content: title},
        { name: 'twitter:title', content: `${title} | Art Portfolio` },

        // 聚焦藝術語境
        {
          name: 'description',
          content: '以繪畫為語言，構築游移於現實與幻想、記憶與感知的詩性空間。Chiu Chun-Ting paints a poetic space between reality, memory, and imagination through visual storytelling.'
        },
        // 聚焦內容範圍
        {
          property: 'og:description',
          content: '呈現邱君婷的創作脈絡、歷年作品與展覽訊息。Discover Chiu Chun-Ting’s creative journey through past works, exhibitions, and ongoing projects.'
        },
        {
          name: 'twitter:description',
          content: '呈現邱君婷的創作脈絡、歷年作品與展覽訊息。Discover Chiu Chun-Ting’s creative journey through past works, exhibitions, and ongoing projects.'
        },

        { name: 'twitter:image', content: siteImage },
        { property: 'og:image', content: siteImage },

        { property: 'fb:app_id', content: '889708896604789' },
      ]
    }
  },
  ssr: false,
  modules: [
    // '@nuxt/image',
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
  // image: {
  //   cloudinary: {
  //     baseURL: '' // 會自動從 runtimeConfig 中取得
  //   }
  // },
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
    // strategy: 'no_prefix', // 不使用語言前綴
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
