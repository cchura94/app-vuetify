<template>
  <div>
      <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/admin">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>INICIO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/establecimientos">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ESTABLECIMIENTOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/servicios">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>SERVICIOS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

      <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ADMINISTRACION</v-toolbar-title>

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
          <v-list-item @click="salir()">
            <v-list-item-title>SALIR</v-list-item-title>
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
            drawer: null,
            auth: verificaLogin()
        }
    },
    methods:{
        salir(){
            localStorage.clear();
            console.log(this.route)
        }
    }

}
</script>

<style>

</style>