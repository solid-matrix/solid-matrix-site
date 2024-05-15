// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/main.scss'],

  app: {
    head: {
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
    contentHead: true,
    markdown: {},
  },

  modules: ["@nuxt/content"],

  plugins: ['~/plugins/mathjax'],
})