export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Career pages',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  env: {
    apiBase: process.env.SERVER_DOMAIN || ''
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/element.js' },
    { src: '~/plugins/composition.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-analytics'
  ],

  modules: [
    'portal-vue/nuxt'
  ],

  googleAnalytics: {
    id: 'G-0T6M4LBF43'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'edit',
        path: '/e',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  generate: {
    // Composition API bug https://composition-api.nuxtjs.org/getting-started/setup
    interval: 2000,
  }
}
