<script setup lang="ts">
import { useFetchProjects } from "~/query/composables/useProjectQuery";

const { data: projects } = useFetchProjects();
function generateProjectUrl(slug: string) {
  return "/project/" + slug;
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :image-src="project.imageSrc"
      :title="project.title"
      :description="project.description"
      :url="generateProjectUrl(project.slug)"
    />
  </div>
</template>
