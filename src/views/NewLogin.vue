<template>
  <NuevoLogin />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NuevoLogin from '../components/NuevoLogin.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NuevoLogin,
  },
});
</script>
