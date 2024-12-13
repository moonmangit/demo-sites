<template>
  <section class="h-[90dvh] duration-300 p-4 container mx-auto">
    <div class="hero relative w-full h-full">
      <div class="relative w-full h-full rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1615630859219-0459703c34e6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="w-full h-full object-cover"
          alt=""
        />
        <div class="absolute inset-0 bg-gradient-to-tr from-gray-800/90"></div>
      </div>
      <!-- title -->
      <section
        class="absolute inset-y-0 left-0 text-white flex flex-col justify-start lg:justify-center p-8 px-8 lg:px-10"
      >
        <p class="font-light">1# Energy provider in the world</p>
        <h1 class="text-3xl md:text-5xl lg:text-7xl my-5 md:my-10 line-clamp-2">
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
</template>

<script lang="ts" setup></script>

<style></style>
