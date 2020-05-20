<template>
  <div>
      <h2>Servicios de Establecmiento: {{ parametro }}</h2>

  </div>
</template>

<script>
export default {
    data(){
        return {
            parametro: this.$route.params.id
        }
    }

}
</script>

<style>

</style>