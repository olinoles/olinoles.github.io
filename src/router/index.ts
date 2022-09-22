import { createRouter, createWebHistory } from "vue-router";
import ApplicationView from "../views/ApplicationView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: ApplicationView,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
