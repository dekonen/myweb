<script setup lang="ts">
import AppToggleDark from "~/components/app-toggle-dark.vue";
</script>
<template>
  <div class="flex flex-col items-center">
    <article class="prose lg:prose-lg dark:prose-invert">
      <nav class="py-4 flex justify-between">
        <NuxtLink class="font-semibold hover:font-bold" to="/">
          Addy Konen
        </NuxtLink>
        <div class="flex gap-2 items-center">
          <a href="https://github.com/dekonen" title="Github">
            <UButton icon="i-lucide-github" variant="ghost" color="neutral">
              <template #fallback>
                <div class="size-8" />
              </template>
            </UButton>
          </a>
          <AppToggleDark />
        </div>
      </nav>
      <slot />
    </article>
  </div>
</template>

<style scoped>
nav * {
  text-decoration: none;
}
</style>
