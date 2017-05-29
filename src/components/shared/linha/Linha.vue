<template>
  <div id="linha_tabela">
    <div id="status" class="alinhar_esquerda">
      <icone :status="status" escolha="status"></icone>
    </div>
    <div id="codigo" class="linha alinhar_esquerda">
      {{codigo}}
    </div>
    <div id="habilitado_br">
      <br>
    </div>
    <div id="icone_pag" class="alinhar_esquerda">
      <icone :status="meio_pagamento" escolha="pagamento"></icone>
    </div>
    <div id="meio_pagamento" class="linha alinhar_esquerda">
      {{formatarAmount}}
    </div>
    <div id="atualizado" class="linha">
      {{formatarData}}
    </div>
    <div id="habilitado_br">
      <br>
    </div>
    <!-- componente  hidden do botão esconder cliente-->
    <transition name="cliente-fade">
      <div id="cliente" class="linha" v-if="esconde">
        <cliente :nome="nome" :email="email"></cliente>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon/Icon.vue'
  import Cliente from '../cliente/Cliente.vue'

  export default {

    name: 'linha',

    components: {

      'icone': Icon,
      'cliente': Cliente
    },

    props: ['status', 'codigo', 'meio_pagamento', 'valor', 'atualizado', 'nome', 'email', 'esconde'],

    computed: {
      //fazer metodos para saber qual icone pelo status (agora fazer no componente de icone)
      formatarData() {
        return `${this.atualizado.substring(8,10)}/${this.atualizado.substring(5,7)}/${this.atualizado.substring(2,4)}
                                 - ${this.atualizado.substring(11,13)}h${this.atualizado.substring(14,16)}`;
      },

      formatarAmount() {
        let aux = this.valor + "";
        if (aux.length <= 2)
          return `0,${aux.substring(0,2)}`;
        let fim = aux.length - 2;
        return `${aux.substring(0,fim)},${aux.substring(fim)}`;
      }
    }
  }
</script>

<style scoped>
  #linha_tabela {
    margin-top: 1em;
    background-color: white;
    width: 100%;
    line-height: 200%;
    border-radius: 5%;
    min-width: 200px;
    padding: 10px;
    font-size: 0.9em;
  }

  .alinhar_esquerda {
    margin-left: 5%;
  }

  #linha_tabela #status {}

  #linha_tabela #codigo {
    margin-left: 1em;
    float: left;
  }

  #linha #icone_pag {
    padding-left: 1em;
  }

  #linha_tabela #meio_pagamento {
    position: relative;
    float: left;
    min-width: 50px
  }

  #linha_tabela #valor {
    margin-left: 1.5em;
  }

  #linha_tabela #cliente {
    width: 87%;
    margin-left: 1em;
    border-top-color: rgba(137, 76, 171, 0.5);
    border-style: dotted;
    border-left: none;
    border-bottom: none;
    border-right: none;
    padding-left: 0.2em;
    line-height: 150%;
  }

  #linha_tabela #atualizado {
    float: left;
  }

  @media (min-width: 600px) {
    #linha_tabela #codigo,
    #linha_tabela #meio_pagamento,
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
      min-width: 300px;
      padding: 0.6%;
      float: left;
    }
  }

  @media (min-width: 600px) {
    #linha_tabela #cliente {
      width: 30%;
      margin-left: 1em;
      border-left-color: rgba(137, 76, 171, 0.5);
      border-style: dotted;
      border-top: none;
      border-bottom: none;
      border-right: none;
      padding-left: 1em;
      padding-right: 1em;
      margin-top: 0%;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #meio_pagamento {
      margin-left: 1em;
      width: 5%;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #valor {
      margin-left: 1.5em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #atualizado {
      margin-left: 1em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #status {
      padding-left: 1em;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #habilitado_br {
      display: none;
    }
  }

  @media(min-width: 600px) {
    .alinhar_esquerda {
      margin-left: 1%;
    }
  }

  @media(min-width: 600px) {
    #linha_tabela #codigo {
      margin-left: 1em;
      margin-right: 1em;
      float: left;
    }
  }

  @media(min-width:400px) {
    .linha {
      min-width: 12em;
    }
  }

  #linha_tabela #cliente,
  .cliente-fade-leave-active {
    -webkit-transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -o-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
  }
</style>
