<script setup lang="ts">
import { useFetchProject } from "~/query/composables/useProjectQuery";
const props = defineProps<{ slug?: string }>();
const { data: project } = useFetchProject(props.slug ?? "");

const items = [
  {
    label: "Home",
    icon: "i-lucide-home",
    to: {
      name: "index",
      query: { tab: "projects" },
    },
  },
  {
    label: "Project",
    icon: "i-lucide-folder",
    to: {
      name: "project-slug",
      params: { slug: props.slug },
    },
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <UBreadcrumb :items="items" class="mb-4" />
    <div>
      <h1 class="text-lg font-bold">{{ project?.title }}</h1>
      <AppDescription :text="project?.description" />
    </div>
    <div v-if="project">
      <h2 class="font-bold mb-2">Feature Showcase</h2>
      <ClientOnly>
        <ProjectFeatureShowcase :project="project" />
      </ClientOnly>
    </div>
    <div>
      <h2 class="font-bold mb-2">Tools</h2>
      <div class="flex gap-2">
        <UBadge
          v-for="tool in project?.tools"
          :key="tool"
          variant="soft"
          color="neutral"
        >
          {{ tool }}
        </UBadge>
      </div>
    </div>
  </div>
</template>
