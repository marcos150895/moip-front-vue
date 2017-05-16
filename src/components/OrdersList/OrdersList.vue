<template>
  <div class="container">
    <campo-valor :argumento1="msg" argumento2="Santana" icone="./assets/bar-codel.svg">
    </campo-valor>
     
    <div id="linha">
    </div>
    
  </div>
</template>

<script>
import CampoValor from '../shared/campoValor/CampoValor.vue';

export default {
  name: 'orderslist',

  components: {

    'campo-valor': CampoValor
  },
  data () {
    return {
      msg: '2345 Pedidos encontrados '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 , h3, h4{
  font-weight: normal;
  text-align: center;
}

.container {
  width: 80%;
  margin-top: 5%;
  margin-left: auto;
	margin-right: auto;
}

#linha {
  border-bottom-color: white;
  border-style: solid;
  border-top: none;
  border-left:none;
  border-right: none;
}

</style>
