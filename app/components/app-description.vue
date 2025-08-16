<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});

// Parsing text → array of lines → array of parts
const parsed = computed(() => {
  return props.text.split(/\n/).map((line) =>
    line.split(/(https?:\/\/[^\s]+)/g).map((part) => {
      if (/^https?:\/\//.test(part)) {
        return { type: "link", value: part };
      }
      return { type: "text", value: part };
    }),
  );
});
</script>

<template>
  <div>
    <template v-for="(line, i) in parsed" :key="i">
      <template v-for="(part, j) in line" :key="j">
        <span v-if="part.type === 'text'">{{ part.value }}</span>
        <a
          v-else
          :href="part.value"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          {{ part.value }}
        </a>
      </template>
      <br v-if="i < parsed.length - 1" />
    </template>
  </div>
</template>
