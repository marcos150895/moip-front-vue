<template>
  <div class="container">
    <div class="imagem">
      MS
    </div>
    <div class="detalhes">
      {{formatarNome}}
    </div>
    <div class="email">
      {{formatarEmail}}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cliente',

    props: ['nome', 'foto', 'email'],

    computed:{

       formatarNome(){
          return `${this.nome.substring(0, 14)}..`
      },

      formatarEmail(){

        return `${this.email.substring(0,12)}..`;
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 3em;
  }

  .container .imagem {
    border-radius: 50%;
    background-position: -10px -10px;
    height: 2.0em;
    width: 2.0em;
    background-color: purple;
    margin-top: 0.2em;
    text-align: center;
    line-height: 2.2em;
    font-size: 1.0em;
    float: left;
    background: -webkit-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, rgba(148, 0, 211, 1), rgba(138, 43, 226, 0.6));
    color: white;
  }

  .container .detalhes {
    font-size: 0.8em;
    margin-left: 18%;
    letter-spacing: 0.2em;
    margin-top: 0.3em;
  }

  .container .email {
    font-size: 0.8em;
    margin-left: 18%;
    letter-spacing: 0.1em;
    line-height: 1.2em;
  }

  @media (min-width: 600px) {
    .container .detalhes {
      font-size: 0.8em;
      line-height: 300%;
      margin-left: 2.5em;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }
  }

  @media (min-width: 600px) {
    .container .email {
      font-size: 0.8em;
      line-height: 0%;
      margin-left: 2.5em;
      letter-spacing: 0.1em;
    }
  }

  @media (min-width: 600px) {
    .container .detalhes .inicial {
      text-align: center;
    }
  }

  @media (min-width: 600px) {
    .container .imagem {
      border-radius: 50%;
      background-position: -10px -10px;
      height: 3em;
      width: 3em;
      background-color: purple;
      margin-top: 0.4em;
      text-align: center;
      line-height: 2.9em;
      font-size: 1.0em;
      float: left;
    }
  }
</style>
