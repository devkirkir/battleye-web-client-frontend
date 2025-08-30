import { LoginView } from "@auth";
import { DashboardView } from "@dashboard";
import { createRouter, createWebHistory } from "vue-router";

// TODO типизация

const routes = [
  { path: "/login", name: "login", component: LoginView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
