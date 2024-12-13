<template>
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
</template>

<script lang="ts" setup></script>

<style></style>
