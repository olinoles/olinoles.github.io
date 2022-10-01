<template>
  <div class="mx-8 my-10 flex flex-col md:flex-row">
    <div class="my-3">
      <h1 class="text-3xl sm:mx-0 md:text-left text-center mb-5">
        Tools & Tech
      </h1>
      <p class="max-w-md md:text-left mx-auto md:ml-0 text-center">
        I use a range of tools and technology to achieve success in my work. My
        experience includes using:
      </p>
    </div>
    <div
      class="flex flex-row flex-wrap justify-center max-w-lg lg:max-w-3xl mx-auto skill-container px-5 lg:px-24"
    >
      <div
        class="skill-icon flex flex-col my-3"
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
      >
        <img
          class="h-10 w-10 dark:brightness-90 mx-6 my-2"
          :src="darkMode ? skill.darkImage : skill.image"
        />
        <div
          class="text-center sm:opacity-0 text-xs skill-text text-gray-500 dark:text-gray-300 font-medium"
        >
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from "@/utilities/constants";
import { useAppState } from "@/store/app";
import { computed } from "vue";

const darkMode = computed(() => useAppState().darkMode);
</script>

<style>
.dark .skill-container {
  background: rgb(33, 59, 121);
  background: radial-gradient(#152447, #0f172a, #0f172a);
  background-repeat: no-repeat;
}
.skill-icon:hover img {
  @apply -translate-y-3 ease-in-out transform duration-500;
}
.skill-icon:hover img svg {
  @apply fill-white;
}
.skill-icon:hover .skill-text {
  @apply opacity-100 transform duration-300 ease-in-out;
}
</style>
