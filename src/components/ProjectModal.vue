<template>
  <TransitionRoot as="template" :show="!!project">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative max-h-[90dvh] top-7 flex transform overflow-hidden rounded-lg bg-white px-4 text-left shadow-xl transition-all dark:bg-slate-900 w-full sm:max-w-7xl sm:p-6"
            >
              <div class="absolute top-0 right-0 z-10 pt-4 pr-4">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-slate-600"
                  @click="closeModal"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    x-description="Heroicon name: outline/x-mark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex max-w-full sm:items-start">
                <div
                  class="pt-4 sm:mt-0 sm:ml-4 min-h-0 max-h-full max-w-full flex flex-col"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900 md:text-2xl"
                    >{{ localProject?.name }}</DialogTitle
                  >
                  <div
                    class="p-5 flex flex-col md:flex-row gap-3 md:gap-10 max-h-full min-h-0"
                  >
                    <div class="order-2 w-full md:order-1 md:w-1/4">
                      <div
                        class="flex flex-row overflow-x-auto md:flex-col min-h-0 h-full md:overflow-y-auto md:overflow-x-visible md:gap-6"
                      >
                        <button
                          v-for="(photo, index) in localProject?.gallery"
                          :key="`photo-${index}`"
                          @click="selectedImage = photo"
                          class="relative m-2 flex-shrink-0 w-20 h-20 md:h-32 md:w-auto flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:border-2 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 md:hover:border-0"
                        >
                          <span class="inset-0 overflow-hidden rounded-md"
                            ><img
                              class="w-full h-full object-cover object-center"
                              :src="photo.src"
                              :alt="photo.name"
                          /></span>
                        </button>
                      </div>
                    </div>
                    <div
                      class="order-1 w-full md:order-2 md:w-3/4 flex flex-col max-h-[70vh] overflow-y-auto"
                      ref="mainContentArea"
                    >
                      <div
                        class="flex items-center justify-center h-48 md:h-64 w-full flex-shrink-0"
                      >
                        <img
                          :src="selectedImage?.src"
                          class="h-full w-full object-contain border rounded dark:border-slate-700 shadow lg:mx-0"
                        />
                      </div>
                      <div class="mt-2">
                        <p
                          class="my-5 max-w-3xl whitespace-pre-wrap text-sm text-gray-500 project-description"
                          v-html="localProject?.description"
                        ></p>
                      </div>
                      <span
                        class="mr-3 text-xs font-bold uppercase dark:text-slate-500"
                        >Tech used:</span
                      >
                      <div class="flex flex-wrap">
                        <span
                          v-for="(skill, index) in localProject?.skills"
                          :key="`skill-${index}`"
                          :style="`animation-delay: ${index * 130}ms`"
                          class="my-1 mr-2 inline-block flex-shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-800 dark:bg-slate-700 dark:text-indigo-200 dark:group-hover:bg-indigo-900"
                          >{{ skill }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, toRefs, watch, type Ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import type { Project, Photo } from "@/utilities/projects";

const emit = defineEmits(["dismiss"]);
const props = defineProps<{
  project: Project | null;
}>();
const { project } = toRefs(props);
const localProject: Ref<Project | null> = ref(null);
const selectedImage: Ref<Photo | undefined> = ref(
  localProject.value?.gallery[0]
);
const mainContentArea = ref<HTMLElement | null>(null);

// this watch stops the modal clearing before it has closed
watch(project, (newVal) => {
  if (!newVal?.name) return;
  localProject.value = project.value;
  selectedImage.value = localProject.value?.gallery[0];
});

watch(selectedImage, () => {
  if (mainContentArea.value) {
    mainContentArea.value.scrollTop = 0;
  }
});
function closeModal() {
  emit("dismiss");
}
</script>

<style>
.project-description a {
  @apply font-semibold text-indigo-600 hover:text-indigo-800 underline transition-colors;
}
</style>
