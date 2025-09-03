import { DashboardView } from "@dashboard";
import { LoginView } from "@login";
import { createRouter, createWebHistory } from "vue-router";

import { useUser } from "@/modules/user";

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
  const { userData } = useUser();
  const isAuth = userData.value.isAuth;

  if (to.path === "/login" && isAuth) return false;

  if (to.path === "/dashboard" && !isAuth) {
    router.push("/login");
    return false;
  }
});

export default router;
