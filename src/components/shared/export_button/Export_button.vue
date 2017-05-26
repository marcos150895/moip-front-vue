<template>
  <div class="container">
    <div class="imagem">
      <img src="https://cdn3.iconfinder.com/data/icons/photography-13/100/photography-37-256.png">
    </div>
    <div class="texto">
      <label>EXPORTAR PLANILHA </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'export',

  }
</script>

<style scoped>
  .container {
    padding-left: 10%;
  }

  .container .imagem {
    float: left;
  }

  .container .imagem img {
    width: 30px;
    height: 30px;
  }

  .container .texto {
    margin-top: 0.3em;
  }

  @media(min-width: 600px) {
    .container {
      float: left;
      width: 40%;
      padding-left: 0%;
    }
  }
</style>
