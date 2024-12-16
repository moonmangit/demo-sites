<template>
  <section ref="contentEl" class="section-container">
    <main
      class="container mx-auto flex flex-col lg:grid grid-cols-2 gap-[25px] lg:gap-[50px]"
    >
      <section class="space-y-4">
        <Demo2UtilDuotoneTitle
          title="Trusted service,"
          subtitle=" for your various needs"
          :apply-animation="applyAnimation"
        />
        <button
          class="btn btn--green animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: '0.5s',
          }"
        >
          Get in touch
          <Icon name="mdi:arrow-top-right" />
        </button>
      </section>
      <ul class="grid grid-cols-2 gap-3">
        <li
          v-for="i in 4"
          :key="i"
          class="border flex flex-col p-4 rounded-xl animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: `${0.3 + i * 0.2}s`,
          }"
        >
          <h2 class="animate__animated text-[rgba(var(--p-black-rgb),0.4)]">
            {{ i.toString().padStart(2, "0") }}
          </h2>
          <h1 class="text-lg flex-1 flex items-center leading-5">
            Solar panels for home
          </h1>
          <a href="" class="underline text-sm">View Details</a>
        </li>
      </ul>
      <section
        class="col-start-2 row-start-1 row-span-2 opacity-0"
        :class="{
          'clip-animate-from-top-right': applyAnimation,
        }"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661952328751-a958e0a1f7fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-full h-[min(350px,55dvh)] md:h-[min(650px,55dvh)] object-cover rounded-3xl"
        />
      </section>
    </main>
  </section>
</template>

<script lang="ts" setup>
const contentEl = ref<HTMLElement | null>(null);
const { applyAnimation } = useApplyAnimation(contentEl, {
  clearAnimationAfterMs: 3000,
  threshold: 0.4,
});
</script>

<style scoped>
.clip-animate-from-top-right {
  animation: clip-animate-from-top-right 1.5s forwards;
}
@keyframes clip-animate-from-top-right {
  from {
    clip-path: circle(0% at 90% 10%);
    opacity: 0;
  }
  to {
    clip-path: circle(150% at 90% 10%);
    opacity: 1;
  }
}
</style>
