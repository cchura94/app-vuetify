<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>INGRESAR</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Ingrese su Correo"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="usuario.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Ingrese su Contraseña"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="usuario.password"
                  ></v-text-field>
                  {{ usuario }}
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="ingresar()">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import axios from 'axios'
import { urlbase, urllogin, limpiar_localStorage } from '../config.js'

export default {
  data(){
    return {
      usuario: {
          email: '',
          password: ''
        }
    }
  },
  methods: {
    ingresar(){
      axios.post(urllogin, this.usuario)
            .then((res)=>{
              console.log(res);
              if(res.data){
                localStorage.setItem("authUser", btoa(JSON.stringify(res.data)));
          
                this.$router.push({name: "Admin"}) //redireccionar
              }else{
                limpiar_localStorage()
              }
              
            })

    }
  }

}
</script>

<style>

</style>