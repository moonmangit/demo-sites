<template>
  <div id="demo2" class="font-demo2-sans">
    <nav
      class="fixed top-0 inset-x-0 container mx-auto flex justify-between text-[var(--p-gray)]"
    >
      <section>XENON</section>
      <ul class="flex gap-x-2">
        <li v-for="i in 6" :key="i">link1</li>
      </ul>
      <section>apply</section>
    </nav>
    <!-- hero -->
    <section
      class="lg:h-[80dvh] bg-gradient-to-br from-[var(--p-dark)] to-[rgba(var(--p-dark-rgb),0.9)] text-[var(--p-gray)] rounded-bl-[100px]"
    >
      <div
        class="container mx-auto pt-[100px] px-4 h-full flex flex-col lg:grid grid-rows-[max-content_1fr_max-content] grid-cols-[2fr_max-content_1fr] gap-3 lg:gap-5"
      >
        <!-- title -->
        <section
          class="font-demo2-serif col-span-1 lg:col-span-full text-4xl lg:text-6xl capitalize"
        >
          <div>
            Unlock your <b>business</b>
            <Icon
              name="ion:logo-apple-ar"
              class="hidden lg:inline-flex text-[var(--p-green)] ml-3"
            />
            <br />

            potential with Xenon Bank
          </div>
        </section>
        <!-- description -->
        <section class="space-y-5 lg:space-y-10">
          <p class="line-clamp-4 opacity-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            illum quam officia accusantium dolorem quas impedit, quis modi quos
            corporis dignissimos facere.
          </p>
          <button
            class="text-[var(--p-dark)] rounded-xl bg-white p-1 flex items-center uppercase border-2 border-[var(--p-green)]"
          >
            <div
              class="bg-[var(--p-green)] p-3 px-5 font-semibold rounded-[10px]"
            >
              apply now
            </div>
            <Icon name="mdi:arrow-right" class="text-xl mx-3" />
          </button>
        </section>
        <!-- award -->
        <section class="hidden lg:flex items-center pb-[70px] gap-x-3">
          <div class="text-yellow-200 text-5xl flex items-center">
            <Icon name="game-icons:laurels-trophy" />
          </div>
          <div class="text-lg">
            <h1>2025 the world's</h1>
            <p>best digital banks</p>
          </div>
        </section>
        <!-- image -->
        <section
          class="relative w-fit row-span-2 row-start-2 col-start-2 flex items-end mx-auto order-[1]"
        >
          <img
            src="/demo2/hero-1.png"
            class="w-full h-full relative z-10"
            alt=""
          />
          <div
            class="absolute inset-10 rounded-t-[50px] bottom-0 top-7 bg-[var(--p-green)] overflow-hidden mask-grad-to-top"
          >
            <div
              class="absolute inset-0 bg-[url('/demo2/tt-rock.png')] mix-blend-exclusion"
            ></div>
          </div>
        </section>
        <!-- user -->
        <section
          class="row-start-2 col-start-3 row-span-2 relative my-4 lg:mt-[60px] lg:mb-[50px] flex flex-col"
        >
          <ul class="flex flex-col gap-y-6 relative">
            <li class="flex items-center gap-x-5">
              <span
                class="w-3 h-3 bg-[var(--p-green)] rounded-full flex z-10"
              ></span>
              <p>
                Fast, easy loan <br />
                application
              </p>
            </li>
            <li class="flex items-center gap-x-5">
              <span
                class="w-3 h-3 bg-[var(--p-green)] rounded-full flex z-10"
              ></span>
              <p>
                Flexible repayment <br />
                options
              </p>
            </li>
            <li class="flex items-center gap-x-5">
              <span
                class="w-3 h-3 bg-[var(--p-green)] rounded-full flex z-10"
              ></span>
              <p>
                Competitive interest <br />
                rates
              </p>
            </li>
          </ul>
          <div class="flex items-center">
            <section class="flex">
              <img
                v-for="i in 3"
                :key="i"
                class="w-10 h-10 object-cover rounded-full border-2 border-[var(--p-dark)]"
                :class="{
                  'ml-[-10px]': i > 1,
                }"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </section>
            <section>
              <h1 class="text-xl">12M</h1>
              <p class="opacity-40">Active users</p>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
#demo2 {
  --p-green: #1ad079;
  --p-green-rgb: 26, 208, 121;
  --p-dark: #0a081b;
  --p-dark-rgb: 10, 8, 27;
  --p-gray: #f6f8fb;
  --p-gray-rgb: 246, 248, 251;
}

.mask-grad-to-top {
  -webkit-mask-image: linear-gradient(to top, transparent, black 60%);
  mask-image: linear-gradient(to top, transparent, black 60%);
}
.mask-grad-to-b {
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 60%);
  mask-image: linear-gradient(to bottom, transparent, black 60%);
}
.mask-grad-to-r {
  -webkit-mask-image: linear-gradient(to right, transparent, black);
  mask-image: linear-gradient(to right, transparent, black);
}
</style>
