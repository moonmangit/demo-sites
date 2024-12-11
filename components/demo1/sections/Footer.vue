<template>
  <footer
    class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[2fr_repeat(3,1fr)_max-content] gap-y-5 text-[var(--primary-color)] container mx-auto p-10 text-center sm:text-left"
  >
    <div class="space-y-1">
      <header class="text-3xl font-medium">Etech.</header>
      <main class="w-full md:w-4/5 opacity-60">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        officia, aut sit suscipit id accusamus voluptates.
      </main>
      <ul class="flex gap-x-2 text-3xl justify-center sm:justify-start">
        <li>
          <Icon name="entypo-social:facebook-with-circle" />
        </li>
        <li>
          <Icon name="entypo-social:instagram-with-circle" />
        </li>
        <li>
          <Icon name="entypo-social:twitter-with-circle" />
        </li>
      </ul>
    </div>

    <!-- tree - company -->
    <div class="space-y-1">
      <header class="font-medium text-lg">Company</header>
      <ul class="text-sm opacity-60">
        <li>About us</li>
        <li>Services</li>
        <li>Community</li>
        <li>Testimonials</li>
      </ul>
    </div>

    <!-- tree - support -->
    <div class="space-y-1">
      <header class="font-medium text-lg">Support</header>
      <ul class="text-sm opacity-60">
        <li>Help Center</li>
        <li>Tweet @ Us</li>
        <li>Webinars</li>
        <li>Feedback</li>
      </ul>
    </div>

    <!-- tree - Links -->
    <div class="space-y-1">
      <header class="font-medium text-lg">Links</header>
      <ul class="text-sm opacity-60">
        <li>Courses</li>
        <li>Become Teacher</li>
        <li>Service</li>
        <li>All in One</li>
      </ul>
    </div>

    <!-- contact -->
    <div class="space-y-1">
      <header class="font-medium text-lg">Contact Us</header>
      <ul class="text-sm opacity-60">
        <li>+1(555) 123-4567</li>
        <li>etechinfo@foomail.com</li>
      </ul>
    </div>

    <!-- fade divider -->
    <div
      class="w-full h-[2px] col-span-full bg-fade-center-white-gradient opacity-60"
    />

    <div class="text-center col-span-full">
      Copyright &copy; {{ new Date().getFullYear() }} Etech. All rights
      reserved.
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.bg-fade-center-white-gradient {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--primary-color),
    transparent
  );
}
</style>
