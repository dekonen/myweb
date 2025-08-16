<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  imageSrc?: string;
  url: string;
}>();
</script>

<template>
  <UCard>
    <template #header>
      <RouterLink :to="url">
        <NuxtImg
          :src="imageSrc"
          alt="Project Image"
          class="hover:scale-105 transition-transform duration-200"
          format="webp"
        />
      </RouterLink>
    </template>
    <div>
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <div>
        <p class="text-gray-600 line-clamp-2">
          {{ description }}
        </p>
        <RouterLink :to="url" class="text-blue-500 hover:underline"
          >Read more</RouterLink
        >
      </div>
    </div>
  </UCard>
</template>
