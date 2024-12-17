<template>
  <Teleport to="#__nuxt">
    <div
      ref="thisEl"
      class="bg-white sticky top-0 z-10 duration-300"
      :class="{
        '!bg-[var(--p-black)] text-white': isAdapt,
      }"
    >
      <nav class="container mx-auto flex justify-between items-center p-4">
        <!-- logo -->
        <section class="flex items-center gap-x-1 text-xl">
          <Icon
            name="fa6-brands:hive"
            class="text-[var(--p-green)] animate__animated animate__fadeInDown"
            :style="{ animationDelay: `${BASE_ANIMATE_DELAY_SEC}s` }"
          />
          <h1
            class="font-bold animate__animated animate__fadeInRight"
            :style="{ animationDelay: `${BASE_ANIMATE_DELAY_SEC}s` }"
          >
            Xurya
          </h1>
        </section>
        <!-- links -->
        <section class="hidden lg:block group relative">
          <ul class="flex gap-x-6 capitalize">
            <li
              v-for="(link, idx) in [
                'home',
                'about us',
                'features',
                'services',
                'contact',
              ]"
              ref="linkEls"
              class="text-[rgb(var(--p-black-rgb),0.8)] animate__animated animate__fadeInUp duration-150 cursor-pointer"
              :key="idx"
              :class="{
                'text-[rgba(var(--p-black-rgb),1.0)] group-hover:text-[rgba(var(--p-black-rgb),0.4)] hover:!text-[rgba(var(--p-black-rgb),1.0)]':
                  !isAdapt,
                'text-white group-hover:text-white/40 hover:!text-white':
                  isAdapt,
              }"
              :style="{
                animationDelay: `${
                  BASE_ANIMATE_DELAY_SEC + Math.abs(3 - (idx + 1)) * 0.1
                }s`,
              }"
              @mouseenter="mouseOverLink(idx)"
              @mouseleave="mouseLeaveLink"
            >
              {{ link }}
            </li>
          </ul>
          <span
            ref="runnerEl"
            class="w-3 h-3 bg-[var(--p-green)] flex absolute top-full rounded-full pointer-events-none duration-300"
            :class="{
              'opacity-0 scale-0': runnerHoverIndex === -1,
            }"
          />
        </section>
        <!-- actions -->
        <section class="hidden lg:flex gap-x-2">
          <Demo2UtilButton
            title="Log in"
            variant="secondary"
            :theme="isAdapt ? 'dark' : 'light'"
            class="animate__animated animate__fadeInDown"
          />
          <Demo2UtilButton
            title="Get in touch"
            class="animate__animated animate__fadeInDown"
            :style="{ animationDelay: `${BASE_ANIMATE_DELAY_SEC + 0.3}s` }"
            icon-name="mdi:arrow-top-right"
          />
        </section>
        <!-- mobile nav toggler  -->
        <button
          @click.prevent="navStore.open"
          class="text-2xl flex lg:hidden text-[rgba(var(--p-black-rgb),0.6)] p-2 rounded-xl animate__animated animate__fadeInLeft duration-300"
          :style="{ animationDelay: `${BASE_ANIMATE_DELAY_SEC}s` }"
          :class="{
            '!text-white': isAdapt,
          }"
        >
          <Icon name="mdi:menu" />
        </button>
      </nav>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const BASE_ANIMATE_DELAY_SEC = 0.3;

const navStore = useMyDemo2NavStore();

// link runner
const linkEls = ref<HTMLElement[]>([]);
const runnerEl = ref<HTMLElement | null>(null);
const runnerHoverIndex = ref(-1);
const runnerTimeout = ref<NodeJS.Timeout | null>(null);
function mouseOverLink(idx: number) {
  if (runnerTimeout.value) {
    clearTimeout(runnerTimeout.value);
    runnerTimeout.value = null;
  }
  runnerHoverIndex.value = idx;
  // move runner to center of the link
  const linkEl = linkEls.value[idx];
  runnerEl.value!.style.left = `${
    linkEl.offsetLeft + linkEl.offsetWidth / 2 - runnerEl.value!.offsetWidth / 2
  }px`;
}
function mouseLeaveLink() {
  runnerTimeout.value = setTimeout(() => {
    runnerHoverIndex.value = -1;
  }, 200);
}

// clear animation after a time
const thisEl = ref<HTMLElement | null>(null);
onMounted(() => {
  setTimeout(() => {
    thisEl.value?.querySelectorAll(".animate__animated").forEach((el) => {
      // remove related animation class like "animate__fadeInDown" and "animate__animated"
      // filter out
      const classes = el.className
        .split(" ")
        .filter((c) => !c.startsWith("animate__"));
      el.className = classes.join(" ");
    });
  }, 2000);
});

// scroll adaptive nav
const isAdapt = ref(false);
const { y } = useScroll(window, {
  onScroll() {
    isAdapt.value = y.value > 200;
  },
});
</script>

<style></style>
