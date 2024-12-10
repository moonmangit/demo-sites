<template>
  <div
    class="demo1 bg-[var(--primary-color)] text-[var(--primary-text-color)] font-demo1 overflow-hidden overflow-y-auto"
  >
    <Demo1SectionsNav />
    <Demo1SectionsHero />
    <Demo1SectionsSearchCourse />
    <Demo1SectionsPopularCourse />

    <section>{teachers}</section>
    <section>{tester}</section>
    <footer>{footer}</footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.demo1 {
  --primary-color: #faf5fc;
  --primary-text-color: #201635;
  --primary-accent-1: #b377ff;
  --primary-accent-1-rgb: 179, 119, 255;
  --primary-accent-2: #e288c2;
  --primary-accent-2-rgb: 226, 136, 194;
  --primary-gradient: linear-gradient(
    175deg,
    var(--primary-accent-1),
    var(--primary-accent-2)
  );
}
</style>
