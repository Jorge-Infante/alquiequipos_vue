<template>
 
  <App />

  <div class = "container-Users-Layout">
  <!--<div class="FormUser_Container">
    <FormUsers />
  </div>-->
  <div class="UsersLisrt_Container">
    <UsersList />
  </div>

  </div>
  
</template>

<script>
import App from "@/modules/shared/components/App.vue";
import UsersList from "@/modules/users/components/UsersList.vue";
//import FormUsers from "@/modules/users/components/FormUsers.vue";
export default {
  components: {
    App,
    UsersList,
    //FormUsers,  
  },
  
};
</script>

<style>

.container-Users-Layout {
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  width: 100%; /* Asegúrate de que ocupe todo el ancho disponible */
  
}

/*.FormUser_Container {
  flex: 0 0 40%; /* Ocupa el 40% del contenedor 
  margin-right: 30px;
}*/

.UsersList_Container {
  flex: 0 0 60%; /* Ocupa el 60% del contenedor */
}

/* Para asegurarte de que los elementos hijos no sobrepasen el contenedor */
/*.FormUser_Container,*/ 
.UsersList_Container {
  box-sizing: border-box; /* Evita que el padding o el border crezcan el tamaño de los elementos */
  
}
</style>
