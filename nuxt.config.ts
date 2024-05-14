// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/main.scss'],

  app: {
    head: {
      title: "SolidMatrix",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png"
        }
      ]
    }
  },

  content: {
    navigation: {
      fields: ['author', 'publishedAt', 'tags']
    }
  },

  modules: ["@nuxt/content"]
})