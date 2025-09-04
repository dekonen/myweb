<script setup lang="ts">
import { TooltipProvider } from "reka-ui";
useSeoMeta({
  title: "Addy Konen",
  description:
    "Personal website of Addy Konen, a Frontend Web Developer with expertise in Vue.js, Nuxt.js, and more.",
});
</script>
<template>
  <TooltipProvider>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </TooltipProvider>
</template>
