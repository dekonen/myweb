<script setup lang="ts">
defineProps<{ srcs: string[] }>();
const active = defineModel("active", { type: Number, default: 0 });
</script>

<template>
  <div class="relative flex justify-center">
    <NuxtImg :src="srcs[active]" format="webp" placeholder> </NuxtImg>
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
      <div
        class="transition-transform duration-200"
        :class="{ 'translate-y-0.5 border border-green-500': active === index }"
      >
        <NuxtImg
          v-slot="{ src: imgSrc, isLoaded, imgAttrs }"
          :src="src"
          width="160"
          height="90"
          format="webp"
          custom
        >
          <img v-if="isLoaded" v-bind="imgAttrs" :src="imgSrc" />
          <USkeleton v-else class="w-40 h-24" />
        </NuxtImg>
      </div>
    </div>
  </div>
</template>
