<template>
  <div>
    <canvas id="granim-canvas" />
    <div class="max-w-7xl mx-auto flex flex-row">
      <img
        src="@/assets/profile.jpg"
        class="h-48 m-5 rounded-full border-4 shadow-lg border-white -mt-16"
      />
      <div class="m-5">
        <div class="text-3xl font-bold">Oliver Noles</div>
        <div class="text-lg mt-1 text-gray-400">
          Software Engineer from Auckland, New Zealand
        </div>
      </div>
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
  width: 100%;
  height: 250px;
}
</style>
