<template lang="">
    <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Apellido</th>
          <th class="text-left">Usuario</th>
          
          <th class="text-left">Email</th>

        </tr>
      </thead>

      <tbody class="table-group-divider">
          <tr v-for="item in userList" :key="item.id" v-on:click= "editar(item.id)">
          <td>{{ item.id }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.username }}</td>
          
          <td>{{ item.email }}</td>
          
        </tr>  
      </tbody> 
     
    </table>
   


    </div>
</template>


<script>
import axios from 'axios';
export default {    
        name: "UsersList",
        data(){
            return {
                userList: null,
            }
        },
        methods: {
            editar(id){
                console.log(id);
            }
                
        },   
        mounted: function () {
            let direction = "http://213.199.42.70/api/users/"; // Agrega "http://" al inicio
            axios.get(direction).then(response => { // Cambia "data" a "response"
            this.userList = response.data; // Asigna los datos a userList
            console.log("Fetched data: ", response.data); // Loguea la respuesta
            })   
            .catch(error => {
                console.error("Error fetching users:", error);
                // Aquí puedes manejar el error de forma más específica
            }); 
        },
        
        
    }
</script>

<style scoped>
.container{
    width: 100%;
    overflow-x: auto;
}
.table{
    width: 100%; /* La tabla ocupa todo el ancho del contenedor */
    table-layout: fixed; /* Distribuye uniformemente el ancho de las columnas */
    
}
.container th, .table td {
    border: 1px solid #ddd; /* Bordes de las celdas */
    padding: 8px; /* Espaciado interno en las celdas */
    text-align: left; /* Alineación del texto en las celdas */
    word-wrap: break-word; /* Permite el ajuste de texto si es muy largo */
}
</style>