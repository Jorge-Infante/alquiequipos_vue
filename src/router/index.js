import { createRouter, createWebHistory } from "vue-router";

import authRouter from "@/modules/auth/router";

const routes = [
  {
    path: "/",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
