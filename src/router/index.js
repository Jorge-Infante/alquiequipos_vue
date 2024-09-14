import { createRouter, createWebHistory } from "vue-router";

import authRouter from "@/modules/auth/router";
import userRouter from "@/modules/users/router";

const routes = [
  {
    path: "/",
    ...authRouter,
  },
  {
    path: "/users",
    ...userRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
