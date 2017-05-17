<template>
  <div>
    <div id="texto">{{ argumento1 }} {{argumento2}}</div>
  </div>
</template>

<script>
  export default {

    props: ['argumento1', 'argumento2', 'icone'],

    computed: {

    }
  }

</script>

<style scoped>
  h3 {
    color: #0D47A1;
  }

  #texto {
    font-size: 1em;
    margin-bottom: 1em;
  }

  #texto img {
    width: 1em;
    height: 1em;
    color: white;
  }


</style>
