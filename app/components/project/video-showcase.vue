<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  src: string;
}>();

const emit = defineEmits<{
  (e: "loadedmetadata", height: number): void;
  (e: "ended"): void;
  (e: "load"): void;
}>();

const videoRef = ref<HTMLVideoElement | null>(null);
const videoHeight = ref(0);

function handleLoadedMetadata() {
  videoHeight.value = videoRef.value?.getBoundingClientRect().height ?? 0;
  emit("loadedmetadata", videoHeight.value);
}

function loadVideo() {
  videoRef.value?.load();
  emit("load");
}

watch(
  () => props.src,
  () => {
    console.log("fff");
    if (videoRef.value) {
      loadVideo();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div>
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      :controls="false"
      @loadedmetadata="handleLoadedMetadata"
    >
      <source :src="props.src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
