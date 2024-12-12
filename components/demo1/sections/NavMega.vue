<template>
  <div
    class="fixed inset-0 container mx-auto bg-[var(--primary-color)] shadow-xl shadow-gray-500/10 p-6 rounded-2xl translate-y-[70px] border-2 border-[var(--primary-accent-1)] duration-300 h-fit z-[100]"
    :class="{
      'opacity-0 pointer-events-none': !active,
      'opacity-100 pointer-events-auto': active,
    }"
    @mouseenter="$emit('select-menu', index)"
    @mouseleave="$emit('unselect-menu')"
  >
    <Transition mode="out-in">
      <component v-if="index !== -1" :is="Demo1Menus[index].component" />
    </Transition>
    <!-- tip -->
    <span
      ref="tipEl"
      class="absolute bottom-full bg-[rgba(var(--primary-accent-1-rgb),0.4)] w-4 h-2 rounded-t-full duration-300"
    ></span>
  </div>
</template>

<script lang="ts" setup>
import { Demo1Menus } from "@/assets/src/menus";

const props = defineProps<{
  index: number;
  active: boolean;
}>();

const emits = defineEmits<{
  (e: "select-menu", index: number): void;
  (e: "unselect-menu"): void;
}>();

const tipEl = ref<HTMLElement | null>(null);
defineExpose({
  tipEl,
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-200;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0 scale-95;
}
</style>
