<template>
  <div>
      <h1>publicaciones</h1>
      <h1 v-if="estado" >cargando...</h1>
      
      <v-container>
        <v-row>
          <v-col 
          v-for="(d, index) in datos.data" 
          :key="index"
          cols="12"
          md="4"
          lg="3"
          >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">{{d.countryregion}}</v-list-item-title>
                <v-list-item-subtitle> Confirmados: {{d.confirmed}}</v-list-item-subtitle>
                <v-list-item-subtitle>Recuperados: {{d.recovered}}</v-list-item-subtitle>
                <v-list-item-subtitle>Fallecidos: {{d.deaths}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                :color="(d.confirmed < 3000)?'green':(d.confirmed >= 3000 && d.confirmed < 10000)?'orange':'red'"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Button</v-btn>
              <v-btn text>Button</v-btn>
            </v-card-actions>
          </v-card>
          
          </v-col>
        </v-row>
      </v-container>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      datos: [],
      estado:true
    }
  },
  created(){
    console.log("Created");
  },
  mounted(){
    console.log("Mounted");
    axios
      .get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
      .then((response) => {
        this.datos = response
        this.estado = false        
      })

      
  },
  methods: {
    
  }

}
</script>

<style>

</style>