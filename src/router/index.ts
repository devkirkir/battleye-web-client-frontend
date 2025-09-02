import { DashboardView } from "@dashboard";
import { LoginView } from "@login";
import { createRouter, createWebHistory } from "vue-router";

// TODO типизация

const routes = [
  { path: "/", redirect: { name: "login" } },
  { path: "/login", name: "login", component: LoginView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
