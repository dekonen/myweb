<script setup lang="ts">
import type { Project } from "~/types/project";

const props = defineProps<{ project: Project }>();

const tabsItem = computed(() => {
  return (
    props.project?.featureShowcases.map((feature, index) => ({
      label: feature.name,
      value: index.toString(),
    })) ?? []
  );
});

const videoSrc = computed(() => {
  const index = Number(tab.value);
  return props.project?.featureShowcases?.[index]?.videoSrc ?? "";
});

const imageSrcs = computed(() => {
  const index = Number(tab.value);
  return props.project?.featureShowcases?.[index]?.imagesSrc;
});

const tab = ref("0");
const isLoading = ref(false);
const placeholderVideoHeight = ref(0);
const isTabVisible = ref(true);
const imageActive = ref(0);

function handleLoadedMetadata(height: number) {
  placeholderVideoHeight.value = height;
}

function handleTabChange(value: string | number) {
  if (tab.value === value) {
    return;
  }
  imageActive.value = 0;
  tab.value = value.toString();
  isLoading.value = true;
}

function handleLoadedData() {
  isLoading.value = false;
}

const height = computed(() => {
  return placeholderVideoHeight.value + "px";
});
</script>
<template>
  <div class="flex justify-between flex-col md:flex-row gap-4">
    <div class="md:flex-1">
      <!-- make placeholder for video when loaded occur to prevent scroll bar scrolling to up -->
        <ProjectImageShowcase
          v-if="imageSrcs !== undefined"
          v-model:active="imageActive"
          class="absolute visible"
          :srcs="imageSrcs"
        />
      <div v-else :style="{ height: height }" class="relative bg-gray-400/50">
        <ProjectVideoShowcase
          class="absolute visible"
          :src="videoSrc"
          @loadedmetadata="handleLoadedMetadata"
          @loadeddata="handleLoadedData"
        />
      </div>
    </div>

    <div class="flex flex-col items-end">
      <UButton
        size="xl"
        icon="i-lucide-chevron-down"
        :color="isTabVisible ? 'primary' : 'neutral'"
        variant="soft"
        class="md:hidden"
        @click="isTabVisible = !isTabVisible"
      ></UButton>
      <UTabs
        v-show="isTabVisible"
        :model-value="tab"
        :items="tabsItem"
        orientation="vertical"
        style="width: screen"
        @update:model-value="handleTabChange"
      />
    </div>
  </div>
</template>
