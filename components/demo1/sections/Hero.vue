<template>
  <section class="mt-[50px] md:mt-0">
    <div
      class="container mx-auto flex flex-col md:flex-row text-center md:text-left justify-between"
    >
      <div
        class="flex-1 p-5 flex flex-col gap-y-4 justify-center w-[95dvw] md:w-full mx-auto"
      >
        <h1 class="font-semibold text-3xl md:text-6xl line-clamp-3">
          Develop your skills in a new and unique way
        </h1>
        <p class="line-clamp-3 opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim,
          aliquid aperiam incidunt sapiente quam itaque sed ad
        </p>
        <section class="flex justify-center md:justify-start gap-1">
          <Demo1UtilsButton title="Enroll Now" variant="full-gradient" />
          <Demo1UtilsButton variant="ghost" class="underline">
            <span
              class="flex bg-gradient mr-1 text-white items-center justify-center rounded-full p-1 text-sm"
            >
              <Icon name="mdi:play" />
            </span>
            <p class="text-sm">What's Etech?</p>
          </Demo1UtilsButton>
        </section>
      </div>
      <div class="flex-1 flex items-end justify-center">
        <img src="/demo1/hero.png" alt="" />
      </div>
    </div>

    <section class="flex bg-gradient justify-center gap-x-2 py-3">
      <NuxtMarquee auto-fill :speed="10">
        <img
          v-for="i in 8"
          :key="i"
          src="https://pngimg.com/d/microsoft_PNG3.png"
          class="saturate-0 h-[50px] brightness-[3] opacity-80"
          alt=""
        />
      </NuxtMarquee>
    </section>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.bg-gradient {
  background-image: var(--primary-gradient);
}
</style>
