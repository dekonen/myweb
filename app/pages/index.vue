<script setup lang="ts">
const { tabsItem, setActive, active } = useAppTabsContext();
</script>

<template>
  <div>
    <!-- for seo only, UTabs is client only -->
    <AboutMe v-show="false" />

    <UTabs
      :items="tabsItem"
      :variant="'link'"
      :model-value="active"
      @update:model-value="(v) => setActive(v)"
    >
      <template #posts>
        <PostListContainer />
      </template>
      <template #projects>
        <ProjectListContainer />
      </template>
      <template #about>
        <AboutMe />
      </template>
      <template #contact>
        You can contact me via whatsapp at
        <a
          class="text-primary hover:underline"
          href="https://wa.me/62895342572499"
          >+62 895-3425-72499</a
        >
      </template>
    </UTabs>
  </div>
</template>
