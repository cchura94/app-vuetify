<template>
  <v-app>

    <Menu v-if="!$route.meta.requiresAuth"></Menu>
    <MenuAdmin v-if="$route.meta.requiresAuth">MENU DE ADMIN</MenuAdmin>

    <v-content>
      <router-view></router-view>       
    </v-content>

    <Foot></Foot>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar'
import Menu from './components/navegacion/Menu'
import Foot from './components/navegacion/Foot'
import MenuAdmin from './components/navegacion/MenuAdmin'

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
    Menu,
    Foot,
    MenuAdmin
  },

  data: () => ({
    //
  }),
};
</script>
