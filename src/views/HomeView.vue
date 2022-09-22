<template>
  <div class="overflow-hidden">
    <canvas class="bg-green-400" id="granim-canvas" />
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row mb-5 items-center">
        <img
          src="@/assets/profile.jpg"
          class="h-48 w-48 m-5 rounded-full border-4 shadow-lg border-white -mt-32 lg:-mt-16"
        />
        <div class="lg:m-5 mx-5 my-2 text-center lg:text-left">
          <div class="text-3xl font-bold">Oliver Noles</div>
          <div class="lg:text-lg text-md mt-1 text-gray-400">
            Software Engineer from Auckland, New Zealand
          </div>
        </div>
        <div class="lg:ml-auto items-start flex m-3 w-full sm:w-fit">
          <div
            class="border whitespace-nowrap px-4 w-1/2 py-2 text-center font-bold m-2 cursor-pointer rounded-md hover:bg-gray-50"
          >
            View portfolio
          </div>
          <div
            class="bg-blue-600 w-1/2 px-4 py-2 m-2 font-bold text-white cursor-pointer rounded-md hover:bg-blue-700 inline-flex items-center justify-center"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              x-description="Heroicon name: mini/plus"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import granim from "granim";
import { onMounted } from "vue";

onMounted(() => {
  new granim({
    element: "#granim-canvas",
    name: "granim",
    opacity: [1, 1],
    states: {
      "default-state": {
        gradients: [
          ["#834D9B", "#D04ED6"],
          ["#1CD8D2", "#93EDC7"],
        ],
      },
    },
  });
});
</script>

<style>
#granim-canvas {
  @apply w-full lg:h-64 h-48;
}
</style>
