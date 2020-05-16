<template>
<v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link v-for="(i, index) in items" :key="index" :to="i.url">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ i.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
    
    </v-app>
    
</template>

<script>
export default {
    data(){
        return {
            drawer: null,
            items: [
                { title: 'INICIO', icon: 'mdi-dashboard', url: '/'  },
                { title: 'CUENTA', icon: 'mdi-account_box', url: '/about' },
                { title: 'Admin', icon: 'mdi-gavel', url: '/about' },
            ],
        }
    }

}
</script>

<style>

</style>