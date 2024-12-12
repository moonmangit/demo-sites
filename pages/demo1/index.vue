<template>
  <div
    id="demo1"
    class="demo1 bg-[var(--primary-color)] text-[var(--primary-text-color)] font-demo1 overflow-hidden overflow-y-auto"
  >
    <!-- navigation -->
    <Demo1SectionsNav
      @select-menu="handleSelectMenu($event)"
      @unselect-menu="handleUnselectMenu"
      ref="navEl"
    />
    <Demo1SectionsNavMega
      ref="navMegaEl"
      :index="menuActiveIndex"
      :active="menuMegaActive"
      @select-menu="handleSelectMenu($event)"
      @unselect-menu="handleUnselectMenu"
    />
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

<script lang="ts" setup>
import Nav from "@/components/demo1/sections/Nav.vue";
import NavMega from "@/components/demo1/sections/NavMega.vue";

// mega menus
const menuActiveIndex = ref(-1);
const menuMegaActive = ref(false);
const unActiveTimer = ref<NodeJS.Timeout | null>(null);
const unComponentTimer = ref<NodeJS.Timeout | null>(null);
const navEl = ref<InstanceType<typeof Nav> | null>(null);
const navMegaEl = ref<InstanceType<typeof NavMega> | null>(null);
function handleSelectMenu(idx: number) {
  if (unComponentTimer.value) {
    clearTimeout(unComponentTimer.value);
    unComponentTimer.value = null;
  }
  if (unActiveTimer.value) {
    clearTimeout(unActiveTimer.value);
    unActiveTimer.value = null;
  }
  menuMegaActive.value = true;
  menuActiveIndex.value = idx;
  if (navMegaEl.value?.tipEl) {
    const menuEl = navEl.value?.menuEls[idx];
    if (!menuEl) return;
    navMegaEl.value.tipEl.style.left = `${
      menuEl.offsetLeft +
      menuEl.clientWidth / 2 -
      navMegaEl.value.tipEl.clientWidth / 2
    }px`;
  }
}
function handleUnselectMenu() {
  unActiveTimer.value = setTimeout(() => {
    menuMegaActive.value = false;
    unComponentTimer.value = setTimeout(() => {
      menuActiveIndex.value = -1;
    }, 500);
  }, 300);
}
</script>

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
