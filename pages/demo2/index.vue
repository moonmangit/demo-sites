<template>
  <div
    id="demo2"
    class="font-demo2-sans w-screen h-screen overflow-y-auto overflow-x-hidden text-[rgba(var(--p-black-rgb),0.9)]"
  >
    <Demo2SectionNav />
    <Demo2SectionHero />
    <Demo2SectionSlogan />
    <Demo2SectionPartner />
    <Demo2SectionOffers />
    <Demo2SectionService />
    <Demo2SectionReview />
    <Demo2SectionFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style>
#demo2 {
  --p-green: #00d47e;
  --p-green-rgb: 0, 212, 126;
  --p-black: #1e1e1e;
  --p-black-rgb: 30, 30, 30;

  .text-gradient {
    background: linear-gradient(to right, white 90%, transparent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-container {
    @apply px-6 lg:px-10 py-[100px];
  }
  .section-title {
    @apply text-3xl;
    .sub {
      @apply text-[rgba(var(--p-black-rgb),0.4)];
    }
  }

  button.btn {
    @apply p-3 px-4 rounded-full flex items-center gap-x-2;

    &.btn--green {
      @apply bg-[var(--p-green)] text-white;
    }
    &.btn--white-border {
      @apply bg-white border;
    }
    &.btn--white {
      @apply bg-white text-[rgba(var(--p-black-rgb),0.8)];
    }
  }
}
</style>
