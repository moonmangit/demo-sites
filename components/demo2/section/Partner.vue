<template>
  <ul
    ref="contentEl"
    class="flex flex-wrap items-center justify-center container mx-auto gap-3 pb-[50px] px-4"
  >
    <li
      v-for="(icon, idx) in icons"
      :key="idx"
      class="w-fit lg:w-[200px] min-w-[100px] lg:min-w-[200px] flex justify-center items-center rounded-full aspect-square bg-[rgba(var(--p-black-rgb),0.08)] hover:bg-white hover:text-[var(--p-green)] duration-200 border border-transparent hover:border-[rgba(var(--p-black-rgb),0.2)] hover:shadow-xl hover:-translate-y-4 cursor-pointer __ animate__animated opacity-0"
      :class="{
        animate__fadeInUp: applyAnimation,
      }"
      :style="{ animationDelay: `${idx * 0.2}s` }"
    >
      <Icon :name="icon" class="text-[60px] opacity-60" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
const icons = [
  "fa6-brands:amazon",
  "fa6-brands:apple",
  "fa6-brands:google",
  "fa6-brands:facebook",
  "fa6-brands:twitter",
];

// animation
const contentEl = ref<HTMLElement | null>(null);
const { applyAnimation } = useApplyAnimation(contentEl, {
  clearAnimationAfterMs: icons.length * 500,
  threshold: 0.6,
});
</script>

<style></style>
