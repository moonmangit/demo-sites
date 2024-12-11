<template>
  <Demo1UtilsBasicSection
    :content="{
      title: `Student's Testimonials`,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, molestiae tempora neque ad dicta animi repellendus placeat quis. Necessitatibus mollitia eaque laudantium quia a dolores veritatis blanditiis ipsam ex deleniti.',
      variant: 'colorful-no-bg',
    }"
  >
    <main
      ref="contentEl"
      class="w-[min(1000px,95dvw)] mx-auto pt-[40px] flex flex-col gap-y-8 items-center px-2 md:px-0"
    >
      <!-- list -->
      <ul
        class="flex flex-col md:flex-row gap-6 text-[var(--primary-text-color)]"
      >
        <!-- card -->
        <li
          v-for="c in 3"
          :key="c"
          class="bg-white rounded-lg p-5 space-y-2 animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: `${0.3 + c * 0.2}s`,
          }"
        >
          <header class="flex items-center gap-x-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              class="w-[50px] h-[50px] object-cover overflow-hidden rounded-full outline outline-[var(--primary-accent-1)] outline-2 outline-offset-2"
            />
            <section class="flex flex-col text-xs leading-3">
              <h1
                class="text-base text-[var(--primary-accent-1)] font-semibold"
              >
                Alexa Rodriguez
              </h1>
              <p class="opacity-60">Web Designer</p>
              <span class="text-[10px] text-yellow-500">
                <span
                  v-for="s in 5"
                  :key="s"
                  class="opacity-0 animate__animated"
                  :class="{
                    animate__bounceIn: applyAnimation,
                  }"
                  :style="{
                    animationDelay: `${0.7 + c * 0.2 + s * 0.1}s`,
                  }"
                >
                  <Icon name="mdi:star" />
                </span>
              </span>
            </section>
          </header>
          <main class="opacity-80 text-sm line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            nobis. Modi porro veniam expedita quidem, placeat ratione quos
            dolores et similique, at velit dolore eius nulla beatae, dolor fuga
            dignissimos!
          </main>
        </li>
      </ul>
      <!-- page -->
      <span
        class="opacity-0 animate__animated animate__delay-1s"
        :class="{
          animate__fadeInDown: applyAnimation,
        }"
      >
        <Icon name="mdi:chevron-left" />
        <span> 3/15 </span>
        <Icon name="mdi:chevron-right" />
      </span>
    </main>
  </Demo1UtilsBasicSection>
</template>

<script lang="ts" setup>
// AOS
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
    threshold: 0.1,
  }
);
</script>

<style></style>
