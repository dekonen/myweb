<script setup lang="ts">
defineProps<{ srcs: string[] }>();
const active = defineModel("active", { type: Number, default: 0 });
</script>

<template>
  <div class="relative flex justify-center">
    <NuxtImg :src="srcs[active]" format="webp" />
  </div>
  <div class="flex justify-center flex-wrap">
    <div
      v-for="(src, index) in srcs"
      :key="src"
      class="relative rounded p-1"
      :src="src"
    >
      <div
        class="absolute inset-0 hover:bg-gray-400/50 cursor-pointer"
        @click="active = index"
      ></div>
      <div class="border-green-500" :class="{ border: active === index }">
        <NuxtImg :src="src" width="160" height="90" format="webp" />
      </div>
    </div>
  </div>
</template>
