<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="{
        fullScreen: {
          enable: false,
          zIndex: 20,
        },
        fpsLimit: 60,
        particles: {
          move: {
            enable: true,
            speed: 1,
          },
          size: { value: 1 },
        },
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { loadFull } from "tsparticles";

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};
</script>

<style>
#tsparticles {
  @apply h-48;
}
</style>
