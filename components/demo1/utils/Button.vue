<template>
  <button class="demo1-button" :class="[`demo1-button--${props.variant}`]">
    <slot>
      <p v-if="title">{{ title }}</p>
    </slot>
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string;
    variant?: "full-gradient" | "outline" | "white" | "ghost";
  }>(),
  {
    title: "Button",
    variant: "full-gradient",
  }
);
</script>

<style scoped>
.demo1-button {
  @apply flex flex-nowrap whitespace-nowrap items-center gap-x-1;
  @apply text-lg rounded-lg px-4 py-2;
}

/* variant */
.demo1-button--full-gradient {
  background-image: var(--primary-gradient);
  @apply text-[var(--primary-color)];
  @apply relative;
  &:hover {
    &::after {
      @apply opacity-60;
    }
  }
  &::after {
    @apply content-[''] absolute inset-0 blur-lg bg-transparent z-[-2] pointer-events-none duration-300;
    @apply opacity-0;
    background-image: var(--secondary-gradient);
  }
}
.demo1-button--outline {
  @apply border-2 duration-150;
  &:hover {
    @apply border-[var(--primary-accent-1)];
  }
}
.demo1-button--white {
  @apply bg-[var(--primary-color)] duration-150;

  &:hover {
    @apply shadow-xl shadow-[rgba(var(--primary-text-color-rgb),0.125)];
  }

  p {
    background-image: var(--primary-gradient);
    color: transparent;
    background-clip: text;
    @apply font-medium;
  }
}

.demo1-button--ghost {
}
</style>
