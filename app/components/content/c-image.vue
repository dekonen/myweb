<script setup lang="ts">
defineProps<{ src: string }>();
</script>

<template>
  <NuxtImg :src="src" />
</template>
