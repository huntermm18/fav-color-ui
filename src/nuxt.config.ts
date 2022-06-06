require('dotenv').config()

export default {
  ssr: false,

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (pageTitle: string): string => (pageTitle ? `${pageTitle} - ` : '') + 'PROJECT NAME', // TODO change PROJECT_NAME
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description ?? ''
      }
    ],
    script: [
      {
        src: 'https://cdn.byu.edu/byu-theme-components/2.x.x/byu-theme-components.min.js',
        async: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.byu.edu/shared-icons/latest/favicons/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.byu.edu/byu-theme-components/2.x.x/byu-theme-components.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.byu.edu/theme-fonts/1.x.x/ringside/fonts.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.byu.edu/theme-fonts/1.x.x/public-sans/fonts.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#002E5D' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '', // TODO: If most of your API endpoints start from a common base, then set it here
    https: true,
    proxy: true
  },
  // Stops local CORS errors when target is set
  proxy: {
    '/api': {
      // target: 'https://mhm62-fav-color-dev.byu-oit-fullstack-trn.amazon.byu.edu/',
      target: 'https://api.byu.edu:443/echo/v2/echo',
      pathRewrite: { '^/api': '/' },
      changeOrigin: true
      // headers: {
      //     'X-Jwt-Assertion': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlkySTVNemd4WWpZNVlUUXdNVGxqWkRVek4yWTJaamxqTURVNFpXWmpaVE14WmpWbU9USmxNZyJ9.eyJpc3MiOiJodHRwczovL2FwaS5ieXUuZWR1IiwiZXhwIjoxNjUzNjAxODUxLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3N1YnNjcmliZXIiOiJCWVUvbWhtNjIiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwcGxpY2F0aW9uaWQiOiIxMjM5NiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXBwbGljYXRpb25uYW1lIjoiRGVmYXVsdEFwcGxpY2F0aW9uIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcHBsaWNhdGlvbnRpZXIiOiJVbmxpbWl0ZWQiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FwaWNvbnRleHQiOiIvZWNoby92MiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdmVyc2lvbiI6InYyIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy90aWVyIjoiVW5saW1pdGVkIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9rZXl0eXBlIjoiU0FOREJPWCIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvdXNlcnR5cGUiOiJBUFBMSUNBVElPTiIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW5kdXNlciI6Im1obTYyQGNhcmJvbi5zdXBlciIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvZW5kdXNlclRlbmFudElkIjoiLTEyMzQiLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2NsaWVudF9pZCI6InEyRHdKUmRFWmZDRFpteUFrUWZSZ1JySE9VRWEiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3Jlc3Rfb2ZfbmFtZSI6Ik1pY2hhZWwgSHVudGVyIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9wZXJzb25faWQiOiI1NDAyMjU4MzIiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3NvcnRfbmFtZSI6Ik1hZHNlbiwgTWljaGFlbCBIdW50ZXIiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X2NsYWltX3NvdXJjZSI6IkNMSUVOVF9TVUJTQ1JJQkVSIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9uZXRfaWQiOiJtaG02MiIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfc3Vic2NyaWJlcl9uZXRfaWQiOiJtaG02MiIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfbmFtZV9zdWZmaXgiOiIgIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9zdXJuYW1lIjoiTWFkc2VuIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9zdXJuYW1lX3Bvc2l0aW9uIjoiTCIsImh0dHA6Ly9ieXUuZWR1L2NsYWltcy9jbGllbnRfbmFtZV9wcmVmaXgiOiIgIiwiaHR0cDovL2J5dS5lZHUvY2xhaW1zL2NsaWVudF9ieXVfaWQiOiIwODM4MTQ5MjMiLCJodHRwOi8vYnl1LmVkdS9jbGFpbXMvY2xpZW50X3ByZWZlcnJlZF9maXJzdF9uYW1lIjoiSHVudGVyIn0.iClenw4451NWs36Vc6rReh4LlrreugZwfKEcme2GpJy9k4NL1zYAsq4aLlQOLS1ot8dmX-aP5nH2zTCubKN9Q-Q2Mm6Bge_zcGQgGjP71M1_97Fh7hM6MTSh4KDA-Wl8jBzmQyqn7o87utgLEtIk_FIQpH1u6cV95I9fAn3JqLz11mq0DXTWxOKzRs83Q_hAB5paPGGzcY5pINeFp3qvjY7nVSXrQGNlAuJ7ApuntSOgNqakSJm4nlo5_prnOgjlBsYsZNK_soK24iP7dVu7AGh8vDMAvbivqKvV_3-1l4k4L3rc9chEhyH_DXXEJxCg4eS6mHjdZUW8R2J0G6ZL-A'
      // }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.sass'],
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: 'mdi'
    },
    theme: {
      themes: {
        light: {
          primary: '#002E5D',
          secondary: '#666666',
          accent: '#0062B8',
          error: '#A3082A',
          info: '#006073',
          success: '#10A170',
          warning: '#FFB700'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config: { devtool?: string }, { isDev, isClient }: { isDev: boolean, isClient: boolean }): void {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  buildModules: ['@byu-oit/nuxt-common'],
  ignore: [
    '**/*.spec.*',
    './__mocks__/**'
  ]
}
