<template>
  <div
    class="mx-8 my-20 flex flex-col items-center rounded-md p-5 dark:bg-transparent md:flex-row lg:mx-3"
  >
    <div class="my-3 mb-10 max-w-md" id="skills-description">
      <h1>My Tools & Tech</h1>
      <p>I use a range of tools and technology to achieve success.</p>
      <h3 class="skills-subheading">Development</h3>
      <p>
        <HighlightSpan text="Javascript" :highlightFn="highlightSkill" />
        frameworks including
        <HighlightSpan text="Vue" :highlightFn="highlightSkill" />,
        <HighlightSpan text="React" :highlightFn="highlightSkill" />, and
        <HighlightSpan text="Node" :highlightFn="highlightSkill" /> in the
        backend.
      </p>
      <h3>Design</h3>
      <p>
        I get creative with
        <HighlightSpan text="Photoshop" :highlightFn="highlightSkill" />,
        <HighlightSpan text="Illustrator" :highlightFn="highlightSkill" />, and
        <HighlightSpan text="Figma" :highlightFn="highlightSkill" />.
      </p>
      <h3>Deployment</h3>
      <p>
        I've deployed projects on
        <HighlightSpan text="AWS" :highlightFn="highlightSkill" />,
        <HighlightSpan text="Firebase" :highlightFn="highlightSkill" />, and
        <HighlightSpan text="Github" :highlightFn="highlightSkill" />.
      </p>
    </div>
    <div class="skill-container">
      <div
        class="skill-icon"
        :class="highlightedSkill === skill.name && 'highlighted-skill'"
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
      >
        <div class="skill-image">
          <img :src="darkMode ? skill.darkImage : skill.image" />
        </div>
        <div class="skill-text">
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from "@/utilities/constants";
import { useAppState } from "@/store/app";
import { computed, ref } from "vue";
import HighlightSpan from "./HighlightSpan.vue";

const darkMode = computed(() => useAppState().darkMode);

const highlightedSkill = ref("");

function highlightSkill(skill: string) {
  highlightedSkill.value = skill;
}
</script>

<style>
.dark .skill-container {
  background: #0f172a;
  background: radial-gradient(#152447, #0f172a, #0f172a);
  background-repeat: no-repeat;
}
.skill-container {
  @apply mx-auto flex max-w-xl flex-row flex-wrap justify-center md:max-w-lg lg:max-w-2xl lg:px-12;
}
.skill-icon {
  @apply my-3 flex flex-col items-center;
}
.skill-icon .skill-image {
  @apply transform duration-300 ease-in-out;
}
.skill-text {
  @apply w-20 text-center text-xs font-medium text-gray-500 dark:text-gray-300 sm:opacity-0;
}
.skill-image {
  @apply mx-6 my-2 flex h-10 w-10 dark:brightness-90;
}
.skill-icon:hover .skill-image img,
.highlighted-skill .skill-image img {
  @apply animate-float;
}
.skill-icon:hover .skill-image,
.highlighted-skill .skill-image {
  @apply -translate-y-3 scale-110;
}
.skill-icon:hover .skill-text,
.highlighted-skill .skill-text {
  @apply transform opacity-100 duration-100 ease-in-out;
}
#skills-description h1 {
  @apply mb-5 text-center text-3xl dark:text-sky-100 sm:mx-0 md:text-left;
}
#skills-description h3 {
  @apply mt-3 mb-1 text-gray-600 dark:text-sky-400;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(-10%);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: none;
    animation-timing-function: ease-in-out;
  }
}
.animate-float {
  animation: float 2s infinite;
}
</style>
