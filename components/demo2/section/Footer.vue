<template>
  <!-- footer -->
  <footer class="bg-[var(--p-black)] text-white section-container font-light">
    <main
      class="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10"
    >
      <div class="space-y-5">
        <h1 class="text-3xl">
          It's time to support zero pollution, <br />
          <span class="opacity-60">with renewable resources</span>
        </h1>
        <ul class="flex gap-4 flex-wrap whitespace-nowrap">
          <li v-for="i in 2" :key="i" class="flex items-center gap-x-2">
            <Icon name="mdi:check-circle" class="text-[var(--p-green)]" />
            <p class="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </div>

      <div class="space-y-3">
        <p class="line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          asperiores neque expedita molestias ipsam. In, quis, recusandae sit ad
          mollitia, nulla provident repellat incidunt sequi ea nemo! Maxime,
          suscipit! Harum?
        </p>
        <button class="btn btn--white">
          Get in touch
          <Icon name="mdi:arrow-top-right" />
        </button>
      </div>

      <div
        class="flex items-center justify-between flex-wrap col-span-full gap-5"
      >
        <!-- logo -->
        <section class="flex items-center gap-x-1 text-xl">
          <Icon name="fa6-brands:hive" class="text-[var(--p-green)]" />
          <h1 class="font-bold">Xurya</h1>
        </section>
        <!-- links -->
        <section>
          <ul class="flex gap-x-6 capitalize">
            <li
              v-for="(link, idx) in [
                'home',
                'about us',
                'features',
                'services',
                'contact',
              ]"
              :key="idx"
            >
              {{ link }}
            </li>
          </ul>
        </section>
        <!-- socials -->
        <section>
          <ul class="flex items-center gap-x-3">
            <li
              v-for="iconName in [
                'entypo-social:facebook-with-circle',
                'entypo-social:twitter-with-circle',
                'entypo-social:linkedin-with-circle',
              ]"
            >
              <Icon :name="iconName" class="text-3xl" />
            </li>
          </ul>
        </section>
      </div>

      <hr class="col-span-full opacity-20" />

      <div
        class="flex justify-between items-center col-span-full whitespace-nowrap flex-wrap gap-5"
      >
        <p>@ 2024 Xurya Inc. All rights reserved</p>
        <ul class="flex items-center gap-x-5">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </main>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
