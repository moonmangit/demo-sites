<template>
  <div
    ref="sectionEl"
    class="basic-section flex flex-col items-center justify-center py-[50px] overflow-hidden"
    :class="[`basic-section--${props.content.variant}`]"
  >
    <header
      class="flex flex-col gap-3 container mx-auto max-w-[80dvw] md:max-w-[60dvw] text-center"
      :class="[props.headerClass]"
    >
      <h1
        class="font-bold text-2xl animate__animated opacity-0"
        :class="{
          animate__fadeInUp: applyAnimation,
        }"
      >
        {{ content.title }}
      </h1>
      <slot name="subtitle">
        <p
          v-if="content.description"
          class="line-clamp-3 animate__animated opacity-0"
          :class="[
            pClass,
            {
              animate__fadeInUp: applyAnimation,
            },
          ]"
          :style="{
            animationDelay: '0.2s',
          }"
        >
          {{ content.description }}
        </p>
      </slot>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  content: {
    title: string;
    description?: string;
    variant: "normal" | "colorful" | "colorful-no-bg";
  };
  headerClass?: string;
  pClass?: string;
}>();

const applyAnimation = ref(false);
const sectionEl = ref<HTMLElement | null>(null);
useIntersectionObserver(
  sectionEl,
  ([entry], observer) => {
    if (entry.isIntersecting) {
      applyAnimation.value = true;
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0.4,
  }
);
</script>

<style scoped>
.basic-section {
  @apply text-[var(--text-color)];
}

/* normal -variant */
.basic-section--normal {
  --text-color: var(--primary-text-color);

  background-color: transparent;
}
/* colorful - variant */
.basic-section--colorful {
  --text-color: #f7eeff;
  --bg-color: var(--primary-gradient);

  background-image: var(--bg-color);
}

/* colorful - variant */
.basic-section--colorful-no-bg {
  --text-color: #f7eeff;
}
</style>
