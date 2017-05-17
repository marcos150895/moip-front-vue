<template>
  <div class="container">
    <campo-valor :argumento1="msg" argumento2="Santana" icone="">
    </campo-valor>

    <div id="line_separator">
    </div>

    <linha status="http://www.freeiconspng.com/uploads/blue-check-icon-13.png" codigo="AVSFSX-PAY"
    meio_pagamento="http://icons.iconarchive.com/icons/iconsmind/outline/512/Credit-Card-2-icon.png"
    valor="178,00" atualizado="2017-08-08 17h20" cliente="marcolino"></linha>
  </div>
</template>

<script>
  import CampoValor from '../shared/campoValor/CampoValor.vue';
  import Linha from '../shared/linha/Linha.vue'

  export default {
    name: 'orderslist',

    components: {

      'campo-valor': CampoValor,
      'linha': Linha
    },
    data() {
      return {
        msg: '2345 Pedidos encontrados '
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    text-align: center;
  }

  .container {
    width: 80%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }

  #line_separator {
    border-bottom-color: white;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
