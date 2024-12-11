<template>
  <div
    class="basic-section flex flex-col items-center justify-center py-[50px]"
    :class="[`basic-section--${props.content.variant}`]"
  >
    <header
      class="flex flex-col gap-3 container mx-auto max-w-[80dvw] md:max-w-[60dvw] text-center"
      :class="[props.headerClass]"
    >
      <h1 class="font-bold text-2xl">{{ content.title }}</h1>
      <slot name="subtitle">
        <p v-if="content.description" class="line-clamp-3" :class="[pClass]">
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
