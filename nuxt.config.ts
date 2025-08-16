// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    static: true,
    routeRules: {
      "/**": { prerender: true },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
});
