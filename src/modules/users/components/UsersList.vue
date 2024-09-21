<template>
     <div class="table-container">
      <v-data-table :items="items" :headers="headers"></v-data-table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define la variable reactiva para los items
const items = ref([]);

// Define los encabezados de la tabla
const headers = [
    { text: 'ID', value: 'id' },
    { text: 'Contraceña', value: 'password' },
    { text: 'Nombre', value: 'first_name' },
    { text: 'Apellido', value: 'last_name' },
    { text: 'Usuario', value: 'username' },
    { text: 'Correo', value: 'email' },
    { text: 'is_staff', value: 'is_staff' },
    { text: 'Activo', value: 'is_active' },
    
    { text: 'Grupos', value: 'groups' },
    { text: 'Permiso', value: 'user_permissions' },
];

// Función para obtener los usuarios
const fetchUsers = async () => {
    try {
        const data = await axios.get('http://213.199.42.70/api/users/'); // Reemplaza con tu URL de API
        items.value = data.data; // Asigna los datos a la variable reactiva
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
};

// Llama a la función al montar el componente
onMounted(() => {
    fetchUsers();
});
</script>
<style>
.table-container {
    display: flex;
    flex-direction: column;
    height: 90%; /* Ajusta según sea necesario */
}

.table-container .v-data-table {
    flex-grow: 1; /* Esto permite que la tabla ocupe el espacio disponible */
}

.v-data-table .v-pagination {
    position: absolute; /* Mantener la paginación en la parte inferior */
    bottom: 0;
    width: 100%;
}
</style>