<template>
  <section ref="contentEl" class="section-container">
    <Demo2UtilDuotoneTitle
      title="See how we solve problems,"
      subtitle=" right on target"
      class="w-4/5 lg:w-1/2 mx-auto text-center !items-center"
      :apply-animation="applyAnimation"
    />
    <main
      class="mt-10 bg-[rgba(var(--p-black-rgb),0.1)] rounded-xl flex flex-col md:flex-row container mx-auto"
    >
      <section
        class="flex-1 p-8 px-4 md:px-8 pb-1 md:p-8 flex flex-col space-y-4"
      >
        <h1 class="text-xl font-semibold">Medtronic</h1>
        <p class="max-w-full md:max-w-[50ch] line-clamp-4">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          laudantium eos expedita obcaecati, quam corporis nesciunt nostrum
          molestias beatae minus nam odio, eius quo officiis nobis eaque commodi
          at nulla?"
        </p>
        <button class="btn btn--green w-fit">View case study</button>
        <p class="font-semibold md:!mt-auto">
          John Doe - <span class="font-normal opacity-60">CTO Medtronic</span>
        </p>
      </section>

      <section class="w-full md:w-1/2 lg:w-2/5 p-3">
        <img
          src="https://images.unsplash.com/photo-1447433865958-f402f562b843?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="h-[min(250px,50dvh)] md:h-[min(450px,60dvh)] w-full object-cover rounded-xl"
        />
      </section>
    </main>

    <footer class="mt-4 flex justify-center">
      <ul class="flex gap-x-4">
        <li v-for="i in 3" :key="i" class="flex-1 min-w-[200px] space-y-2">
          <!-- bar -->
          <div class="h-[4px] w-ull bg-[rgba(var(--p-black-rgb),0.1)] relative">
            <span
              class="absolute inset-y-0 left-0 w-1/2 bg-[var(--p-green)]"
            ></span>
          </div>
          <!-- text -->
          <p class="truncate flex items-center gap-x-1">
            <Icon name="mdi:power-plug-battery" />
            <span>Lorem ipsum dolor sit amet.</span>
          </p>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script lang="ts" setup>
const contentEl = ref<HTMLElement | null>(null);
const { applyAnimation } = useApplyAnimation(contentEl, {
  threshold: 0.2,
  clearAnimationAfterMs: 2000,
});
</script>

<style></style>
