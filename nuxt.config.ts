// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  }
  // app: {
  //   baseURL: '/myNuxt-for-test/', // baseURL: '/<repository>/'
  //   buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  // }
})
