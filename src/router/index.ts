import { DashboardView } from "@dashboard";
import { LoginView } from "@login";
import { createRouter, createWebHistory } from "vue-router";

import { useAuth } from "@/modules/auth";

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

router.beforeEach((to) => {
  const { authData, checkAuth } = useAuth();
  const isAuth = authData.value.isAuth;

  checkAuth();

  if (to.path === "/login" && isAuth) return false;

  if (to.path === "/dashboard" && !isAuth) {
    router.push("/login");
    return false;
  }
});

export default router;
