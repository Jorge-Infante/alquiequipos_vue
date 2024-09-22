<template lang="">
    <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="text-left">Nombre de usuario</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>

      <tbody class="table-group-divider">

        <th class="text">Etian</th>
        <th class="text">ethiamgt@gmail.com</th>

          <tr v-for="item in users" :key="item.id">
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
        </tr>  
      </tbody>
      <br>
    </table>
   


    </div>
</template>


<script>
import axios from 'axios';
export default {    
        name: "UsersLisComp",
        data(){
            return {
                usersList: null,
                pages: 1,
            }
        },   
        mounted() {
            let direction = 'http://213.199.42.70/api/users/' + this.pages;
            axios.get(direction).then( data =>{
                this.usersList = data.data;
            })   
            .catch(error => {
                console.error("Error fetching users:", error);
                // Aquí puedes manejar el error de forma más específica
            }); 
        },
        
    }
</script>