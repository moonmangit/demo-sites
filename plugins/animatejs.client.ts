import anime from "animejs/lib/anime.es";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      anime,
    },
  };
});
