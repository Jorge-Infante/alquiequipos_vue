<template>
    <div class="container_formList" >
        <form @submit.prevent="submit" class="table-Users"         >
            <section class="v-text-fiel">
                <v-text-field 
                    v-model="first_name"
                    :error-messages="errorMessages.first_name"
                    label="Nombre"
                ></v-text-field>

                <v-text-field
                    v-model="last_name"
                    :error-messages="errorMessages.last_name"
                    label="Apellido"
                ></v-text-field>

                <v-text-field
                    v-model="username"
                    :error-messages="errorMessages.username"
                    label="Usuario"
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :error-messages="errorMessages.email"
                    label="E-mail"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :type="'password'"
                    :error-messages="errorMessages.password"
                    label="Contraseña"
                ></v-text-field>
            </section>

            <section class="v-checkbox">
                <v-checkbox
                v-model="is_active"
                :error-messages="errorMessages.is_active"
                label="Activo"
            ></v-checkbox>

            <v-checkbox
                v-model="is_staff"
                :error-messages="errorMessages.is_staff"
                label="Staff"
            ></v-checkbox>

            <v-checkbox
                v-model="is_superuser"
                :error-messages="errorMessages.is_superuser"
                label="Superuser"
            ></v-checkbox>
            </section>

            

            <v-btn type="submit">Editar</v-btn>
            <v-btn @click="handleReset">Limpiar</v-btn>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password: "",
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            is_active: false,
            is_staff: false,
            is_superuser: false,
            errorMessages: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                is_active: "",
                is_staff: "",
                is_superuser: ""
            },
            form:{
                "id": "",
                "password": "",
                "last_login": "",
                "is_superuser": null,
                "username": "",
                "first_name": "",
                "last_name": "",
                "email": "",
                "is_staff": null,
                "is_active": null,
                "date_joined": "",
                "groups": [],
                "user_permissions": []
            }
        };
    },
    methods: {
        submit() {
            // Aquí puedes manejar el envío del formulario
            console.log({
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                email: this.email,
                password: this.password,
                is_active: this.is_active,
                is_staff: this.is_staff,
                is_superuser: this.is_superuser
            });
        },
        handleReset() {
            // Limpiar los campos del formulario
            this.password = "";
            this.username = "";
            this.first_name = "";
            this.last_name = "";
            this.email = "";
            this.is_active = false;
            this.is_staff = false;
            this.is_superuser = false;
        }
    }
};
</script>
<style scoped>


.v-checkbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

}
</style>