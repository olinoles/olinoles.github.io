import { defineStore } from "pinia";

export type AppState = {
  darkMode: boolean;
};

export const useAppState = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "app",
  state: () =>
    ({
      darkMode: false,
    } as AppState),

  actions: {
    setDarkMode(isDark: boolean) {
      this.darkMode = isDark;
    },
  },
});
