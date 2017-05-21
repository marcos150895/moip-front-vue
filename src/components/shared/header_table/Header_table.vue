<template>
  <div id="linha_tabela">
    <div id="status">
      <a @click="ordenar('status')" style="cursor: pointer;"> Status </a>
     </div>
    <div id="codigo" class="linha alinhar_esquerda">
      Código
    </div>
    <div id="icone_pag" class="">
      Meio
    </div>
    <div id="meio_pagamento" class="linha ">
      R$
    </div>
    <div id="atualizado" class="linha">
      Atualizado
    </div>
    <div id="atualizado" class="linha">
      Cliente
    </div>
  </div>
</template>

<script>
export default {

  methods: {

    ordenar(event) {
      alert(event);
    }
  }
}
</script>

<style scoped>


  .linha {
    min-width: 150px;
  }

  .alinhar_esquerda {
    margin-left: 5%;
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
