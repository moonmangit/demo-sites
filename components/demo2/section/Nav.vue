<template>
  <nav
    class="container mx-auto flex justify-between items-center p-4 :py-4 sticky top-0 z-10 bg-white"
  >
    <!-- logo -->
    <section class="flex items-center gap-x-1 text-xl">
      <Icon name="fa6-brands:hive" class="text-[var(--p-green)]" />
      <h1 class="font-bold">Xurya</h1>
    </section>
    <!-- links -->
    <section class="hidden lg:block">
      <ul class="flex gap-x-6 capitalize">
        <li
          v-for="(link, idx) in [
            'home',
            'about us',
            'features',
            'services',
            'contact',
          ]"
          :key="idx"
          class="text-[rgb(var(--p-black-rgb),0.8)]"
        >
          {{ link }}
        </li>
      </ul>
    </section>
    <!-- actions -->
    <section class="hidden lg:flex gap-x-2">
      <button class="btn btn--white-border">Log in</button>
      <button class="btn btn--green">Get in touch</button>
    </section>
    <!-- mobile nav toggler  -->
    <button
      class="text-2xl flex lg:hidden text-[rgba(var(--p-black-rgb),0.6)] p-2 rounded-xl"
    >
      <Icon name="mdi:menu" />
    </button>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
