import type { TabsItem } from "@nuxt/ui";

export const APP_TABS_CONTEXT = "app-tabs";

export interface AppTabsContext {
  tabsItem: TabsItem[];
  setActive: (value: string | number) => void;
  active: Ref<string | number>;
}

// created because we need to access & mutate the state across components
export function useAppTabsContext() {
  const route = useRoute();
  const context = inject<AppTabsContext>(APP_TABS_CONTEXT);

  if (!context) {
    throw new Error(
      "AppTabsContext not found. Make sure to provide it in your component.",
    );
  }

  const { tabsItem, setActive, active } = context;

  onMounted(() => {
    if (route.query.tab) {
      active.value = route.query.tab as string;
    }
  });
  return {
    tabsItem,
    setActive,
    active,
  };
}
