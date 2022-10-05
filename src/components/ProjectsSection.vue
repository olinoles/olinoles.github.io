<template>
  <div class="my-10 lg:mx-3">
    <h1>Project Showcase</h1>
    <div
      class="flex flex-col flex-wrap items-center rounded-md p-5 md:flex-row"
    >
      <div
        class="project-card group p-5"
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        @click="selectedProject = project"
      >
        <img :src="project.photo.src" class="h-40 border object-cover" />
        <div class="my-2 font-semibold">{{ project.name }}</div>
        <span
          v-for="(skill, index) in project.skills"
          :key="`skill-${index}`"
          :style="`animation-delay: ${index * 130}ms`"
          class="my-1 mr-2 inline-block flex-shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-800 dark:bg-slate-700 dark:text-indigo-200 dark:group-hover:bg-indigo-900"
          >{{ skill }}</span
        >
        <div
          class="invisible my-2 font-medium text-rose-600 group-hover:visible dark:group-hover:text-indigo-400"
        >
          See more
        </div>
      </div>
    </div>
    <ProjectModal
      v-on:dismiss="selectedProject = null"
      :project="selectedProject"
    />
  </div>
</template>

<script setup lang="ts">
import { projects, type Project } from "@/utilities/projects";
import { ref, type Ref } from "vue";
import ProjectModal from "./ProjectModal.vue";

const selectedProject: Ref<Project | null> = ref(null);
</script>

<style scoped>
.project-card {
  @apply mr-10 w-80 cursor-pointer divide-gray-200 overflow-hidden rounded-lg duration-150 hover:bg-gray-50 dark:hover:bg-slate-800;
}
h1 {
  @apply mb-5 text-center text-3xl dark:text-sky-100 sm:mx-0 md:text-left;
}
@keyframes glow {
  0%,
  100% {
    filter: opacity(1);
    animation-timing-function: ease-in-out;
  }
  50% {
    filter: opacity(0.6);
    animation-timing-function: ease-in-out;
  }
}
.project-card:hover span {
  animation: glow 300ms;
}
</style>
