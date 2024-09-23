<template>
  <div class = "Container-app-shared">
      <div class ="Application">

        <v-app-bar title="Application bar"><h1>aca la app 1</h1></v-app-bar>

      </div>
      
      <v-navigation-drawer style="width: 200px;">
        <div class="custom-drawer-content">
          <v-list>
            <v-list-item>
             <h1>Aca la app 2</h1>
            </v-list-item>
           </v-list>
        </div>
      </v-navigation-drawer>
     
      <router-view style="width: 100vh;">
        Aca la app 3
      </router-view>
  </div>
  
</template>

<style scoped>

</style>