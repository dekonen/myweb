// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: "dark-plus",
        },
      },
    },
  },
});
