<template>
 
  <App />

  <div class = "container-Users-Layout">
  <div class="FormUser_Container">
    <FormUsers />
  </div>
  <div class="UsersLisrt_Container">
    <UsersList />
  </div>

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
.FormUser_Container{
  display: flex;
 

}

</style>
