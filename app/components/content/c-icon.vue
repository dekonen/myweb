<script setup lang="ts">
const props = defineProps({
  name: String,
  label: String,
});

console.log(props);
</script>

<template>
  <div class="flex items-center gap-2 text-gray-600">
    <UIcon :name="name ?? ''" class="size-5" />
    <span>{{ label }}</span>
  </div>
</template>
