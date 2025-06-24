import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // Vuetifyのスタイルシートを追加
  css: ['vuetify/lib/styles/main.sass'],
  // Vuetifyをトランスパイル対象に追加
  build: {
    transpile: ['vuetify'],
  },
  // モジュール設定
  modules: [
    // '@nuxt/eslint',
    // '@nuxt/image',
    '@pinia/nuxt',
    // VuetifyのViteプラグインを登録する設定
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins ||= []
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
})
