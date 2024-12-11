<template>
  <div>
    <Transition name="nav">
      <nav
        v-if="nav.$state.active"
        ref="navEl"
        class="fixed inset-y-4 right-0 w-[min(80dvw,350px)] bg-gradient text-[var(--primary-accent-2)] z-40 overflow-y-auto overflow-hidden rounded-l-3xl"
      >
        <div class="flex flex-col h-full">
          <header class="flex justify-between items-center px-8 py-5">
            <h1 class="text-3xl font-semibold text-gradient">Etech.</h1>
            <button class="text-3xl" @click.prevent="nav.close">
              <Icon name="mdi:close" />
            </button>
          </header>
          <!-- fade divider -->
          <div
            class="w-full h-[2px] col-span-full bg-fade-center-gradient opacity-60"
          />

          <main class="flex-1">
            <ul class="text-2xl flex flex-col">
              <li
                v-for="(text, idx) in [
                  'Courses',
                  'Teachers',
                  'Offers',
                  'Contact',
                ]"
                :key="idx"
                class="flex items-center justify-between p-4 px-8 hover:bg-[var(--primary-accent-2)] hover:text-white cursor-pointer duration-150 animate__animated animate__fadeInUp"
                :style="{
                  animationDelay: `${idx * 100}ms`,
                }"
              >
                <span>{{ text }}</span>
                <Icon name="mdi:chevron-down" />
              </li>
            </ul>
            <div class="flex flex-col px-8 py-6 gap-y-2">
              <Demo1UtilsButton
                v-for="(text, idx) in ['Free Trial', 'Sign In']"
                :key="idx"
                :title="text"
                :variant="idx === 0 ? 'white' : 'full-gradient'"
                class="animate__animated animate__fadeInDown"
                :style="{
                  animationDelay: `${300 + (idx + 4) * 100}ms`,
                }"
              />
            </div>
          </main>
          <footer class="text-xs p-8 text-center">
            Copyright &copy; {{ new Date().getFullYear() }} Etech. All rights
            reserved.
          </footer>
        </div>
      </nav>
    </Transition>
    <!-- backdrop -->
    <Transition name="backdrop">
      <div
        v-if="nav.$state.active"
        class="fixed inset-0 bg-gradient-to-r from-[rgba(var(--primary-text-color-rgb),0.9)] to-[rgba(var(--primary-accent-2-rgb),0.6)] z-30"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const nav = useDemo1Nav();
const navEl = ref<HTMLElement | null>(null);
onClickOutside(navEl, () => nav.close());
</script>

<style scoped>
.bg-fade-center-gradient {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--primary-accent-2),
    transparent
  );
}

.text-gradient {
  background-image: linear-gradient(
    to bottom right,
    var(--primary-accent-1),
    var(--primary-accent-2)
  );
  color: transparent;
  background-clip: text;
}

.bg-gradient {
  background-image: linear-gradient(
    to right,
    var(--primary-text-color),
    rgba(0, 0, 0, 0.8)
  );
}

.backdrop-enter-active,
.backdrop-leave-active {
  @apply duration-300;
}
.backdrop-enter-from,
.backdrop-leave-to {
  @apply opacity-0;
}

.nav-enter-active,
.nav-leave-active {
  @apply duration-300;
}
.nav-enter-from,
.nav-leave-to {
  @apply translate-x-full;
}
</style>
