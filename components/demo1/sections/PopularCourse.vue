<template>
  <Demo1UtilsBasicSection
    :content="{
      title: 'Our Popular Courses',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed in incidunt fugiat dolorum vitae vel facilis itaque repellendus, architecto aut maxime nulla cumque libero.',
      variant: 'colorful',
    }"
  >
    <main class="container mx-auto my-8 mb-3">
      <ul
        class="gap-x-5 gap-y-3 px-4 flex flex-col md:flex-row justify-center text-xs"
      >
        <li
          v-for="i in 3"
          :key="i"
          class="bg-white text-[var(--primary-text-color)] whitespace-nowrap flex flex-col max-h-[350px] md:max-h-[300px] overflow-hidden p-2 rounded-xl gap-y-5 md:gap-y-2 w-[min(300px,100%)] md:w-[250px] mx-auto md:mx-0"
        >
          <div class="overflow-hidden rounded-lg">
            <img
              src="https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc="
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div class="text-sm flex justify-between">
            <span
              class="flex items-center gap-x-1 bg-[rgba(var(--primary-accent-1-rgb),0.2)] w-fit px-1 rounded-md"
            >
              <span
                class="w-2 h-2 bg-[var(--primary-accent-1)] flex rounded-full"
              />
              Web Design
            </span>
            <span
              class="flex items-center gap-x-1 bg-[var(--primary-accent-1)] text-[var(--primary-color)] w-fit px-1 rounded-md"
            >
              <Icon name="mdi:star" class="text-xs" />
              4.9
            </span>
          </div>
          <h1 class="flex-1 whitespace-normal text-lg leading-5 font-semibold">
            Web Design & <br />
            Development
          </h1>
          <div class="flex gap-x-3 border-b pb-3">
            <span v-for="i in 2" :key="i" class="flex gap-x-1 items-center">
              <Icon name="mdi:book" class="text-[var(--primary-accent-1)]" />
              <p class="opacity-80">25 Classes</p>
            </span>
          </div>
          <footer class="flex items-center justify-between">
            <span class="font-medium text-base"> $250.00 </span>
            <span class="flex items-center gap-x-2 font-medium text-sm">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                class="w-6 h-6 object-cover rounded-full"
                alt=""
              />
              <span class="text-[var(--primary-accent-1)]">John Doe</span>
            </span>
          </footer>
        </li>
      </ul>
    </main>
  </Demo1UtilsBasicSection>
</template>

<script lang="ts" setup></script>

<style></style>
