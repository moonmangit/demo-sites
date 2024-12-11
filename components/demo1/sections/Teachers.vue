<template>
  <section
    class="container mx-auto flex flex-row items-center justify-center py-[30px] md:py-[70px]"
  >
    <main
      ref="contentEl"
      class="flex flex-col md:flex-row justify-center items-center gap-8"
    >
      <!-- left -->
      <div class="space-y-4 px-4">
        <section>
          <h1 class="text-2xl font-bold">
            <span
              class="animate__animated opacity-0 animate__delay-1s"
              :class="{
                animate__fadeIn: applyAnimation,
              }"
            >
              If You Are A Certified Teacher <br />
              Then
            </span>
            <span
              class="text-gradient animate__animated opacity-0"
              :class="{
                animate__fadeIn: applyAnimation,
              }"
            >
              Become An Instructor
            </span>
          </h1>
          <p
            class="max-w-[60ch] text-[rgba(var(--primary-text-color-rgb),0.6)] opacity-0 animate__animated animate__delay-1s"
            :class="{
              animate__fadeIn: applyAnimation,
            }"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            beatae molestias dignissimos rerum vel harum, fugit autem, tempore
            rem similique dolores cumque voluptate sint, nemo et veniam eum.
            Beatae, porro!
          </p>
        </section>
        <section>
          <h1
            class="text-2xl font-bold opacity-0 animate__animated animate__delay-1s"
            :class="{ animate__fadeInDown: applyAnimation }"
          >
            Enjoy Many Perks
          </h1>
          <ul class="grid grid-cols-2 w-fit gap-x-8">
            <li
              v-for="i in 8"
              :key="i"
              class="flex items-center gap-x-2 animate__animated opacity-0"
              :class="{
                animate__fadeInUp: applyAnimation,
              }"
              :style="{
                animationDelay: `${1 + i * 0.1}s`,
              }"
            >
              <span
                class="w-2 h-2 bg-[var(--primary-accent-1)] flex rounded-full"
              />
              <p>Global Impact</p>
            </li>
          </ul>
        </section>
        <Demo1UtilsButton
          title="Become an Instructor"
          class="animate__animated opacity-0"
          :style="{
            animationDelay: '1.5s',
          }"
          :class="{ animate__bounceIn: applyAnimation }"
        />
      </div>
      <!-- right -->
      <div
        class="w-2/3 flex justify-center animate__animated opacity-0"
        :class="{
          animate__fadeIn: applyAnimation,
        }"
      >
        <img src="/demo1/teacher-1.png" alt="" />
      </div>
    </main>
  </section>
</template>

<script lang="ts" setup>
const applyAnimation = ref(false);

const contentEl = ref<HTMLElement | null>(null);
useIntersectionObserver(
  contentEl,
  ([entry], observer) => {
    if (entry.isIntersecting) {
      applyAnimation.value = true;
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0.5,
  }
);
</script>

<style scoped>
.text-gradient {
  background-image: var(--primary-gradient);
  color: transparent;
  background-clip: text;
}
</style>
