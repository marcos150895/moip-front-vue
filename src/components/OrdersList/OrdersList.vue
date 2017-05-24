<template>
  <div class="container">
    <campo-valor :argumento1="orders.orders.length" argumento2="123.00">
    </campo-valor>


    <div id="line_separator">
    </div>
    <!-- Fazer tratamento do amount e icons tratamento da data-->
    <header-table v-on:ordenar-tabela="ordenar_tabela"></header-table>
    <linha v-for="order in order_by" :status="order.status" :codigo="order.id" :meio_pagamento="order.payments[0].fundingInstrument.method" :valor="order.amount.total" :atualizado="order.updatedAt" :nome="order.customer.fullname" :email="order.customer.email"></linha>


    <!-- footer criar -->
  </div>
</template>

<script>
  import CampoValor from '../shared/campoValor/CampoValor.vue';
  import Linha from '../shared/linha/Linha.vue'
  import Header_table from '../shared/header_table/Header_table.vue'
  import Export_button from '../shared/export_button/Export_button.vue'

  export default {
    name: 'orderslist',

    components: {

      'campo-valor': CampoValor,
      'linha': Linha,
      'header-table': Header_table,
      'export-button': Export_button
    },
    data() {
      return {
        msg: '2345 Pedidos encontrados ',
        orders: [],
        table_ordenacao: 'asc',
        table_campo: 'amount.total'
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
        return _.orderBy(this.orders.orders, this.table_campo, this.table_ordenacao);
      }
    },

    methods: {
      ordenar_tabela() {
        console.log(this.orders.orders)
        const {
          table_ordenacao,
          table_campo
        } = this.$store.state.ordenacao
        this.table_ordenacao = table_ordenacao
        this.table_campo = table_campo
      }
    },

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
    width: 107%;
    border-bottom-color: white;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  @media(min-width: 600px) {
    #line_separator {
      width: 100%;
      border-bottom-color: white;
      border-style: solid;
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }
</style>
