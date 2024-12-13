<template>
  <ul
    class="flex flex-wrap items-center justify-center container mx-auto gap-3 pb-[50px]"
  >
    <li
      v-for="i in 5"
      :key="i"
      class="min-w-[200px] max-w-[200px] flex-1 flex justify-center items-center rounded-full aspect-square bg-[rgba(var(--p-black-rgb),0.08)] hover:bg-white hover:text-[var(--p-green)] duration-200 border border-transparent hover:border-[rgba(var(--p-black-rgb),0.2)] hover:shadow-xl hover:-translate-y-4 cursor-pointer"
    >
      <Icon name="fa6-brands:aviato" class="text-[80px]" />
    </li>
  </ul>
</template>

<script lang="ts" setup></script>

<style></style>
