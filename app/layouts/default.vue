<script setup lang="ts">
import MyPic from "/images/mypic.jpg";
import type { TabsItem } from "@nuxt/ui";

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

provide<AppTabsContext>(APP_TABS_CONTEXT, {
  tabsItem,
  setActive,
  active,
});

function handleAboutMeClicked() {
  // Handle the event when the "About me" button is clicked
  setActive("about");
}

const colorMode = useColorMode();
onMounted(() => (colorMode.preference = "light"));
</script>
<template>
  <div class="max-w-[1024px] xl:max-w-[1200px] mx-auto p-4 flex-col gap-4 flex">
    <ProfileBanner />
    <Profile
      avatar-alt="Addy Konen"
      :avatar-src="MyPic"
      @about-me="handleAboutMeClicked"
    />
    <slot />
  </div>
</template>
