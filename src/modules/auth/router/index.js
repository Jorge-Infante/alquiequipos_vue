export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: "authLayout" */ "@/modules/auth/layouts/authLayout.vue"
    ),
  redirect: "/login",
  children: [
    {
      path: "login",
      name: "auth-login",
      component: () =>
        import(
          /* webpackChunkName: "login" */ "@/modules/auth/pages/Login.vue"
        ),
    },
  ],
};
