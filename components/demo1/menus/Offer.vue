<template>
  <section class="flex items-stretch gap-x-4">
    <div class="flex w-full justify-around gap-x-4">
      <ul class="flex gap-x-4">
        <li
          v-for="(plan, idx) in ['plan A', 'plan B', 'plan C']"
          :key="plan"
          class="bg-gradient-to-tl from-[rgba(var(--primary-accent-1-rgb),0.3)] p-4 rounded-3xl flex flex-col gap-y-2"
        >
          <h2
            class="capitalize text-lg font-semibold text-white bg-[var(--primary-accent-1)] w-fit px-2 rounded-full"
          >
            {{ plan }}
          </h2>
          <p
            class="line-clamp-2 text-[rgba(var(--primary-text-color-rgb),0.6)] text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            libero inventore repudiandae officiis tempore sequi
          </p>
          <div class="flex items-end">
            <h1 class="text-4xl font-semibold opacity-80">
              {{ 350 + idx * 75 }}$
            </h1>
            <span class="opacity-60">/month</span>
          </div>
          <hr class="border-[var(--primary-accent-1)] mask-fade-center" />
          <ul class="flex flex-col gap-y-1">
            <li
              v-for="i in 2 + Math.floor(Math.random() * 3)"
              class="flex items-center gap-x-1"
            >
              <Icon
                name="mdi:star-four-points"
                class="text-[var(--primary-accent-1)] text-lg"
              />
              <span class="text-[rgba(var(--primary-text-color-rgb),0.6)]">
                Lorem ipsum dolor sit amet.
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <img src="/demo1/search-course-1.png" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.mask-fade-center {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black,
    transparent
  );
  mask-image: linear-gradient(to right, transparent, black, transparent);
}
</style>
