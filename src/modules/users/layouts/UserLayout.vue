<template>
 
  <App />

  <div class = "container-Users-Layout">
  <FormUsers />
  <UsersList />

  </div>
  
</template>

<script>
import App from "@/modules/shared/components/App.vue";
import UsersList from "@/modules/users/components/UsersList.vue";
import FormUsers from "@/modules/users/components/FormUsers.vue";
export default {
  components: {
    App,
    UsersList,
    FormUsers,  
  },
  
};
</script>

<style>

.container-Users-Layout{
  display: flex;
  justify-content: space-between;
  
}

</style>
