<template>
  <Disclosure
    as="header"
    class="top-0 z-50 w-full lg:fixed lg:bg-white lg:shadow-md dark:lg:bg-slate-800"
    v-slot="{ open }"
  >
    <div
      class="relative mx-auto max-w-6xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200"
    >
      <nav class="hidden items-center lg:flex lg:py-2" aria-label="Global">
        <div class="mr-10 select-none text-lg font-bold dark:text-white">
          Oliver
        </div>
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900 dark:bg-slate-600 dark:text-slate-300'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-500 dark:hover:bg-slate-700',
            'mx-3 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        ><TransitionGroup name="slide-fade">
          <div
            v-if="darkMode"
            @click="toggleDarkMode"
            class="ml-auto cursor-pointer select-none font-semibold dark:text-slate-500 dark:hover:text-slate-200"
          >
            <img :src="SunIcon" class="mr-1 inline-block h-4 w-4" />
            Lights on
          </div>
          <div
            v-if="!darkMode"
            @click="toggleDarkMode"
            class="ml-auto cursor-pointer select-none font-semibold hover:text-slate-500 dark:text-slate-500"
          >
            <img :src="MoonIcon" class="mr-1 inline-block h-4 w-4" />
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
      class="absolute z-10 w-full lg:hidden"
      aria-label="Global"
    >
      <div
        class="space-y-1 rounded-b-md bg-white px-2 pt-2 pb-3 shadow-md dark:border dark:bg-slate-800"
      >
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900 dark:bg-slate-700'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'block rounded-md py-2 px-3 text-base font-medium dark:text-slate-400',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
        <a
          @click="toggleDarkMode"
          class="flex w-fit items-center rounded-md py-2 px-3 text-base font-medium dark:text-slate-400"
          >Dark mode<Switch
            :class="
              darkModeSwitch
                ? 'bg-gray-600 dark:bg-slate-900'
                : 'bg-gray-400 dark:bg-slate-700'
            "
            class="relative ml-3 inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <span
              aria-hidden="true"
              :class="darkModeSwitch ? 'translate-x-9' : 'translate-x-0'"
              class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            /> </Switch
        ></a>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <router-view
    class="-mt-16 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-400 lg:mt-0"
  />
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
} from "@headlessui/vue";
import { useAppState } from "@/store/app";
import { storeToRefs } from "pinia";
import SunIcon from "@/assets/icons/sunicon.svg";
import MoonIcon from "@/assets/icons/moonicon.svg";
import { ref } from "vue";

const appStore = useAppState();
const { darkMode } = storeToRefs(appStore);
const darkModeSwitch = ref(darkMode);

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
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
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
