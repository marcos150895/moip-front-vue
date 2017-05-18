<template>
  <div id="linha_tabela">
    <div id="status" class="">
      <icone></icone>
    </div>
    <div id="codigo" class="linha">
      {{codigo}}
    </div>
    <div id="icone_pag">
      <icone></icone>
    </div>
    <div id="meio_pagamento" class="linha">
      {{valor}}
    </div>
    <div id="atualizado" class="linha">
      {{atualizado}}
    </div>
    <div id="cliente" class="linha">
      <!-- componente -->
      <cliente :nome="nome" :email="email"></cliente>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon/Icon.vue'
  import Cliente from '../cliente/Cliente.vue'

  export default {

    components: {

      'icone': Icon,
      'cliente': Cliente
    },

    props: ['status', 'codigo', 'meio_pagamento', 'valor', 'atualizado', 'nome', 'email'],

    computed: {
      //fazer metodos para saber qual icone pelo status
    }
  }
</script>

<style scoped>
  #linha_tabela {
    margin-top: 1em;
    background-color: white;
    width: 100%;
    height: 16%;
    line-height: 200%;
    float: left;
    min-width: 200px;
    padding: 1.0%;
    border-radius: 5%;
  }

  #linha #status {
    width: 8%;
  }

  #linha_tabela #codigo {
    width: 20%;
    margin-left: 1em;
  }

  #linha_tabela #meio_pagamento {
    padding-left: 1em;
    width: 5%;
    position: relative;
    float: left;
  }

  #linha_tabela #valor {
    width: 10%;
    margin-left: 1.5em;
  }

  #linha_tabela #atualizado {
    width: 20%;
    margin-left: 1em;
  }

  #linha_tabela #cliente {
    width: 93%;
    margin-left: 1em;
    border-top-color: rgba(137, 76, 171, 0.5);
    border-style: dotted;
    border-left: none;
    border-bottom: none;
    border-right: none;
    padding-left: 0.2em;
  }

  .linha {
    min-width: 150px;
  }

  @media (min-width: 600px) {
    #linha_tabela,
    #linha_tabela #status img,
    #linha_tabela #codigo,
    #meio_pagamento,
    #meio_pagamento img,
    #linha_tabela #valor,
    #linha_tabela #atualizado,
    #linha_tabela #cliente {
      float: left;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela {
      margin-top: 1em;
      background-color: white;
      border-radius: 3em;
      width: 100%;
      height: 16%;
      line-height: 350%;
      float: left;
      min-width: 300px;
      padding: 1.0%;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela #cliente {
      width: 20%;
      margin-left: 1em;
      border-left-color: rgba(137, 76, 171, 0.5);
      border-style: dotted;
      border-top: none;
      border-bottom: none;
      border-right: none;
      padding-left: 1em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #meio_pagamento {
      width: 20%;
      margin-left: 1em;
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
      width: 20%;
      margin-left: 1em;
    }
  }
</style>
