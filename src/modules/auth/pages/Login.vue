<template>
  <div>
    <Form />
    <Footer/>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Form from "@/modules/auth/components/LoginForm.vue";
import Footer from "@/modules/auth/components/LoginFooter.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    Form, Footer,
  },
});
</script>
