<template>
  <button
    class="demo2-button"
    :class="[
      {
        'flex-row': iconPosition === 'right',
        'flex-row-reverse': iconPosition === 'left',
      },
      variant,
      theme,
    ]"
  >
    <p>{{ title }}</p>
    <Icon v-if="iconName" :name="iconName" />
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    iconName?: string | null;
    iconPosition?: "left" | "right";
    variant?: "primary" | "secondary";
    theme?: "light" | "dark";
  }>(),
  {
    iconPosition: "right",
    iconName: null,
    variant: "primary",
    theme: "light",
  }
);
</script>

<style scoped>
.demo2-button {
  @apply flex items-center justify-center gap-x-2 p-3 px-4 rounded-full duration-150;

  /* variants */
  /* "primary" : BGs green */
  &.primary {
    @apply bg-[var(--p-green)] border border-transparent;
    &:hover {
      @apply bg-[var(--p-black)] !text-[var(--p-green)] border-[var(--p-green)];
    }

    /* sub variant */
    &.dark {
      @apply text-[var(--p-black)];
    }
    &.light {
      @apply text-white;
    }
  }
  /* "secondary" : BGs transparent */
  &.secondary {
    --primary-color: var(--p-black-rgb);
    --secondary-color: 255, 255, 255;

    @apply bg-transparent border border-[rgba(var(--primary-color),0.2)] text-[rgb(var(var(--primary-color)))];

    &:hover {
      @apply bg-[rgba(var(--primary-color),1)] text-[rgb(var(--secondary-color))] border-[rgba(var(--primary-color),1)];
    }
    /* sub variant */
    &.light {
      --primary-color: var(--p-black-rgb);
      --secondary-color: 255, 255, 255;
    }
    &.dark {
      --primary-color: 255, 255, 255;
      --secondary-color: var(--p-black-rgb);
    }
  }
}
</style>
