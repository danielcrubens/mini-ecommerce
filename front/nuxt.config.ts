// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  /* build: {
    transpile: ['node-fetch'], 
  }, */
 /*  vite: {
    ssr: {
      external: ['node-fetch'], 
    },
  }, */
  
 /*  router: {
    options: {
      strict: true
    }
  } */
    typescript: {
      strict: true
    },
    runtimeConfig: {
      public: {
        apiBase: process.env.API_BASE_URL || 'http://localhost:3333'
      }
    },
    components: true,
})