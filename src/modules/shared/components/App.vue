<template>
  <div class = "Container-app-shared">
      <div class ="Application">

       <AppBar />

      </div>
      
      <v-navigation-drawer style="width: 200px;">
        <div class="custom-drawer-content">
          <OptionsList />
        </div>
      </v-navigation-drawer>
     
      <router-view style="width: 100vh;">
        Aca la app 3
      </router-view>
  </div>
  
</template>
<script>
import OptionsList from "@/modules/shared/components/sideList/OptionsList.vue"
import AppBar from "@/modules/shared/components/ListHead/AppBar.vue"

export default{
  components: {
    OptionsList,
    AppBar,

  }
}


</script>

<style scoped>
  
</style>