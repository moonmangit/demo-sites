<template>
  <div class="flex w-full justify-around gap-x-4">
    <ul
      v-for="(g, gi) in [
        'UX/UI Designed',
        'Programming',
        'Game Development',
        'Business',
      ]"
      class="flex justify-between"
    >
      <li class="flex flex-col gap-y-2">
        <header class="text-lg font-semibold flex items-center gap-x-1">
          {{ g }}
          <span
            v-if="gi === 0"
            class="bg-red-500/10 text-red-500 px-2 rounded-full capitalize text-sm flex items-center w-fit"
          >
            hot <Icon name="mdi:fire" />
          </span>
        </header>
        <ul class="flex flex-col gap-y-2">
          <li
            v-for="(i, idx) in [
              'mdi:chart-arc',
              'mdi:notebook-heart',
              'mdi:home-assistant',
              'mdi:gamepad',
            ]"
            :key="i"
            class="p-2 flex gap-x-2 items-center bg-transparent hover:bg-[rgba(var(--primary-accent-1-rgb),0.1)] duration-150 rounded-lg cursor-pointer"
          >
            <Icon :name="i" class="text-5xl bg-[var(--primary-accent-1)]" />
            <section>
              <h1 class="flex items-center gap-x-2">
                Header 1
                <span
                  v-if="idx === Math.floor((Math.random() * 100) % 4)"
                  class="text-sm flex items-center text-emerald-500 bg-emerald-500/10 px-2 rounded-full gap-x-1"
                >
                  <Icon name="mdi:tag-plus" />
                  New
                </span>
              </h1>
              <p class="text-sm text-[rgba(var(--primary-text-color-rgb),0.6)]">
                Lorem ipsum dolor sit amet.
              </p>
            </section>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
