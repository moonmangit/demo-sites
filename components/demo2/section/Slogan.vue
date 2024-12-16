<template>
  <section
    ref="contentEl"
    class="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-8 gap-x-4 py-10"
  >
    <Demo2UtilDuotoneTitle
      title="Focusing on quality,"
      subtitle=" we maintain customer trust"
      :apply-animation="applyAnimation"
    />
    <p
      class="line-clamp-3 animate__animated opacity-0"
      :class="{
        animate__fadeInDown: applyAnimation,
      }"
      :style="{ animationDelay: '0.7s' }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt ipsa
      nam a saepe rerum cum, officia neque eaque magni assumenda vitae
      laboriosam. Totam sapiente accusamus sunt molestias quo quae.
    </p>
  </section>
</template>

<script lang="ts" setup>
const contentEl = ref<HTMLElement | null>(null);
const { applyAnimation } = useApplyAnimation(contentEl, {
  clearAnimationAfterMs: 2000,
  threshold: 0.2,
});
</script>

<style scoped></style>
