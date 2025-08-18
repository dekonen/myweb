<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  icon: string;
}>();
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-center">
        <UIcon :name="icon" class="text-4xl text-gray-600" />
      </div>
    </template>
    <div>
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <div>
        <p class="text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
  </UCard>
</template>
