<template>
  <section class="mt-[80px] md:mt-0">
    <div
      class="container mx-auto flex flex-col md:flex-row text-center md:text-left justify-between"
    >
      <div
        class="flex-1 p-5 flex flex-col gap-y-4 justify-center w-[95dvw] md:w-full mx-auto"
      >
        <h1 class="relative font-semibold text-3xl md:text-6xl line-clamp-3">
          <span class="opacity-0">
            {{ targetText }}
          </span>
          <span class="absolute inset-0 border-red-500 z-10">
            {{ currentText }}
          </span>
        </h1>
        <p
          class="line-clamp-3 opacity-70 animate__animated animate__fadeInDown"
          :style="{
            animationDelay: '1.3s',
          }"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim,
          aliquid aperiam incidunt sapiente quam itaque sed ad
        </p>
        <section class="flex justify-center md:justify-start gap-1">
          <Demo1UtilsButton
            title="Enroll Now"
            variant="full-gradient"
            class="animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.5s',
            }"
          />
          <Demo1UtilsButton
            variant="ghost"
            class="underline animate__animated animate__fadeInUp"
            :style="{
              animationDelay: '0.8s',
            }"
          >
            <span
              class="flex bg-gradient mr-1 text-white items-center justify-center rounded-full p-1 text-sm"
            >
              <Icon name="mdi:play" />
            </span>
            <p class="text-sm">What's Etech?</p>
          </Demo1UtilsButton>
        </section>
      </div>
      <div
        class="flex-1 flex items-end justify-center animate__animated animate__fadeIn animate__delay-1s"
      >
        <img
          src="/demo1/hero.png"
          class="max-h-[500px] md:max-h-full h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>

    <section
      class="flex bg-gradient justify-center gap-x-2 py-3 animate__animated animate__fadeInDown animate__delay-1s"
    >
      <NuxtMarquee auto-fill :speed="10">
        <Icon
          v-for="name in [
            'logos:microsoft',
            'logos:appcircle',
            'logos:adobe',
            'logos:astronomer',
            'logos:appwrite',
          ]"
          :key="name"
          :name="name"
          class="h-[50px] text-3xl opacity-80 mx-4 saturate-0 brightness-[999]"
          alt=""
        />
      </NuxtMarquee>
    </section>
  </section>
</template>

<script lang="ts" setup>
// typing effect
const currentText = ref("");
const targetText = "Develop your skills in a new and unique way";
onMounted(() => {
  let i = 0;
  const typing = setInterval(() => {
    if (i < targetText.length) {
      currentText.value += targetText[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, 20);
});
</script>

<style scoped>
.bg-gradient {
  background-image: var(--primary-gradient);
}
</style>
