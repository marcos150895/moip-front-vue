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
    color: #7C259A;
    float:left;
  }

   @media (min-width: 600px) {
    .icon-credit-card:before {
    content: "\e900";
    float: left;
    color: #7C259A;
    }
  }

</style>
