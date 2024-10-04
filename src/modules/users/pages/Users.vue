<template>
  <v-card>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nombre de usuario</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-btn @click="showUsers">show</v-btn>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "usersPage",
  computed: {
    ...mapState("auth_store", ["user"]),
    ...mapState("user_store", ["users"]),
  },
  methods: {
    ...mapActions("shared_store", ["getEnty"]),
    showUsers() {
      console.log("usuarios: ", this.users);
    },
  },
  created() {
    const params = {
      url: `users/`,
      enty: "users",
      mutation: "SET_GLOBAL_STATE",
    };
    this.getEnty(params);
  },
  watch: {
    users(newValue) {
      console.log("USUARIOOOOOOS:", newValue);
    },
  },
};
</script>

<style></style>
