<template>
  <div class="container">
    <campo-valor :argumento1="orders.orders.length" argumento2="Santana" icone="">
    </campo-valor>

    <div id="line_separator">
    </div>
    <!-- Fazer tratamento do amount e icons tratamento da data-->
    <header-table></header-table>
    <linha v-for="order in order_by" status="http://www.freeiconspng.com/uploads/blue-check-icon-13.png" :codigo="order.id" meio_pagamento="http://icons.iconarchive.com/icons/iconsmind/outline/512/Credit-Card-2-icon.png" :valor="order.amount.total" :atualizado="order.createdAt"
      nome="Marcos Santana" email="mar"></linha>
  </div>
</template>

<script>
  import CampoValor from '../shared/campoValor/CampoValor.vue';
  import Linha from '../shared/linha/Linha.vue'
  import Header_table from '../shared/header_table/Header_table.vue'

  export default {
    name: 'orderslist',

    components: {

      'campo-valor': CampoValor,
      'linha': Linha,
      'header-table': Header_table
    },
    data() {
      return {
        msg: '2345 Pedidos encontrados ',
        orders: []
      }
    },

    created() {

      this.$http.get('https://sandbox.moip.com.br/v2/orders', {
          headers: {
            Authorization: 'OAuth dd367807ccfa4c44a4e74fa35f8c04b5_v2'
          }
        })
        .then(res => res.json())
        .then(orders => this.orders = orders, err => console.log(err));

    },
    computed: {
      order_by() {
        return _.orderBy(this.orders.orders, 'orders.amount');
      },
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
