<template>
  <Demo1UtilsBasicSection
    :content="{
      title: 'Search Courses',
      variant: 'normal',
    }"
  >
    <template #subtitle>
      <form
        action=""
        class="flex items-center gap-x-2 my-1 md:my-4 w-full md:w-[500px] md:mx-auto animate__animated opacity-0"
        :class="{
          animate__fadeInUp: applyAnimation,
        }"
      >
        <label
          for=""
          class="flex-1 flex items-center gap-x-1 pl-3 bg-white text-base rounded-lg"
        >
          <Icon
            name="mdi:magnify"
            class="text-2xl text-[var(--primary-accent-1)]"
          />
          <input
            type="text"
            placeholder="Search for over 50+ courses"
            class="w-full p-2 px-3 pl-1 outline-none"
          />
        </label>
        <Demo1UtilsButton title="Search" variant="full-gradient" />
      </form>
    </template>
    <main
      ref="contentEl"
      class="container mx-auto my-2 md:my-4 px-3 grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2 grid-col items-center"
    >
      <section
        class="animate__animated opacity-0"
        :class="{
          animate__fadeIn: applyAnimation,
        }"
      >
        <img
          src="/demo1/search-course-1.png"
          class="h-full max-h-[400px] w-full object-contain"
          alt=""
        />
      </section>
      <section class="flex flex-col gap-y-3">
        <header class="text-2xl font-bold">
          <span
            class="text-gradient animate__animated opacity-0"
            :class="{
              animate__fadeInDown: applyAnimation,
            }"
          >
            Benefits
          </span>
          <span
            class="animate__animated opacity-0"
            :class="{
              animate__fadeInDown: applyAnimation,
            }"
            :style="{
              animationDelay: '0.7s',
            }"
          >
            From Our Online Learning
          </span>
        </header>
        <ul class="flex flex-col gap-3">
          <li
            v-for="i in 4"
            class="flex items-center gap-x-[20px] md:gap-x-3 animate__animated"
          >
            <div
              class="inline-flex bg-[var(--primary-accent-1)] aspect-square p-3 rounded-full text-3xl text-white animate__animated opacity-0"
              :class="{
                animate__fadeInRight: applyAnimation,
              }"
              :style="{
                animationDelay: `${0.5 + 0.2 * i}s`,
              }"
            >
              <Icon name="mdi:home" />
            </div>
            <div>
              <h1
                class="font-semibold text-lg animate__animated opacity-0"
                :class="{
                  animate__fadeInUp: applyAnimation,
                }"
                :style="{
                  animationDelay: `${0.6 + 0.2 * i}s`,
                }"
              >
                Online Degrees
              </h1>
              <p
                class="line-clamp-2 text-sm animate__animated opacity-0 text-[rgba(var(--primary-text-color-rgb),0.6)]"
                :class="{
                  animate__fadeInDown: applyAnimation,
                }"
                :style="{
                  animationDelay: `${0.7 + 0.2 * i}s`,
                }"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                cumque doloribus unde iure iusto animi laboriosam libero
                accusantium autem illo
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </Demo1UtilsBasicSection>
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
