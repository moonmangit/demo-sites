<template>
  <nav
    class="flex text-lg items-center justify-between container mx-auto p-5 gap-x-3 md:static fixed top-0 inset-x-0 backdrop-blur-md z-10 duration-300"
    :class="{
      'bg-[var(--primary-text-color)] text-[var(--primary-accent-2)]': darker,
      'bg-[var(--primary-color)]': !darker,
    }"
  >
    <h1 class="font-bold text-2xl">Etech.</h1>
    <section class="hidden md:flex items-center gap-x-2">
      <button
        v-for="label in ['Courses', 'Teachers', 'Offers', 'Contact']"
        class="flex items-center gap-x-1"
      >
        <label for="">{{ label }}</label>
        <Icon name="mdi:chevron-down" />
      </button>
    </section>
    <section class="hidden md:flex gap-x-2">
      <Demo1UtilsButton title="Sign In" variant="outline" />
      <Demo1UtilsButton title="Free Trial" variant="full-gradient" />
    </section>
    <button class="flex md:hidden text-2xl">
      <Icon name="mdi:menu" />
    </button>
  </nav>
</template>

<script lang="ts" setup>
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

<style></style>
