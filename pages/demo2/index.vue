<template>
  <div
    id="demo2"
    class="font-demo2-sans w-screen h-screen overflow-y-auto overflow-x-hidden text-[rgba(var(--p-black-rgb),0.9)]"
  >
    <!-- nav -->
    <nav
      class="container mx-auto flex justify-between items-center p-4 :py-4 sticky top-0 z-10 bg-white"
    >
      <!-- logo -->
      <section class="flex items-center gap-x-1 text-xl">
        <Icon name="fa6-brands:hive" class="text-[var(--p-green)]" />
        <h1 class="font-bold">Xurya</h1>
      </section>
      <!-- links -->
      <section class="hidden lg:block">
        <ul class="flex gap-x-6 capitalize">
          <li
            v-for="(link, idx) in [
              'home',
              'about us',
              'features',
              'services',
              'contact',
            ]"
            :key="idx"
            class="text-[rgb(var(--p-black-rgb),0.8)]"
          >
            {{ link }}
          </li>
        </ul>
      </section>
      <!-- actions -->
      <section class="hidden lg:flex gap-x-2">
        <button class="btn btn--white-border">Log in</button>
        <button class="btn btn--green">Get in touch</button>
      </section>
      <!-- mobile nav toggler  -->
      <button
        class="text-2xl flex lg:hidden text-[rgba(var(--p-black-rgb),0.6)] p-2 rounded-xl"
      >
        <Icon name="mdi:menu" />
      </button>
    </nav>
    <!--hero -->
    <section class="h-[90dvh] duration-300 p-4 container mx-auto">
      <div class="hero relative w-full h-full">
        <div class="relative w-full h-full rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1615630859219-0459703c34e6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-gray-800/90"
          ></div>
        </div>
        <!-- title -->
        <section
          class="absolute inset-y-0 left-0 text-white flex flex-col justify-start lg:justify-center p-8 px-8 lg:px-10"
        >
          <p class="font-light">1# Energy provider in the world</p>
          <h1
            class="text-3xl md:text-5xl lg:text-7xl my-5 md:my-10 line-clamp-2"
          >
            <b class="text-gradient">New Energy</b> <br />
            for the Future
          </h1>
          <ul class="flex gap-x-10 gap-y-5 whitespace-nowrap flex-wrap text-sm">
            <li class="flex items-center gap-x-2 border-b border-white pb-2">
              Get in touch <Icon name="mdi:arrow-top-right" />
            </li>
            <li class="flex items-center gap-x-2 border-b border-white pb-2">
              Our services <Icon name="mdi:arrow-top-right" />
            </li>
          </ul>
        </section>
        <!-- main info -->
        <section
          class="bg-white absolute bottom-0 right-0 w-full lg:w-max rounded-tl-3xl duration-1000 translate-x-0"
        >
          <main
            class="flex items-center justify-evenly flex-wrap flex-row h-full px-[30px] lg:px-[50px] gap-x-3 lg:gap-x-[40px] border border-white rounded-t-3xl"
          >
            <div
              v-for="label in ['6 mil', '315', '120K']"
              :key="label"
              class="flex flex-col gap-y-1 py-[15px] md:py-[25px] flex-1 min-w-fit"
            >
              <h1 class="text-2xl lg:text-4xl">{{ label }}</h1>
              <p class="line-clamp-2 text-sm max-w-[20ch]">
                The company's annual net income
              </p>
            </div>
          </main>
          <!-- curved -->
          <svg
            fill="white"
            width="30"
            height="30"
            class="absolute rotate-180 scale-y-[-1] right-[calc(100%-1px)] bottom-0"
          >
            <path d="M 0 0 V 30 H 30 Q 0 30 0 0 Z"></path>
          </svg>
          <svg
            fill="white"
            width="30"
            height="30"
            class="absolute right-0 bottom-full rotate-180 scale-y-[-1]"
          >
            <path d="M 0 0 V 30 H 30 Q 0 30 0 0 Z"></path>
          </svg>
        </section>
      </div>
    </section>
    <!-- slogan -->
    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-8 gap-x-4 py-10"
    >
      <h1 class="text-3xl line-clamp-2 section-title">
        Focusing on quality,
        <span class="sub"> we maintain customer trust </span>
      </h1>
      <p class="line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        ipsa nam a saepe rerum cum, officia neque eaque magni assumenda vitae
        laboriosam. Totam sapiente accusamus sunt molestias quo quae.
      </p>
    </section>
    <!-- partner -->
    <ul
      class="flex flex-wrap items-center justify-center container mx-auto gap-3 pb-[50px]"
    >
      <li
        v-for="i in 5"
        :key="i"
        class="min-w-[200px] max-w-[200px] flex-1 flex justify-center items-center rounded-full aspect-square bg-[rgba(var(--p-black-rgb),0.08)] hover:bg-white hover:text-[var(--p-green)] duration-200 border border-transparent hover:border-[rgba(var(--p-black-rgb),0.2)] hover:shadow-xl hover:-translate-y-4 cursor-pointer"
      >
        <Icon name="fa6-brands:aviato" class="text-[80px]" />
      </li>
    </ul>
    <!-- offers -->
    <section
      class="section-container bg-[rgba(var(--p-black-rgb),0.05)] space-y-6"
    >
      <h1 class="text-center text-3xl w-4/5 lg:w-1/2 mx-auto section-title">
        We offer quality,
        <span class="sub"> with the best materials and service </span>
      </h1>
      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl border border-[rgba(var(--p-black-rgb),0.2)] container mx-auto"
      >
        <li
          v-for="i in 6"
          :key="i"
          class="p-5 flex flex-col gap-y-2"
          :class="{
            'border-b': i + (1 % 3) !== 0,
            'border-r': i % 3 !== 0,
          }"
        >
          <div
            class="flex border border-[rgba(var(--p-black-rgb),0.08)] w-fit p-1 rounded-lg shadow-xl"
          >
            <Icon
              name="material-symbols:stacks-rounded"
              class="text-[var(--p-green)] text-3xl"
            />
          </div>
          <h1 class="text-xl font-medium">Layered Security</h1>
          <p class="line-clamp-2 text-sm opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, atque
            accusamus accusantium perspiciatis repudiandae sed vitae ipsam dicta
            omnis dolore veniam nisi quaerat recusandae dolorum at id. Libero,
            quibusdam repellat!
          </p>
        </li>
      </ul>
    </section>
    <!-- service -->
    <section class="section-container">
      <main
        class="container mx-auto flex flex-col lg:grid grid-cols-2 gap-[25px] lg:gap-[50px]"
      >
        <section class="space-y-4">
          <h1 class="section-title">
            Trusted service,
            <span class="sub"> for your various needs </span>
          </h1>
          <button class="btn btn--green">
            Get in touch
            <Icon name="mdi:arrow-top-right" />
          </button>
        </section>
        <ul class="grid grid-cols-2 gap-3">
          <li
            v-for="i in 4"
            :key="i"
            class="border flex flex-col p-4 rounded-xl"
          >
            <h2 class="opacity-60">{{ i.toString().padStart(2, "0") }}</h2>
            <h1 class="text-lg flex-1 flex items-center leading-5">
              Solar panels for home
            </h1>
            <a href="" class="underline text-sm">View Details</a>
          </li>
        </ul>
        <section class="col-start-2 row-start-1 row-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661952328751-a958e0a1f7fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-full h-[min(350px,55dvh)] md:h-[min(650px,55dvh)] object-cover rounded-3xl"
          />
        </section>
      </main>
    </section>
    <!-- review -->
    <section class="section-container">
      <header class="section-title text-center mx-auto">
        See how we solve problems,
        <span class="sub"> right on target </span>
      </header>
      <main
        class="mt-10 bg-[rgba(var(--p-black-rgb),0.1)] rounded-xl flex flex-col md:flex-row container mx-auto"
      >
        <section
          class="flex-1 p-8 px-4 md:px-8 pb-1 md:p-8 flex flex-col space-y-4"
        >
          <h1 class="text-xl font-semibold">Medtronic</h1>
          <p class="max-w-full md:max-w-[50ch] line-clamp-4">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates laudantium eos expedita obcaecati, quam corporis nesciunt
            nostrum molestias beatae minus nam odio, eius quo officiis nobis
            eaque commodi at nulla?"
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
            <div
              class="h-[4px] w-ull bg-[rgba(var(--p-black-rgb),0.1)] relative"
            >
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
    <!-- footer -->
    <footer class="bg-[var(--p-black)] text-white section-container font-light">
      <main
        class="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10"
      >
        <div class="space-y-5">
          <h1 class="text-3xl">
            It's time to support zero pollution, <br />
            <span class="opacity-60">with renewable resources</span>
          </h1>
          <ul class="flex gap-4 flex-wrap whitespace-nowrap">
            <li v-for="i in 2" :key="i" class="flex items-center gap-x-2">
              <Icon name="mdi:check-circle" class="text-[var(--p-green)]" />
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>

        <div class="space-y-3">
          <p class="line-clamp-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus asperiores neque expedita molestias ipsam. In, quis,
            recusandae sit ad mollitia, nulla provident repellat incidunt sequi
            ea nemo! Maxime, suscipit! Harum?
          </p>
          <button class="btn btn--white">
            Get in touch
            <Icon name="mdi:arrow-top-right" />
          </button>
        </div>

        <div
          class="flex items-center justify-between flex-wrap col-span-full gap-5"
        >
          <!-- logo -->
          <section class="flex items-center gap-x-1 text-xl">
            <Icon name="fa6-brands:hive" class="text-[var(--p-green)]" />
            <h1 class="font-bold">Xurya</h1>
          </section>
          <!-- links -->
          <section>
            <ul class="flex gap-x-6 capitalize">
              <li
                v-for="(link, idx) in [
                  'home',
                  'about us',
                  'features',
                  'services',
                  'contact',
                ]"
                :key="idx"
              >
                {{ link }}
              </li>
            </ul>
          </section>
          <!-- socials -->
          <section>
            <ul class="flex items-center gap-x-3">
              <li
                v-for="iconName in [
                  'entypo-social:facebook-with-circle',
                  'entypo-social:twitter-with-circle',
                  'entypo-social:linkedin-with-circle',
                ]"
              >
                <Icon :name="iconName" class="text-3xl" />
              </li>
            </ul>
          </section>
        </div>

        <hr class="col-span-full opacity-20" />

        <div
          class="flex justify-between items-center col-span-full whitespace-nowrap flex-wrap gap-5"
        >
          <p>@ 2024 Xurya Inc. All rights reserved</p>
          <ul class="flex items-center gap-x-5">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </main>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style>
#demo2 {
  --p-green: #00d47e;
  --p-green-rgb: 0, 212, 126;
  --p-black: #1e1e1e;
  --p-black-rgb: 30, 30, 30;

  .text-gradient {
    background: linear-gradient(to right, white 90%, transparent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-container {
    @apply px-6 lg:px-10 py-[100px];
  }
  .section-title {
    @apply text-3xl;
    .sub {
      @apply text-[rgba(var(--p-black-rgb),0.4)];
    }
  }

  button.btn {
    @apply p-3 px-4 rounded-full flex items-center gap-x-2;

    &.btn--green {
      @apply bg-[var(--p-green)] text-white;
    }
    &.btn--white-border {
      @apply bg-white border;
    }
    &.btn--white {
      @apply bg-white text-[rgba(var(--p-black-rgb),0.8)];
    }
  }
}
</style>
