<template>
<div>
<v-data-table
    :headers="headers"
    :items="establecimientos"
    sort-by="calories"
    class="elevation-1"
    dense
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>ESTABLECMIENTOS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo Establecimiento</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.nombre" label="nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.direccion" label="Direccion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="editedItem.descripcion" label="Descripcion"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">

      <v-btn
        small
        class="mr-2"
        :to="'/admin/servicios/'+item.id"
      >
        servicios
      </v-btn>

      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    
  </v-data-table>

  <router-view></router-view>

</div>


  

</template>

<script>
import axios from 'axios'
import { urlbase, getHeader } from './../../config.js'

export default {
data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nombre Establecimiento',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Direccion: ', value: 'direccion' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        direccion: '',
        descripcion: ''
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      establecimientos: []
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Establecimiento' : 'Editar Establecimiento'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      
        axios.get(urlbase+"establecimiento", {headers: getHeader()})
            .then((res)=> {
                this.establecimientos = res.data.data

              }).catch((error) => {

              }).finally({

              })
     
      
      //this.initialize()
    },

    methods: {
      initialize () {
        
      },

      editItem (item) {
        this.editedIndex = this.establecimientos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.establecimientos.indexOf(item)
        if(confirm('¿Esta seguro de eliminar el registro?')){

          axios.delete(urlbase+"establecimiento/"+item.id, {headers: getHeader()})
              .then((res) => {
                console.log(res);
                this.establecimientos.splice(index, 1)
              })          
        }        
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          axios.put(urlbase+"establecimiento/"+this.editedItem.id, this.editedItem, {headers: getHeader()})
            .then((res)=> {
                console.log(res)

              }).catch((error) => {

              }).finally({

              })  

          Object.assign(this.establecimientos[this.editedIndex], this.editedItem)
        } else {
          
           axios.post(urlbase+"establecimiento", this.editedItem, {headers: getHeader()})
            .then((res)=> {
                console.log(res)

              }).catch((error) => {

              }).finally({

              })         


          this.establecimientos.push(this.editedItem)
          //this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>

</style>