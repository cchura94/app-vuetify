<template>
  <div>
      <h2>Servicios de Establecmiento: {{parametro}}</h2>
      
      <v-text-field type="text" label="Nombre servicio" v-model="servicio.nombre"></v-text-field>
      <v-text-field type="number" step="0.01" label="Precio servicio" v-model="servicio.precio"></v-text-field>
      <v-text-field type="time" label="Duracion servicio" v-model="servicio.duracion"></v-text-field>
      
      <button @click="guardarServicio()">Guardar</button>
<hr>
      <table border="1">
          <tr>
              <td>NOMBRE</td>
              <td>PRECIO</td>
              <td>DURACION</td>
              <td>ACCIONES</td>
          </tr>
          <tr v-for="serv in servicios.servicios" :key="serv.id">
              <td>{{ serv.nombre }}</td>
              <td>{{ serv.precio }}</td>
              <td>{{ serv.duracion }}</td>
              <td>ACCIONES</td>
          </tr>
      </table>
      



  </div>
</template>

<script>
import { urlbase, getHeader } from '../../../config.js'
import axios from 'axios'
export default {
    data(){
    return {
      parametro: this.$route.params.id,
      servicio: {
            nombre: '',
            precio: '',
            duracion: '',
            establecimiento_id: this.$route.params.id
      },
      servicios: []

    }
  },
  created(){
      axios.get(urlbase + "establecimiento/"+this.parametro+"/servicios", {headers: getHeader()})
            .then((res) => {
                console.log(res);
                this.servicios = res.data
            })
  },
  methods: {
      guardarServicio(){
          axios.post(urlbase+"servicio", this.servicio, {headers:getHeader()})
          .then((res) => {
              console.log(res);
          });


      }
  }
}
</script>

<style>

</style>