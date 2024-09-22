<template>
    <div>
        <form @submit.prevent="submit">
            <v-text-field 
                v-model="first_name"
                :error-messages="errorMessages.first_name"
                label="First Name"
            ></v-text-field>

            <v-text-field
                v-model="last_name"
                :error-messages="errorMessages.last_name"
                label="Last Name"
            ></v-text-field>

            <v-text-field
                v-model="username"
                :error-messages="errorMessages.username"
                label="Username"
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
                label="Password"
            ></v-text-field>

            <v-checkbox
                v-model="is_active"
                :error-messages="errorMessages.is_active"
                label="Active"
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

            <v-btn type="submit">Submit</v-btn>
            <v-btn @click="handleReset">Clear</v-btn>
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
<style lang="">

</style>