<script setup lang="ts">
const { data: blogs } = await useAsyncData("blogs", () => {
  return queryCollection("content").all();
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <PostCard
      v-for="blog in blogs"
      :id="blog.id"
      :key="blog.id"
      :title="blog.title"
      :image-src="blog.meta.hero ? String(blog.meta.hero) : undefined"
    >
    <div class="line-clamp-3">
      {{ blog.description }}
    </div>
    </PostCard>
  </div>
</template>
