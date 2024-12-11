<template>
  <section
    class="container mx-auto flex flex-row items-center justify-center py-[30px] md:py-[70px]"
  >
    <main class="flex flex-col md:flex-row justify-center items-center gap-8">
      <!-- left -->
      <div class="space-y-4 px-4">
        <section>
          <h1 class="text-2xl font-bold">
            If You Are A Certified Teacher <br />
            Then
            <span class="text-gradient">Become An Instructor</span>
          </h1>
          <p class="max-w-[60ch] opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            beatae molestias dignissimos rerum vel harum, fugit autem, tempore
            rem similique dolores cumque voluptate sint, nemo et veniam eum.
            Beatae, porro!
          </p>
        </section>
        <section>
          <h1 class="text-2xl font-bold">Enjoy Many Perks</h1>
          <ul class="grid grid-cols-2 w-fit gap-x-8">
            <li v-for="i in 8" :key="i" class="flex items-center gap-x-2">
              <span
                class="w-2 h-2 bg-[var(--primary-accent-1)] flex rounded-full"
              />
              <p>Global Impact</p>
            </li>
          </ul>
        </section>
        <Demo1UtilsButton title="Become an Instructor" />
      </div>
      <!-- right -->
      <div class="w-2/3 flex justify-center">
        <img src="/demo1/teacher-1.png" alt="" />
      </div>
    </main>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.text-gradient {
  background-image: var(--primary-gradient);
  color: transparent;
  background-clip: text;
}
</style>
