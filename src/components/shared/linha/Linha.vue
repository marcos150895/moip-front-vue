<template>
  <div id="linha_tabela">
    <div id="status" class="">
      <span class="icon-credit-card"></span>
    </div>
    <div id="codigo" class="linha">
      {{codigo}}
    </div>
    <div id="icone_pag">
      <span class="icon-credit-card"></span>
    </div>
    <div id="meio_pagamento" class="linha">
      {{valor}}
    </div>
    <div id="atualizado" class="linha">
      {{atualizado}}
    </div>
    <div id="cliente" class="linha">
      <!-- componente -->
      {{cliente}}
    </div>
  </div>
</template>

<script>
  export default {
  
    props: ['status', 'codigo', 'meio_pagamento', 'valor', 'atualizado', 'cliente'],
  
    computed: {
      //fazer metodos para saber qual icone pelo status
    }
  }
</script>

<style scoped>
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
  
  #linha #status {
    width: 8%;
  }
  
  #linha_tabela #codigo {
    width: 25%;
    margin-left: 1em;
  }
  
  #linha_tabela #meio_pagamento {
   padding-left: 1em;
    width: 5%;
  }

  #linha_tabela #valor {
    width: 12%;
    margin-left: 1.5em;
  }
  
  #linha_tabela #atualizado {
    width: 20%;
    margin-left: 1em;
  }
  
  #linha_tabela #cliente {
    width: 20%;
    margin-left: 1em;
    border-left-color: purple;
    border-style: dashed;
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding-left: 1em;
  }
  
  .linha {
    min-width: 150px;
  }
  
  .icon-credit-card:before {
    content: "\e900";
    float: left;
    margin-top: 1.5%;
  }
  

  #icone_pag .icon-credit-card:before {
    content: "\e900";
    margin-top: 2.0%;
  }
</style>
