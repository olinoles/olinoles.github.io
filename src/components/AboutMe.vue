<template>
  <div class="mx-8 mt-10 mb-20 grid grid-cols-7 gap-3 sm:grid-cols-9 lg:mx-5">
    <h2 class="col-span-2 whitespace-nowrap text-lg font-bold">About me</h2>
    <div class="col-span-7">
      Hi, I'm Oliver! I'm an Auckland-based tech enthusiast experienced in web
      technologies, creative projects, and UI design. I love learning and am
      always striving to gain new skills and experiences.
      <br />
      <br />
      My specialty is SaaS platforms and Ecommerce. I've helped businesses build
      large-scale Ecommerce sites and successful SaaS platforms.
      <br />

      <div
        ref="readmore"
        :class="!isCollapsed && 'gradient--hidden'"
        class="transition-height h-10 overflow-hidden duration-300 ease-out"
      >
        <br />
        I am most experienced in front-end development with Javascript
        (including mobile apps), and have worked with many front-end
        technologies including Vue, React and React-native. I really enjoy
        working with designers and UI artists to create amazing experiences for
        end-users.
        <br />
        <br />
        Outside of work, I enjoy snowboarding, hiking, and play in a social
        soccer league. I'm also a craft beer nerd and have recently been
        interested electric vehicles! I'm very entrepreneurially minded and love
        to talk startup ideas. I also have a cat named Chino who distracts me
        while working.
        <br />
        <br />
        Thanks so much for visiting my online portfolio. If you'd like to chat,
        please get in touch!
        <img src="@/assets/chino.png" class="my-5 rounded" width="350" />
      </div>
      <div
        class="my-3 cursor-pointer font-semibold text-slate-500 hover:text-slate-400"
        @click="readMoreClicked()"
      >
        {{ isCollapsed ? "Read less" : "Read more" }}
      </div>
      <div
        class="mt-10 grid grid-cols-1 gap-5 overflow-hidden rounded-md bg-sky-50 p-5 dark:border dark:border-slate-600 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <p class="info-header">Location</p>
          <img
            src="@/assets/icons/nz-icon.svg"
            class="mr-2 inline-block h-4 w-4"
          />
          <p class="info-body inline-block">Auckland, NZ</p>
        </div>
        <div>
          <p class="info-header">Email</p>
          <p>
            <a
              ref="noreferrer"
              target="_blank"
              class="info-body"
              href="mailto:oliver@noles.nz"
              >oliver@noles.nz</a
            >
          </p>
        </div>
        <div>
          <p class="info-header">Github</p>
          <p>
            <a
              ref="noreferrer"
              target="_blank"
              class="info-body"
              href="https://github.com/olinoles"
              >@olinoles</a
            >
          </p>
        </div>
        <div>
          <p class="info-header">LinkedIn</p>
          <p>
            <a
              ref="noreferrer"
              target="_blank"
              class="info-body"
              href="https://linkedin.com/in/olivernoles"
              >@olivernoles</a
            >
          </p>
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
  @apply mb-2 text-sm font-bold text-blue-400;
}
.info-body {
  @apply font-bold text-blue-500;
}
</style>
