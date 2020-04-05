export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '星际华通科技公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '星际华通科技公司' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'video.js/dist/video-js.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/nuxt-video-player-plugin.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],
  buefy: {
    css: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
