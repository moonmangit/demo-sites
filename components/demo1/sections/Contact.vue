<template>
  <section
    class="bg-[var(--primary-color)] h-[360px] flex items-center justify-center rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[90px] md:rounded-br-[90px]"
  >
    <Demo1UtilsBasicSection
      :content="{
        title: 'Get In Touch!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, molestiae tempora neque ad dicta animi repellendus placeat quis.',
        variant: 'colorful',
      }"
      p-class="w-4/5 md:w-2/3 mx-auto"
      class="rounded-3xl !py-6 md:!py-[50px] w-[90dvw] md:w-fit shadow-lg"
    >
      <main class="flex w-[85%] md:w-[60%] pt-3 md:pt-6 gap-x-3">
        <input
          placeholder="Enter your email ..."
          class="p-2 px-3 w-full rounded-lg outline-none text-[var(--primary-text-color)]"
        />
        <Demo1UtilsButton title="Subscribe" variant="white" />
      </main>
    </Demo1UtilsBasicSection>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
