<template>
  <div
    id="demo1"
    class="demo1 bg-[var(--primary-color)] text-[var(--primary-text-color)] font-demo1 overflow-hidden overflow-y-auto"
  >
    <Demo1SectionsNav />
    <Demo1SectionsNavOverlay />

    <Demo1SectionsHero />
    <Demo1SectionsSearchCourse />
    <Demo1SectionsPopularCourse />
    <Demo1SectionsTeachers />

    <div class="bg-gradient">
      <Demo1SectionsReview />
      <Demo1SectionsContact />
      <Demo1SectionsFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.demo1 {
  --primary-color: #faf5fc;
  --primary-text-color: #201635;
  --primary-text-color-rgb: 32, 22, 53;
  --primary-accent-1: #b377ff;
  --primary-accent-1-rgb: 179, 119, 255;
  --primary-accent-2: #e288c2;
  --primary-accent-2-rgb: 226, 136, 194;
  --primary-gradient: linear-gradient(
    175deg,
    var(--primary-accent-1),
    var(--primary-accent-2)
  );
  --secondary-gradient: linear-gradient(
    175deg,
    var(--primary-accent-1),
    var(--primary-accent-2),
    var(--primary-accent-1)
  );
}

.bg-gradient {
  background-image: var(--secondary-gradient);
}

.bg-fade-center-white-gradient {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--primary-color),
    transparent
  );
}
</style>
