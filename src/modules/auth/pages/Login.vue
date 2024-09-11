<template>
  <Login />
</template>

<script>
import { defineComponent } from "vue";

// Components
import Login from "@/modules/auth/components/LoginForm.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    Login,
  },
});
</script>
