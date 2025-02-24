<template>
  <div class="mx-8 mt-10 mb-20 grid grid-cols-7 gap-3 sm:grid-cols-9 lg:mx-5">
    <a class="absolute top-0 -mt-20" name="about" />
    <h2 class="col-span-2 whitespace-nowrap text-lg font-bold">About me</h2>
    <div class="col-span-7">
      Hi, I'm Oliver! I'm a London-based full-stack engineer with deep
      experience across the entire development stack - frontend, backend, and
      infrastructure. I love tackling complex problems and thrive on building
      robust, scalable systems that power modern web applications.
      <br />
      <br />
      I specialise in architecting and developing full-stack SaaS platforms,
      working with frontend frameworks like React and Vue, backend services in
      Node.js and PostgreSQL, and infrastructure solutions involving cloud
      containers, CI/CD pipelines, and database optimisation. Whether it's
      designing intuitive user interfaces, building performant APIs, or managing
      cloud deployments, I enjoy getting hands-on with every part of the stack.
      <br />

      <div
        ref="readmore"
        :class="!isCollapsed && 'gradient--hidden'"
        class="transition-height h-10 overflow-hidden duration-300 ease-out"
      >
        <br />
        Beyond just writing code, I love leading engineering initiatives,
        mentoring teams, and optimising development workflows to improve
        efficiency and scalability. I'm a firm believer in clean architecture,
        strong DevOps practices, and delivering high-quality software that makes
        an impact.
        <br />
        <br />
        Outside of work, you’ll find me snowboarding, hiking, or bouldering. I’m
        also deeply passionate about startups and product development, always
        eager to discuss new ideas and innovative solutions.
        <br />
        <br />
        Thanks for stopping by! If you're interested in working together or just
        want to chat tech, feel free to reach out.
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
            src="@/assets/icons/uk-icon.svg"
            class="mr-2 inline-block size-5 object-cover rounded-full"
          />
          <p class="info-body inline-block">London, UK</p>
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
  const element: any = readmore.value;
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
