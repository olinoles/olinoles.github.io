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
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform overflow-hidden rounded-lg bg-white px-4 text-left shadow-xl transition-all sm:mb-8 sm:mt-20 sm:w-full sm:max-w-7xl sm:p-6"
            >
              <div
                class="absolute top-0 right-0 z-10 hidden pt-4 pr-4 sm:block"
              >
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-2xl font-medium leading-6 text-gray-900"
                    >{{ localProject?.name }}</DialogTitle
                  >
                  <div class="m-5 grid grid-cols-8 gap-10">
                    <div class="col-span-2">
                      <div class="grid h-96 grid-cols-1 gap-6 overflow-y-auto">
                        <button
                          v-for="(photo, index) in localProject?.gallery"
                          :key="`photo-${index}`"
                          @click="selectedImage = photo"
                          class="relative m-2 mr-5 flex h-32 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
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
                    <div class="col-span-6">
                      <img
                        :src="selectedImage?.src"
                        class="max-h-96 max-w-full border shadow"
                      />
                      <div class="mt-2">
                        <p
                          class="my-5 max-w-3xl whitespace-pre-wrap text-sm text-gray-500"
                        >
                          {{ localProject?.description }}
                        </p>
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
