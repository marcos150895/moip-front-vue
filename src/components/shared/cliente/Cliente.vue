<template>
  <div class="container">
    <div class="imagem detalhes">
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
  .container .imagem {
    border-radius: 50%;
    background-position: -15px -15px;
    height: 3em;
    width: 3em;
    background-color: purple;
    margin-top: 0.4em;
  }

  @media (min-width: 600px) {
    .container .detalhes {
      float: left;
    }
  }

  .container .datalhes {
    font-size: 0.8em;
  }

  .container .email {
    font-size: 0.8em;
  }
</style>
