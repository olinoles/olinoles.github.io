<template>
  <span
    class="rounded-md px-1 py-0.5 cursor-default"
    :class="
      darkMode
        ? 'bg-slate-800 hover:bg-slate-700'
        : 'bg-fuchsia-100 hover:bg-fuchsia-200'
    "
    @mouseover="highlightFn(text)"
    @mouseleave="highlightFn('')"
    >{{ text }}</span
  >
</template>

<script setup lang="ts">
import { useAppState } from "@/store/app";
import { toRefs, defineProps, computed } from "vue";

const darkMode = computed(() => useAppState().darkMode);
const props = defineProps<{
  highlightFn: Function;
  text: string;
}>();
const { highlightFn } = toRefs(props);
</script>
