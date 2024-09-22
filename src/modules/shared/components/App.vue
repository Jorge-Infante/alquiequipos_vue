<template>
  <div class = "Container-app-shared">
      <div class ="Application">

        <v-app-bar title="Application bar"><h1>aca la app</h1></v-app-bar>

      </div>
      
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"><h1>aca la app</h1></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
  </div>
  
</template>

<style scoped>
.Application {
  width: 10px;
}


</style>