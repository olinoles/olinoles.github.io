import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";

import "./assets/main.css";

const app = createApp(App);

// Add support for dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

app.use(router);
app.use(Particles);

app.mount("#app");
