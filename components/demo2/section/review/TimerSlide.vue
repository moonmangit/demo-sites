<template>
  <li
    class="flex-1 min-w-[200px] space-y-2 duration-300 cursor-pointer"
    :class="{
      'saturate-0 opacity-40': !active,
    }"
  >
    <!-- bar -->
    <div class="h-[4px] w-ull bg-[rgba(var(--p-black-rgb),0.1)] relative">
      <span
        v-if="active"
        class="absolute inset-y-0 left-0 bg-[var(--p-green)] duration-1000 ease-linear"
        :style="{
          width: `${(current / SECONDS) * 100}%`,
        }"
      ></span>
    </div>
    <!-- text -->
    <p class="truncate flex items-center justify-center gap-x-2">
      <Icon
        :name="content.iconName"
        class="text-[rgba(var(--p-black-rgb),0.4)]"
      />
      <span class="text-sm">{{ content.title }}</span>
    </p>
  </li>
</template>

<script lang="ts" setup>
import type { SlideContent } from "./index.vue";

const props = defineProps<{
  content: SlideContent;
  active: boolean;
}>();

const emits = defineEmits<{
  (e: "timeout"): void;
}>();

// display percentage
const SECONDS = 5;
const current = ref(0);
const timer = ref<NodeJS.Timeout | null>(null);
defineExpose({
  startTimer() {
    if (timer.value) {
      clearInterval(timer.value);
    }
    current.value = 0;
    timer.value = setInterval(() => {
      current.value += 1;
      if (current.value >= SECONDS && timer.value) {
        clearInterval(timer.value);
        // wait util animation ends
        setTimeout(() => {
          emits("timeout");
        }, 1000);
      }
    }, 1000);
  },
  resetTimer() {
    if (timer.value) {
      clearInterval(timer.value);
    }
    current.value = 0;
  },
});
</script>

<style></style>
