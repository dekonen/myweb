<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const route = useRoute();
const router = useRouter();

const tabsItem: TabsItem[] = [
  {
    label: "Posts",
    slot: "posts" as const,
    value: "posts",
  },
  {
    label: "Projects",
    slot: "projects" as const,
    value: "projects",
  },
  {
    label: "About",
    slot: "about" as const,
    value: "about",
  },
  {
    label: "Contact",
    slot: "contact" as const,
    value: "contact",
  },
];

const active = ref("posts");
function setActive(_value: string | number) {
  const value = _value.toString();
  active.value = value;
  router.push({
    path: "/",
    query: { tab: value },
  });
}
onMounted(() => {
  if (route.query.tab) {
    active.value = route.query.tab as string;
  }
});
</script>

<template>
  <div>
    <UTabs
      :items="tabsItem"
      :variant="'link'"
      :model-value="active"
      @update:model-value="(v) => setActive(v)"
    >
      <template #posts>
        <PostCard />
      </template>
      <template #projects>
        <ProjectListContainer />
      </template>
    </UTabs>
  </div>
</template>
