<template>
 
  <App />
  <UsersList />
  
</template>

<script>
import App from "@/modules/shared/components/App.vue";
import UsersList from "@/modules/users/components/UsersList.vue";
export default {
  components: {
    App,
    UsersList,
  },
  
};
</script>

<style></style>
