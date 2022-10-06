<template>
  <div class="flex h-32 w-full flex-col items-center justify-center">
    <div>© Oliver Noles {{ currentYear }}</div>
    <div class="mt-3 text-xs">
      website
      <a
        class="font-semibold dark:text-slate-300"
        href="https://github.com/olinoles/olinoles.github.io"
        target="_blank"
        >source code</a
      >
      available on Github!
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
