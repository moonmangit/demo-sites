<template>
  <div class="relative w-full h-full rounded-3xl overflow-hidden">
    <swiper-container
      class="w-full h-full object-cover absolute inset-0 z-[-1]"
      :slides-per-view="1"
      :autoplay="{
        delay: 7000,
      }"
      :effect="'fade'"
    >
      <swiper-slide v-for="(url, idx) in images" :key="idx">
        <img :src="url" class="w-full h-full object-cover absolute inset-0" />
      </swiper-slide>
    </swiper-container>
    <div
      class="absolute inset-0 bg-gradient-to-tr from-gray-800/90 pointer-events-none"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  "https://images.unsplash.com/photo-1440940627368-bd68a386bb73?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615630859219-0459703c34e6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
</script>

<style></style>
