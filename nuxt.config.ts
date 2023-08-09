// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui"],
  devtools: { enabled: false },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
});
