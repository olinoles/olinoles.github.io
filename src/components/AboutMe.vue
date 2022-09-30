<template>
  <div class="grid grid-cols-9 gap-3 mt-10 mx-5 lg:mx-5 mb-10">
    <h2 class="col-span-2 font-bold">About Oliver</h2>
    <div class="col-span-7">
      Hi, I'm Oliver! I'm an Auckland-based tech enthusiast experienced in web
      technologies, creative projects, and UI design. I love learning and am
      always striving to gain new skills and experiences.
      <br />
      <br />
      I am most experienced in front-end development with Javascript (including
      mobile apps), and enjoy working with many front-end technologies including
      Vue, React and React-native.
      <div
        ref="readmore"
        :class="!isCollapsed ? 'gradient--hidden' : ''"
        class="transition-height duration-300 ease-out overflow-hidden h-10"
      >
        <br />
        Outside of software development, I enjoy snowboarding, hiking, online
        thrift shopping for clothes, and have become a bit of an electric
        vehicle nerd recently! I also have a cat named Chino who keeps me
        company while working.
        <br />
        <br />
        Thanks so much for visiting my online portfolio! If you wish to contact
        me, all my links are below.
        <img src="@/assets/chino.png" class="my-5 rounded" width="350" />
      </div>
      <div
        class="font-semibold text-slate-500 hover:text-slate-400 cursor-pointer my-3"
        @click="readMoreClicked()"
      >
        {{ isCollapsed ? "Read less" : "Read more" }}
      </div>
      <div
        class="mt-10 rounded-md overflow-hidden grid grid-cols-4 gap-5 bg-sky-50 dark:bg-slate-800 dark:border dark:border-slate-600 p-5"
      >
        <div>
          <p class="info-header">Location</p>
          <img
            src="@/assets/icons/nz-icon.svg"
            class="h-4 w-4 mr-2 inline-block"
          />
          <p class="inline-block info-body">Auckland, NZ</p>
        </div>
        <div>
          <p class="info-header">Email</p>
          <p class="info-body">oliver@noles.nz</p>
        </div>
        <div>
          <p class="info-header">Github</p>
          <p class="info-body">github.com/olinoles</p>
        </div>
        <div>
          <p class="info-header">LinkedIn</p>
          <p class="info-body">linkedin.com/in/olivernoles</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const isCollapsed: Ref<Boolean> = ref(false);
const readmore = ref();

function readMoreClicked() {
  const element: Ref<HTMLDivElement> = readmore.value;
  if (!element) return;
  if (!isCollapsed.value) {
    element.style.height = `${element.scrollHeight}px`;
  } else {
    element.style.height = "2.5rem";
  }
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style>
.gradient--hidden:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(transparent 0, white);
}
.dark .gradient--hidden:before {
  background: linear-gradient(
    transparent 0,
    rgb(15 23 42 / var(--tw-bg-opacity))
  );
}
.info-header {
  @apply font-bold text-sm mb-2 text-blue-400;
}
.info-body {
  @apply font-bold text-blue-500;
}
</style>