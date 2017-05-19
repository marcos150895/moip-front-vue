<template>
  <div class="container">
    <div class="imagem">
      MS
    </div>
    <div class="detalhes">
      {{nome}}
    </div>
    <div class="email">
      {{email}}
    </div>
  
  </div>
</template>

<script>
  export default {
  
    props: ['nome', 'foto', 'email']
  }
</script>

<style scoped>
  .container {
    height: 4em;
  }
  
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
  
  .container .detalhes {
    font-size: 0.8em;
    margin-left: 25%;
  }
  
  .container .email {
    font-size: 0.8em;
    min-width: 130px;
    margin-left: 25%;
  }
  
  @media (min-width: 600px) {
    .container .detalhes {
      font-size: 0.8em;
    }
  }
  
  @media (min-width: 600px) {
    .container .email {
      font-size: 0.8em;
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
