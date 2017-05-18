<template>
  <div>
    <span class="icon-credit-card"></span>
  </div>
</template>
<script >

 export default {

    props: ['url' , 'color']
 }

</script>
<style scoped>
  .icon-credit-card:before {

    content: "\e900";
    float: left;
    margin-top: 1.5%;
    color: #7C259A;
  }

</style>
