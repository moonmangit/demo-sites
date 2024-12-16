<template>
  <div>
    <ul
      class="flex gap-4 items-center duration-300"
      :style="{
        transform: `translateX(${INIT_PORTION - PORTION * activeIndex}%)`,
      }"
    >
      <Demo2SectionReviewTimerSlide
        v-for="(ctn, idx) in contents"
        ref="timerSlideEls"
        :key="ctn.id"
        :content="ctn"
        :active="activeIndex === idx"
        @timeout="$emit('timeout', idx)"
        @click.prevent="$emit('changeSlide', idx)"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { SlideContent } from "./index.vue";
import TimerSlide from "@/components/demo2/section/review/TimerSlide.vue";

const props = defineProps<{
  contents: SlideContent[];
  activeIndex: number;
}>();

const PORTION = (1 / props.contents.length) * 100;
const INIT_PORTION = (props.contents.length / 2 - 0.5) * PORTION;
function getPortion() {
  return INIT_PORTION - PORTION * props.activeIndex;
}

const emits = defineEmits<{
  (e: "timeout", index: number): void;
  (e: "changeSlide", index: number): void;
}>();

const timerSlideEls = ref<InstanceType<typeof TimerSlide>[]>([]);

onMounted(() => {
  watch(
    () => props.activeIndex,
    () => {
      timerSlideEls.value.forEach((el, idx) => {
        if (idx === props.activeIndex) {
          el.startTimer();
        } else {
          el.resetTimer();
        }
      });
    },
    {
      immediate: true,
    }
  );
});
</script>

<style></style>
