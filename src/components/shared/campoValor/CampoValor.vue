<template>
  <div>
    <div id="texto"><img :src="icone">{{ argumento1 }} {{argumento2}} {{icone}} </div>
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
</style>
