export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: 'HPCrew',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'HPC, High Performance Crew, Krumau'},
      { name: 'description', content: 'HPC - High Performance Crew Der markenoffene Autoverein für Tuningbegeisterte!'}
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
      },
      {
        src: "https://kit.fontawesome.com/c1a401d892.js",
        crossorigin: "anonymous"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/global.css',
    '@/assets/css/lightbox.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js',
    {
      src: '~/plugins/aos.js',
      ssr: false,
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap',
    [
     'storyblok-nuxt',
     {
       accessToken: 'pvGJbd6onaqwwHQrfcmrowtt',
       cache: {
         clear: 'auto',
         type: 'memory'
       }
     }
   ]
  ],

  sitemap: {
    hostname: 'https://hpcrew.at',
    gzip: true,
    exclude: [
      '/Alte_Kontaktseite'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  loaders: [
    { test: /\.js$/, loader: 'babel', query: {compact: false} }
]
}
