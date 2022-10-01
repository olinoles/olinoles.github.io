<template>
  <Disclosure
    as="header"
    class="lg:bg-white dark:lg:bg-slate-800 lg:shadow lg:fixed z-50 w-full top-0"
    v-slot="{ open }"
  >
    <div
      class="mx-auto max-w-6xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 relative"
    >
      <nav class="hidden lg:flex lg:py-2 items-center" aria-label="Global">
        <div class="text-lg dark:text-white font-bold mr-10 select-none">
          Oliver
        </div>
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 dark:bg-slate-600 text-gray-900 dark:text-slate-300'
              : 'text-gray-900 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-gray-900',
            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium mx-3',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        ><TransitionGroup name="slide-fade">
          <div
            v-if="darkMode"
            @click="toggleDarkMode"
            class="ml-auto cursor-pointer dark:text-slate-500 dark:hover:text-slate-200 font-semibold select-none"
          >
            <img :src="SunIcon" class="h-4 w-4 mr-1 inline-block" />
            Lights on
          </div>
          <div
            v-if="!darkMode"
            @click="toggleDarkMode"
            class="ml-auto cursor-pointer dark:text-slate-500 hover:text-slate-500 font-semibold select-none"
          >
            <img :src="MoonIcon" class="h-4 w-4 mr-1 inline-block" />
            Lights off
          </div>
        </TransitionGroup>
      </nav>

      <div class="relative flex h-16 justify-between lg:hidden">
        <div class="relative z-10 flex items-center">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <svg
              x-state:on="Menu open"
              x-state:off="Menu closed"
              class="block h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel
      as="nav"
      class="lg:hidden absolute z-10 w-full"
      aria-label="Global"
    >
      <div
        class="space-y-1 px-2 pt-2 pb-3 bg-white dark:bg-slate-800 dark:border shadow-md rounded-b-md"
      >
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 dark:bg-slate-700 text-gray-900'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'block rounded-md py-2 px-3 text-base dark:text-slate-400 font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
  <router-view
    class="-mt-16 lg:mt-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400"
  />
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useAppState } from "@/store/app";
import { storeToRefs } from "pinia";
import SunIcon from "@/assets/icons/sunicon.svg";
import MoonIcon from "@/assets/icons/moonicon.svg";

const appStore = useAppState();
const { darkMode } = storeToRefs(appStore);

appStore.setDarkMode(
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
  appStore.setDarkMode(!appStore.darkMode);
}

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Download CV", href: "#", current: false },
];
</script>

<style>
.dark hr {
  border-color: rgb(33, 43, 58);
}
.dark h1,
.dark h2,
.dark h3 {
  @apply text-slate-200;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
