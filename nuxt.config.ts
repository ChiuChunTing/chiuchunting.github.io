const siteURL = 'https://chiuchunting.github.io/'
const siteImage = 'https://res.cloudinary.com/dxddw5huw/image/upload/t_post1200X630smart/v1744778738/exhibition_2025.jpg'
const title = '邱君婷 Chiu Chun-Ting'
const descriptionTw = '邱君婷是一位當代表現藝術家，以繪畫探索夢境、記憶與感知之間的詩性空間。她的作品充滿象徵符碼，如孩童、狼、甲蟲與星星，交織出靜謐而深刻的視覺敘事。從柔和色彩到細膩結構，她以圖像引領觀者進入一場靜默而親密的凝視旅程。網站呈現其歷年創作與最新展覽動態，宛如一座夢與現實交織的圖書館。'
const descriptionEn = 'Chiu Chun Ting is a contemporary visual artist whose paintings explore poetic realms between dreams, memory, and perception. Her works feature recurring symbols—children, wolves, beetles, stars—that evoke quiet yet powerful narratives. With gentle palettes and layered composition, she transforms viewing into an intimate, reflective experience. This site showcases her past works and latest exhibitions, inviting you into a dreamlike library of visual storytelling.'
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

        { name: 'description', content: descriptionTw},
        { property: 'og:description', content: `${descriptionTw} ${descriptionEn}` },
        { name: 'twitter:description', content: descriptionEn },
        { name: 'twitter:image', content: siteImage },
        { property: 'og:image', content: siteImage },
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
