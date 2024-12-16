<template>
  <section
    ref="contentEl"
    class="section-container bg-[rgba(var(--p-black-rgb),0.05)] space-y-6 opacity-0"
    :class="{
      'clip-animation-left-to-right': applyAnimation,
    }"
  >
    <Demo2UtilDuotoneTitle
      class="w-4/5 lg:w-1/2 mx-auto text-center !items-center"
      title="We offer quality,"
      subtitle=" with the best materials and service"
      :apply-animation="applyAnimation"
    />
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl border border-[rgba(var(--p-black-rgb),0.2)] container mx-auto animate__animated opacity-0 overflow-hidden"
      :class="{
        animate__fadeIn: applyAnimation,
      }"
    >
      <li
        v-for="i in 6"
        :key="i"
        class="p-5 flex flex-col items-center md:items-start text-center md:text-start gap-y-2"
        :class="{
          'border-b': i + (1 % 3) !== 0,
          'border-r': i % 3 !== 0,
        }"
      >
        <div
          class="flex border border-[rgba(var(--p-black-rgb),0.08)] w-fit p-1 rounded-lg shadow-xl animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: `${0.4 + i * 0.2}s`,
          }"
        >
          <Icon
            name="material-symbols:stacks-rounded"
            class="text-[var(--p-green)] text-3xl"
          />
        </div>
        <h1
          class="text-xl font-medium animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: `${0.7 + i * 0.2}s`,
          }"
        >
          Layered Security
        </h1>
        <p
          class="line-clamp-2 text-sm animate__animated opacity-0"
          :class="{
            animate__fadeIn: applyAnimation,
          }"
          :style="{
            animationDelay: `${0.8 + i * 0.2}s`,
          }"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, atque
          accusamus accusantium perspiciatis repudiandae sed vitae ipsam dicta
          omnis dolore veniam nisi quaerat recusandae dolorum at id. Libero,
          quibusdam repellat!
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
// animation
const contentEl = ref<HTMLElement | null>(null);
const { applyAnimation } = useApplyAnimation(contentEl, {
  clearAnimationAfterMs: 3000,
  threshold: 0.2,
});
</script>

<style scoped>
.clip-animation-left-to-right {
  animation: clip-animation-left-to-right 1s forwards;
}
@keyframes clip-animation-left-to-right {
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    opacity: 0;
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 100;
  }
}
</style>
