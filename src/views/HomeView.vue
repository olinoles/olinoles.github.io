<template>
  <div class="overflow-hidden">
    <!-- Header background and intro -->
    <div class="relative h-48">
      <canvas class="granim-canvas" id="granim-canvas" />
      <Transition>
        <ParticleSection v-if="darkMode" class="absolute top-0 z-10 w-full" />
      </Transition>
    </div>
    <div class="mx-auto max-w-6xl">
      <div class="mb-5 flex flex-col items-center lg:flex-row">
        <img
          src="@/assets/profile.jpg"
          class="z-20 m-5 -mt-32 h-48 w-48 select-none rounded-full border-4 border-white shadow-lg transition ease-in hover:scale-110 dark:border-slate-900 lg:-mt-16"
        />
        <div class="mx-5 my-2 text-center lg:m-5 lg:text-left">
          <h1 class="select-none text-3xl font-bold">Oliver Noles</h1>
          <div class="text-md mt-1 text-gray-400 lg:text-lg">
            Software Engineer from Auckland, New Zealand
          </div>
        </div>
        <div class="m-3 flex w-full items-start sm:w-fit lg:ml-auto">
          <div
            class="m-2 w-1/2 cursor-pointer whitespace-nowrap rounded-md border px-4 py-2 text-center font-bold hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-700"
          >
            View projects
          </div>

          <a
            href="https://www.linkedin.com/in/olivernoles/"
            target="_blank"
            class="m-2 inline-flex w-1/2 cursor-pointer items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
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
          </a>
        </div>
      </div>
      <hr />
      <AboutMe />
      <hr />
      <SkillsSection />
      <hr />
      <ProjectsSection />
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { startGranim } from "@/utilities/granim";
import { computed, onMounted, ref, type Ref, watch } from "vue";
import AboutMe from "@/components/AboutMe.vue";
import ParticleSection from "@/components/ParticlesSection.vue";
import { useAppState } from "@/store/app";
import SkillsSection from "../components/SkillsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import FooterSection from "../components/FooterSection.vue";

watch(
  () => useAppState().darkMode,
  () => {
    restartGranim();
  }
);

const darkMode = computed(() => useAppState().darkMode);
const granimInstance: Ref<any | null> = ref(null);

function restartGranim() {
  if (granimInstance.value) granimInstance.value.destroy();
  granimInstance.value = startGranim(darkMode.value);
}

onMounted(() => {
  restartGranim();
});
</script>

<style>
.granim-canvas {
  @apply h-48 w-full lg:h-48;
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
