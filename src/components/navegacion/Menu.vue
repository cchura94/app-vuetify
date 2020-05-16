<template>
  <div>
      <v-app-bar
      color="deep-purple accent-4"
      dark
    >

      <v-toolbar-title>Empresa</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/publicacion">
        <v-icon>mdi-post</v-icon>
      </v-btn>

      <v-btn icon to="/contacto">
        <v-icon>mdi-message</v-icon>
      </v-btn>

      <v-btn icon :to="(auth)?'/admin':'/login'">
        <v-icon>mdi-account</v-icon>
      </v-btn>


      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { verificaLogin } from '../../config.js'

export default {
  data(){
    return{
      auth: verificaLogin()
    }
  }

}
</script>

<style>

</style>