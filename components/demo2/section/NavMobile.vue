<template>
  <div>
    <Transition name="content">
      <nav
        v-if="navStore.$state.active"
        class="fixed inset-0 bg-[var(--p-black)] text-white z-30 flex flex-col"
      >
        <header class="p-4 h-[72px] flex justify-between items-center">
          <section class="flex items-center gap-x-1 text-xl">
            <Icon
              name="fa6-brands:hive"
              class="text-[var(--p-green)] animate__animated animate__flip"
            />
            <h1 class="font-bold">Xurya</h1>
          </section>
          <button
            class="text-2xl p-2 flex animate__animated animate__rotateIn"
            @click.prevent="navStore.close"
          >
            <Icon name="mdi:close" />
          </button>
        </header>
        <main class="flex flex-col flex-1 gap-3">
          <a
            href=""
            v-for="(label, idx) in [
              'home',
              'about us',
              'features',
              'services',
              'contact',
            ]"
            :key="idx"
            class="p-5 text-2xl capitalize font-light animate__animated animate__fadeInDown"
            :style="{
              animationDelay: `${0.2 + idx * 0.1}s`,
            }"
            :class="{
              'bg-gradient-to-l from-[rgba(var(--p-green-rgb),0.4)] text-white':
                idx === 0,
            }"
          >
            {{ label }}
          </a>
          <div class="flex flex-wrap gap-2 px-4">
            <Demo2UtilButton
              title="Get in touch"
              class="animate__animated animate__fadeInUp"
              :style="{
                animationDelay: `${0.2 + 5 * 0.1}s`,
              }"
            />
            <Demo2UtilButton
              title="log in"
              variant="secondary"
              theme="dark"
              class="animate__animated animate__fadeInUp"
              :style="{
                animationDelay: `${0.2 + 6 * 0.1}s`,
              }"
            />
          </div>
        </main>
        <footer class="p-2 text-center text-white/40 font-light">
          All rights reserved &copy; {{ new Date().getFullYear() }}
        </footer>
      </nav>
    </Transition>
    <!-- backdrop -->

    <Transition name="backdrop">
      <div
        v-if="navStore.$state.active"
        class="fixed inset-0 bg-[rgba(var(--p-black-rgb),0.6)] z-[29]"
      ></div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const navStore = useMyDemo2NavStore();
</script>

<style scoped>
/* content - transition animation */
.content-enter-active,
.content-leave-active {
  @apply duration-700;
}
.content-enter-from,
.content-leave-to {
  clip-path: circle(0% at 110% -10%);
}
.content-enter-to,
.content-leave-from {
  clip-path: circle(170% at 110% -10%);
}

/* backdrop - transition animation */
.backdrop-enter-active,
.backdrop-leave-active {
  @apply duration-300;
}
.backdrop-enter-from,
.backdrop-leave-to {
  @apply opacity-0;
}
</style>
