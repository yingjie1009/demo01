import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/index1",
    name: "index1",
    component: () => import("@/views/index1.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
