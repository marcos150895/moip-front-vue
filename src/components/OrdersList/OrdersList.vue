<template>
  <div class="container">
    <m-header v-on:esconder-="visualizar"></m-header>
    <div id="line_separator"></div>
    <header-table v-on:ordenar-tabela="ordenar_tabela"></header-table>
    <!-- key é obrigatorio pois é chave unic para o vfor-->
    <!-- key se perde no número 70 pois o order está triplicado-->
    <linha v-for="order in order_by" :key="order.payments.id" :status="order.status" :codigo="order.id" :meio_pagamento="order.payments[0].fundingInstrument.method" :valor="order.amount.total" :atualizado="order.updatedAt" :nome="order.customer.fullname"
      :email="order.customer.email" :esconde="visualiza"></linha>
    <!-- footer configurar ainda -->
    <div id="line_separator" style="margin-top:2em;">
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
  import Linha from '../shared/linha/Linha.vue'
  import Header_table from '../shared/header_table/Header_table.vue'
  import Header from '../shared/header/Header.vue'
  import Footer from '../shared/footer/Footer.vue'

  export default {
    name: 'orderslist',

    components: {
      'linha': Linha,
      'header-table': Header_table,
      'm-footer': Footer,
      'm-header': Header
    },
    data() {
      return {
        orders: [],
        table_ordenacao: 'asc',
        table_campo: 'amount.total',
        visualiza: true,
        limite: 10
      }
    },

    created() {

      this.$http.get(`https://sandbox.moip.com.br/v2/orders?filters=&limit=${this.limite}`, {
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
        const {
          table_ordenacao,
          table_campo
        } = this.$store.state.ordenacao
        this.table_ordenacao = table_ordenacao
        this.table_campo = table_campo
      },
      visualizar() {
        const {
          value
        } = this.$store.state.estado_cliente
        this.visualiza = value
      },
      valorTotal() {

      }
    }

  }
</script>


<style scoped>
  .container {
    width: 80%;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  #line_separator {
    width: 107%;
    border-bottom-color: white;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-top: 0.5em;
  }

  @media(min-width: 600px) {
    .container {
      width: 80%;
      margin-top: 3.5%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: auto;
    }
    #line_separator {
      width: 100%;
      border-bottom-color: white;
      border-style: solid;
      border-top: none;
      border-left: none;
      border-right: none;
      margin-top: 0.4em;
    }
  }
</style>
