// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-marquee",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      "Hepta Slab": [400, 500, 600, 700],
    },
  },

  icon: {
    provider: "iconify",
  },
});
