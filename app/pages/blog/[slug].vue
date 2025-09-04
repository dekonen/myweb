<script setup lang="ts">
definePageMeta({
  layout: "blog",
});
const route = useRoute();
const { data: home, error } = await useAsyncData(async () => {
  const path = route.params.slug?.toString();
  if (!path) {
    return null;
  }
  return queryCollection("content")
    .path("/" + path)
    .first();
});

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div>
    <ContentRenderer v-if="home" :value="home" />
  </div>
</template>
