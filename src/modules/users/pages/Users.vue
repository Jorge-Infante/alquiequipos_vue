<template>
  <v-card>
    <v-container>
      <v-row> </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "usersPage",
  computed: {
    ...mapState("auth_store", ["user"]),
  },
  created() {
    if (this.user) {
      console.log(this.user.access);
    }
  },
};
</script>

<style></style>
