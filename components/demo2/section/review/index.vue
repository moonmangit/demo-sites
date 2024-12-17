<template>
  <section ref="contentEl" class="section-container">
    <Demo2UtilDuotoneTitle
      title="See how we solve problems,"
      subtitle=" right on target"
      class="w-4/5 lg:w-1/2 mx-auto text-center !items-center"
      :apply-animation="applyAnimation"
    />

    <swiper-container ref="swiperContainerRef" :space-between="30">
      <Demo2SectionReviewSlide
        v-for="(slideContent, idx) in slideContents"
        :key="slideContent.id"
        :content="slideContent"
        :active="activeSlideIndex === idx && active"
        :direction="slideDirection"
      />
    </swiper-container>

    <footer class="mt-4 flex justify-center">
      <Demo2SectionReviewTimerSlides
        :contents="slideContents"
        :active-index="active ? activeSlideIndex : -1"
        @timeout="handleTimeout"
        @change-slide="handleChangeSlide"
      />
    </footer>
  </section>
</template>

<script lang="ts" setup>
import type { ReviewSlideContent } from "./Slide.vue";

const active = ref(false);

// slides
const swiperContainerRef = ref<any>(null);
const swiper = useSwiper(swiperContainerRef);
const activeSlideIndex = ref(0);
const slideDirection = ref<"left" | "right">("left");
function handleTimeout(index: number) {
  if (index !== slideContents.length - 1) {
    swiper.instance.value?.slideTo(index + 1);
  } else {
    swiper.instance.value?.slideTo(0);
  }
}
function handleChangeSlide(index: number) {
  swiper.instance.value?.slideTo(index);
}
onMounted(() => {
  activeSlideIndex.value = swiper.instance.value?.activeIndex ?? 0;
  swiper.instance.value?.on("slideChange", (e) => {
    activeSlideIndex.value = e.activeIndex;
  });
  swiper.instance.value?.on("slideNextTransitionStart", () => {
    slideDirection.value = "right";
  });
  swiper.instance.value?.on("slidePrevTransitionStart", () => {
    slideDirection.value = "left";
  });
});
export type SlideContent = ReviewSlideContent & {
  id: number;
  iconName: string;
};
const slideContents: (ReviewSlideContent & { id: number; iconName: string })[] =
  [
    {
      id: 1,
      title: "Medtronic Schuppe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus quae iusto nobis tenetur repellat? Numquam nostrum exercitationem ullam ea debitis delectus deserunt rerum, illum et, asperiores esse, dicta fugit?",
      imageUrl:
        "https://images.unsplash.com/photo-1447433865958-f402f562b843?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconName: "mdi:power-plug-battery",
      author: {
        name: "Flora Nichols",
        position: "berhupwa@agwalo.cl",
      },
    },
    {
      id: 2,
      title: "Reynolds Ondricka",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus quae iusto nobis tenetur repellat? Numquam nostrum exercitationem ullam ea debitis delectus deserunt rerum, illum et, asperiores esse, dicta fugit?",
      imageUrl:
        "https://images.unsplash.com/photo-1660330589257-813305a4a383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconName: "mdi:light-flood-down",
      author: {
        name: "Mittie Fernandez",
        position: "ti@ko.uz",
      },
    },
    {
      id: 3,
      title: "Murray Inc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus quae iusto nobis tenetur repellat? Numquam nostrum exercitationem ullam ea debitis delectus deserunt rerum, illum et, asperiores esse, dicta fugit?",
      imageUrl:
        "https://images.unsplash.com/photo-1649441249380-2035c4ee9061?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconName: "mdi:sun-angle",
      author: {
        name: "Vincent King",
        position: "ba@zo.bv",
      },
    },
    {
      id: 4,
      title: "Blanda, Jast and Dare",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus quae iusto nobis tenetur repellat? Numquam nostrum exercitationem ullam ea debitis delectus deserunt rerum, illum et, asperiores esse, dicta fugit?",
      imageUrl:
        "https://images.unsplash.com/photo-1649441249380-2035c4ee9061?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconName: "mdi:solar-panel",
      author: {
        name: "Vincent King",
        position: "ba@zo.bv",
      },
    },
  ];

const contentEl = ref<HTMLElement | null>(null);
useIntersectionObserver(
  contentEl,
  ([entry], observer) => {
    if (entry.isIntersecting) {
      active.value = true;
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0.2,
  }
);
const { applyAnimation } = useApplyAnimation(contentEl, {
  threshold: 0.2,
  clearAnimationAfterMs: 2000,
});
</script>

<style></style>
