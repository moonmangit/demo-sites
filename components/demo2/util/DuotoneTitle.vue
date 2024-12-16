<template>
  <h1
    class="text-3xl line-clamp-none lg:line-clamp-2 section-title flex flex-col items-start"
  >
    <span class="relative">
      <span class="!opacity-0">{{ title }}</span>
      <span class="absolute inset-0 flex items-center">{{ displayText }}</span>
    </span>
    <span
      class="sub animate__animated opacity-0"
      :class="{
        animate__fadeIn: applyAnimation,
      }"
      :style="{ animationDelay: '0.5s' }"
      >{{ subtitle }}</span
    >
  </h1>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
  applyAnimation?: boolean;
}>();

// typing effect
const displayText = ref("");
const targetText = props.title;
watch(
  () => props.applyAnimation,
  () => {
    if (props.applyAnimation) {
      let i = 0;
      const interval = setInterval(() => {
        displayText.value += targetText[i];
        i++;
        if (i === targetText.length) clearInterval(interval);
      }, 25);
    }
  }
);
</script>

<style></style>
