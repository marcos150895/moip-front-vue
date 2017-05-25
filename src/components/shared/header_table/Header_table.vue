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
    <div id="meio_pagamento" class="linha ">
       <a @click="ordenar('amount.total')" class="ponteiro"> R$ </a>
    </div>
    <div id="atualizado" class="linha">
      <a @click="ordenar('updatedAt')" class="ponteiro"> atualizado </a>
    </div>
    <div id="atualizado" class="linha">
      <a @click="ordenar('customer.fullname')" class="ponteiro"> Cliente </a>
    </div>
  </div>
</template>

<script>
export default {

  methods: {

    ordenar(event) {
      const { table_ordenacao, table_campo } = this.$store.state.ordenacao
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


  .linha {
    min-width: 8em;
  }

  .alinhar_esquerda {
    margin-left: 2em;
  }

  .ponteiro{
    cursor: pointer;
  }

  @media(max-width: 600px) {
    #linha_tabela {
      display:none ;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela,
    #linha_tabela #codigo,
    #linha #meio_pagamento,
    #linha_tabela #atualizado,
    #linha_tabela #status,
    #linha_tabela #icone_pag,
    #linha_tabela #cliente {
      float: left;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela {
      margin-top: 1em;
      color: white;
      width: 100%;
      height: 16%;
      line-height: 100%;
      min-width: 300px;
      float: left;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela #cliente {
      width: 10%;
      margin-left: 1em;
      padding-left: 1em;
      padding-right: 1em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #meio_pagamento {
      width: 3%;
      margin-left: 0.5em;
      float: left;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #valor {
      width: 10%;
      margin-left: 1.5em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #atualizado {
      width: 10%;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #status {
      width: 6%;
      padding-left: 1em;
    }
  }

</style>
