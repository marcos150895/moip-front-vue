<template>
  <div class="container">
    <div id="texto">{{ argumento1 }} pedidos encontrados | No valor total de {{argumento2}}</div>
  </div>
</template>

<script>
  export default {

    props: ['argumento1', 'argumento2'],

    computed: {

    }
  }
</script>

<style scoped>
  .container {
    width: 80%;
  }

  #texto {
    font-size: 1em;
    margin-bottom: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    margin-top: 12%;
  }

  @media(min-width: 600px) {
    .container {
      float: left;
      width: 60%;
    }
  }

  @media(min-width: 600px) {
    #texto {
      font-size: 1em;
      font-weight: bold;
      margin-bottom: 1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: left;
      float: left;
      margin-top: 1%;
    }
  }
</style>
