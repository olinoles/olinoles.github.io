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
          class="flex min-h-full md:items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative flex transform md:max-h-[80dvh] overflow-hidden rounded-lg bg-white px-4 text-left shadow-xl transition-all dark:bg-slate-900 sm:mx-3 sm:mb-8 sm:mt-20 sm:w-full sm:max-w-7xl sm:p-6"
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
              <div class="sm:flex sm:items-start min-h-0 overflow-y-auto">
                <div class="mt-4 sm:mt-0 sm:ml-4">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900 md:text-2xl"
                    >{{ localProject?.name }}</DialogTitle
                  >
                  <div class="m-5 grid grid-cols-8 gap-10">
                    <div
                      class="order-2 col-span-8 md:order-1 overflow-y-auto md:h-full md:col-span-2 min-h-0 max-h-full"
                    >
                      <div class="grid grid-cols-3 md:grid-cols-1 md:gap-6">
                        <button
                          v-for="(photo, index) in localProject?.gallery"
                          :key="`photo-${index}`"
                          @click="selectedImage = photo"
                          class="relative m-2 mr-5 flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:border-2 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 md:h-32 md:hover:border-0"
                        >
                          <span class="inset-0 overflow-hidden rounded-md"
                            ><img
                              class="h-full w-full object-cover object-center"
                              :src="photo.src"
                              :alt="photo.name"
                          /></span>
                        </button>
                      </div>
                    </div>
                    <div class="order-1 col-span-8 md:order-2 md:col-span-6">
                      <img
                        :src="selectedImage?.src"
                        class="mx-auto max-h-96 max-w-full border shadow lg:mx-0"
                      />
                      <div class="mt-2">
                        <p
                          class="my-5 max-w-3xl whitespace-pre-wrap text-sm text-gray-500"
                        >
                          {{ localProject?.description }}
                        </p>
                      </div>
                      <span
                        class="mr-3 text-xs font-bold uppercase dark:text-slate-500"
                        >Tech used:</span
                      >
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

// this watch stops the modal clearing before it has closed
watch(project, (newVal) => {
  if (!newVal?.name) return;
  localProject.value = project.value;
  selectedImage.value = localProject.value?.gallery[0];
});
function closeModal() {
  emit("dismiss");
}
</script>
