<template>
  <div class="container-cliente">
    <div class="imagem">
      {{formatarSigla}}
    </div>
    <div class="cliente-detalhes">
      <div class="detalhes">
        {{formatarNome}}
      </div>
      <div class="email">
        {{formatarEmail}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cliente',

    props: ['nome', 'foto', 'email'],

    computed: {

      formatarNome() {
        return `${this.nome.substring(0, 18)}..`
      },

      formatarEmail() {

        return `${this.email.substring(0, 18)}..`;
      },

      formatarSigla() {
        let aux = this.nome.split(" ");
        if (aux.length > 1)
          return `${aux[0].substring(0,1)}${aux[1].substring(0,1)}`;
        return `${aux[0].substring(0,1)}`;
      }
    }
  }
</script>

<style scoped>
  .container-cliente {
    display: flex;
    margin-top: 0.5em;
  }

  .container-cliente .cliente-detalhes {
    width: 15em;
  }

  .container-cliente .imagem {
    border-radius: 50%;
    background-position: -10px -10px;
    height: 2.0em;
    width: 2.0em;
    background-color: purple;
    margin-top: 0.3em;
    text-align: center;
    line-height: 2.2em;
    font-size: 1.0em;
    background: -webkit-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    background: -o-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    background: -moz-linear-gradient(right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    background: linear-gradient(to right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    color: white;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .container-cliente .detalhes {
    font-size: 0.8em;
    margin-left: 0.7em;
    letter-spacing: 0.2em;
    font-weight: bold;
  }

  .container-cliente .email {
    font-size: 0.8em;
    margin-left: 0.7em;
    letter-spacing: 0.1em;
    line-height: 1.2em;
  }

  @media(min-width: 600px) {
    .container-cliente {
      margin-top: 0em;
    }
    .container-cliente .detalhes {
      font-size: 0.8em;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-top: 0.3em;
    }
    .container-cliente .email {
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }
    .container-cliente .detalhes .inicial {
      text-align: center;
    }
    .container-cliente .imagem {
      height: 3em;
      width: 3em;
      margin-top: 0.2em;
      text-align: center;
      line-height: 3.0em;
      font-size: 1.0em;
      border-radius: 50%;
      background-position: -10px -10px;
      background-color: purple;
      background: -webkit-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
      background: -o-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
      background: -moz-linear-gradient(right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
      background: linear-gradient(to right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
      color: white;
    }
  }
</style>
