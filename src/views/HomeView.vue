<template>
  <div class="overflow-hidden">
    <!-- Header background and intro -->
    <div class="relative h-48">
      <canvas class="dark:hidden granim-canvas" id="granim-light" />
      <canvas id="granim-dark" class="granim-canvas hidden dark:block" />
      <Transition>
        <ParticleSection v-if="darkMode" class="z-10 absolute top-0 w-full" />
      </Transition>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row mb-5 items-center">
        <img
          src="@/assets/profile.jpg"
          class="select-none h-48 w-48 m-5 z-20 rounded-full border-4 shadow-lg border-white dark:border-slate-900 -mt-32 lg:-mt-16 transition ease-in hover:scale-110"
        />
        <div class="lg:m-5 mx-5 my-2 text-center lg:text-left">
          <h1 class="text-3xl font-bold select-none">Oliver Noles</h1>
          <div class="lg:text-lg text-md mt-1 text-gray-400">
            Software Engineer from Auckland, New Zealand
          </div>
        </div>
        <div class="lg:ml-auto items-start flex m-3 w-full sm:w-fit">
          <div
            class="border dark:border-slate-700 whitespace-nowrap px-4 w-1/2 py-2 text-center font-bold m-2 cursor-pointer rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            View projects
          </div>
          <div
            class="bg-blue-600 w-1/2 px-4 py-2 m-2 font-bold text-white cursor-pointer rounded-md hover:bg-blue-700 inline-flex items-center justify-center"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
              ></path>
            </svg>
            Connect
          </div>
        </div>
      </div>
      <hr />
      <AboutMe />
      <hr />
      <SkillsSection />
      <div class="mb-32" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { startGranim } from "@/utilities/granim";
import { computed, onMounted, watch } from "vue";
import AboutMe from "@/components/AboutMe.vue";
import ParticleSection from "@/components/ParticlesSection.vue";
import { useAppState } from "@/store/app";
import SkillsSection from "../components/SkillsSection.vue";

watch(
  () => useAppState().darkMode,
  () => {
    restartGranim();
  }
);

const darkMode = computed(() => useAppState().darkMode);

function restartGranim() {
  startGranim(true);
  startGranim(false);
}

onMounted(() => {
  restartGranim();
});
</script>

<style>
.granim-canvas {
  @apply w-full lg:h-48 h-48;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
