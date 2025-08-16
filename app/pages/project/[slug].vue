<script setup lang="ts"></script>

<template>
  <div>
    <ProjectDetailContainer :slug="$route.params.slug?.toString() ?? ''" />
  </div>
</template>
