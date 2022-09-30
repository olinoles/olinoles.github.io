<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particleConfig"
    />
  </div>
</template>

<script setup lang="ts">
import { loadFull } from "tsparticles";
import particleConfig from "@/utilities/particlesConfig.js";

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};
</script>

<style>
#tsparticles {
  @apply h-48;
}
</style>
