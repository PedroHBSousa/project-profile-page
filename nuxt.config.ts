// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "animate.css/animate.min.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/image", "nuxt-aos", "nuxt-anchorscroll"],
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      "page:transition:finish",
    ],
  },
});
