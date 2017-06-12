<template>
  <div id="linha_tabela">
    <div id="status">
      <a @click="ordenar('status')" class="ponteiro"> Status </a>
    </div>
    <div id="codigo" class="linha alinhar_esquerda">
      <a @click="ordenar('id')" class="ponteiro"> Código </a>
    </div>
    <div id="icone_pag" class="">
      <a @click="ordenar('payments[0].fundingInstrument.method')" class="ponteiro"> Meio </a>
    </div>
    <div id="meio_pagamento" class="">
      <a @click="ordenar('amount.total')" class="ponteiro"> R$ </a>
    </div>
    <div id="atualizado" class="linha">
      <a @click="ordenar('updatedAt')" class="ponteiro"> Atualizado </a>
    </div>
    <div id="cliente" class="linha">
      <a @click="ordenar('customer.fullname')" class="ponteiro"> Cliente </a>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'headerTable',

    methods: {

      ordenar(event) {
        const {
          table_ordenacao,
          table_campo
        } = this.$store.state.ordenacao
        this.aux = table_ordenacao == 'desc' ? 'asc' : 'desc';
        console.log(this.aux);

        const payload = {
          table_ordenacao: this.aux,
          table_campo: event
        }
        this.$store.commit('CHANGE_ORDENATION', payload)
        this.$emit('ordenar-tabela', event);
      }
    }
  }
</script>

<style scoped>
  #linha_tabela {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    color: #fff;
  }

  .ponteiro {
    cursor: pointer;
  }

  @media(max-width: 600px) {
    #linha_tabela {
      display: none;
    }
    #linha_tabela #icone_pag {
      margin-left: 3em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #status a:hover,
    #linha_tabela #codigo a:hover,
    #linha_tabela #meio_pagamento a:hover,
    #linha_tabela #atualizado a:hover,
    #linha_tabela #icone_pag a:hover,
    #linha_tabela #cliente a:hover {
      color: #283593;
      font-size: 1.05em;
    }
  }
</style>
