<template>
  <Disclosure as="header" class="bg-white shadow relative" v-slot="{ open }">
    <div
      class="mx-auto max-w-6xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 relative"
    >
      <nav
        class="hidden lg:flex lg:space-x-8 lg:py-2 items-center"
        aria-label="Global"
      >
        <div class="text-lg font-bold">Oliver</div>
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </nav>
      <div class="relative flex h-16 justify-between lg:hidden">
        <div class="relative z-10 flex items-center">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span>Open menu</span>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel
      as="nav"
      class="lg:hidden absolute z-10 w-full"
      aria-label="Global"
    >
      <div class="space-y-1 px-2 pt-2 pb-3 bg-white shadow-md rounded-b-md">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
            'block rounded-md py-2 px-3 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
  <router-view class="-mt-16 lg:mt-0" />
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];
</script>
