<template>
  <nav
    ref="navEl"
    class="flex text-lg items-center justify-between container mx-auto px-5 py-3 gap-x-3 md:static fixed top-0 inset-x-0 backdrop-blur-md z-[100] duration-300 md:!bg-transparent md:!text-[var(--primary-text-color)]"
    :class="{
      'bg-[var(--primary-text-color)] text-[var(--primary-accent-2)] rounded-b-3xl':
        darker,
      'bg-[var(--primary-color)]': !darker,
    }"
  >
    <h1
      class="font-bold text-2xl animate__animated animate__fadeInLeft"
      :style="{
        animationDelay: `${overallDelay}s`,
      }"
    >
      Etech.
    </h1>
    <section class="hidden lg:flex items-center gap-x-2">
      <button
        v-for="(menu, idx) in Demo1Menus"
        ref="menuEls"
        class="flex items-center gap-x-1 p-2 px-3 animate__animated animate__fadeInUp rounded-md hover:bg-[rgba(var(--primary-text-color-rgb),0.05)] duration-150 cursor-pointer group/menu"
        :style="{
          animationDelay: `${overallDelay + idx * 0.3}s`,
        }"
        @mouseenter="$emit('selectMenu', idx)"
        @mouseleave="$emit('unselectMenu')"
      >
        <label for="" class="flex items-center gap-x-1 cursor-pointer">
          {{ menu.label }}
          <Icon
            name="mdi:chevron-down"
            class="group-hover/menu:rotate-180 duration-300"
          />
        </label>
      </button>
    </section>
    <section class="hidden lg:flex gap-x-2">
      <Demo1UtilsButton
        v-for="(text, idx) in ['Sign In', 'Free Trial']"
        :key="idx"
        :title="text"
        :variant="idx === 0 ? 'outline' : 'full-gradient'"
        class="animate__animated animate__fadeInUp"
        :style="{
          animationDelay: `${overallDelay + idx * 0.3}s`,
        }"
      />
    </section>
    <button
      class="flex lg:hidden text-2xl animate__animated animate__fadeInRight"
      :style="{
        animationDelay: `${overallDelay}s`,
      }"
      @click.prevent="nav.open()"
    >
      <Icon name="mdi:menu" />
    </button>
  </nav>
</template>

<script lang="ts" setup>
import { Demo1Menus } from "@/assets/src/menus";

const emits = defineEmits<{
  (e: "selectMenu", index: number): void;
  (e: "unselectMenu"): void;
}>();

const overallDelay = ref(0.8);
const nav = useDemo1Nav();
const navEl = ref<HTMLElement | null>(null);
const menuEls = ref<HTMLElement[]>([]);
defineExpose({
  menuEls,
});

// darker on scroll down
const darker = ref(false);
const { y } = useScroll(window, {
  onScroll() {
    if (y.value > 200) {
      darker.value = true;
    } else {
      darker.value = false;
    }
  },
});
</script>

<style scoped></style>
