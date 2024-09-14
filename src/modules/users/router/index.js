export default {
  name: "users",
  component: () =>
    import(
      /* webpackChunkName: "userLayout" */ "@/modules/users/layouts/UserLayout.vue"
    ),
  redirect: "users/userList",
  children: [
    {
      path: "userList",
      name: "user-userList",
      component: () =>
        import(
          /* webpackChunkName: "user-userList" */ "@/modules/users/pages/Users.vue"
        ),
    },
  ],
};
