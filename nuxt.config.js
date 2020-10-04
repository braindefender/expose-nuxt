export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    { src: '~/assets/fonts/PTSans/stylesheet.css' },
    { src: '~/assets/fonts/PTMono/stylesheet.css' },
    { src: 'swiper/swiper.scss' },
  ],
  plugins: [
    { src: '~/plugins/v-waypoint.client.js', mode: 'client' },
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' },
    { src: '~/plugins/v-img.js' },
  ],
  components: true,
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    `@nuxtjs/proxy`,
    'vue-scrollto/nuxt',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://expose-server.gpntbsib.ru/api',
  },
  proxy: {
    '/api': {
      target: 'https://expose-server.gpntbsib.ru/api',
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/typed-vuex/],
  },
}
