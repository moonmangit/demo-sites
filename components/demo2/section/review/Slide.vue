<template>
  <swiper-slide>
    <div
      ref="thisEl"
      class="mt-10 bg-[rgba(var(--p-black-rgb),0.1)] rounded-xl flex flex-col md:flex-row container mx-auto opacity-0"
    >
      <section
        class="flex-1 p-8 px-4 md:px-8 pb-1 md:p-8 flex flex-col space-y-4"
      >
        <h1
          class="text-xl font-semibold animate__animated opacity-0"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: '0.5s',
          }"
        >
          {{ content.title }}
        </h1>
        <p
          class="max-w-full md:max-w-[50ch] line-clamp-4 animate__animated opacity-0"
          :class="{
            animate__fadeIn: applyAnimation,
          }"
          :style="{
            animationDelay: '0.5s',
          }"
        >
          {{ content.description }}
        </p>
        <button
          class="btn btn--green w-fit animate__animated opacity-0 duration-300"
          :class="{
            animate__fadeInDown: applyAnimation,
          }"
          :style="{
            animationDelay: '0.5s',
          }"
        >
          View case study
        </button>
        <p
          class="font-semibold md:!mt-auto animate__animated animate__faster"
          :class="{
            animate__fadeInUp: applyAnimation,
          }"
          :style="{
            animationDelay: '0.6s',
          }"
        >
          {{ content.author.name }} -
          <span class="font-normal opacity-60">{{
            content.author.position
          }}</span>
        </p>
      </section>

      <section class="w-full md:w-1/2 lg:w-2/5 p-3 t">
        <img
          :src="content.imageUrl"
          alt=""
          class="h-[min(250px,50dvh)] md:h-[min(450px,60dvh)] w-full object-cover rounded-xl"
        />
      </section>
    </div>
  </swiper-slide>
</template>

<script lang="ts" setup>
export interface ReviewSlideContent {
  title: string;
  description: string;
  author: {
    name: string;
    position: string;
  };
  imageUrl: string;
}

const props = defineProps<{
  content: ReviewSlideContent;
  active: boolean;
  direction: "left" | "right";
}>();

const thisEl = ref<HTMLElement | null>(null);
const applyAnimation = ref(false);
onMounted(() => {
  watch(
    () => props.active,
    () => {
      if (props.active && !applyAnimation.value) {
        thisEl.value?.classList.add(`clip-animate-from-top-${props.direction}`);
        applyAnimation.value = true;
        setTimeout(() => {
          thisEl.value?.querySelectorAll("*").forEach((el) => {
            if (el.classList.contains("animate__animated")) {
              el.classList.remove("animate__animated");
              el.classList.remove("opacity-0");
            }
          });
        }, 1500);
      }
      if (applyAnimation.value && !props.active) {
        thisEl.value?.classList.add("opacity-0");
        setTimeout(() => {
          thisEl.value?.classList.remove("clip-animate-from-top-left");
          thisEl.value?.classList.remove("clip-animate-from-top-right");
          applyAnimation.value = false;
        }, 500);
      }
    },
    {
      immediate: true,
    }
  );
});
</script>

<style scoped>
.clip-animate-from-top-right {
  animation: clipAnimationRight 1.5s ease forwards;
}
.clip-animate-from-top-left {
  animation: clipAnimationLeft 1.5s ease forwards;
}

@keyframes clipAnimationRight {
  0% {
    clip-path: circle(0% at 80% 20%);
    opacity: 0;
  }
  100% {
    clip-path: circle(150% at 80% 20%);
    opacity: 1;
  }
}

@keyframes clipAnimationLeft {
  0% {
    clip-path: circle(0% at 20% 20%);
    opacity: 0;
  }
  100% {
    clip-path: circle(150% at 20% 20%);
    opacity: 1;
  }
}
</style>
