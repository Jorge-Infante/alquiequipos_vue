<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First name"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Last name"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
    <p>El nombre: {{ firstName }}</p>
    <p>Contraseña: {{ lastName }}</p>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length >= 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    lastName: "",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
};
</script>
