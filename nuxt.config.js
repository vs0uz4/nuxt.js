const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - NuxtJs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: '~/shared/loading.vue',
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Global CSS
  */
  css: [
    '~/node_modules/izitoast/dist/css/iziToast.css',
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/vee-validate',
    { src: '~/plugins/vue-notifications', ssr: true }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', '@nuxtjs/bootstrap-vue', 'vee-validate', 'vue-notifications'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'sct.cookie.nuxtJS',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: (24 * 60 * 1000) }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}
