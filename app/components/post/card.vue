<script setup lang="ts">
const props = defineProps<{ imageSrc?: string; title: string; id: string }>();
const href = computed(() => {
  const markdownFileName = props.id.split('/').pop()
  const slug = markdownFileName?.split('.')?.[0]

  return '/blog/' + slug
})
</script>

<template>
  <div class="grid grid-cols-12 p-1 border-gray-400 border-b pb-2 gap-4">
    <NuxtImg :src="imageSrc" class="col-span-4 rounded-lg" />
    <div class="prose col-span-8">
      <h3>{{ title }}</h3>
      <slot />{{ " " }}
      <NuxtLink :to="href" class="text-blue-500 hover:underline!" style="text-decoration: none;">Read More</NuxtLink>
    </div>
  </div>
</template>
