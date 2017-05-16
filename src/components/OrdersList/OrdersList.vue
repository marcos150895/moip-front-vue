<template>
  <div class="container">
    <h3>{{ msg }}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'orderslist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 , h3, h4{
  font-weight: normal;
  text-align: center;
}

.container {
  width: 80%;
  margin-top: 5%;
  margin-left: auto;
	margin-right: auto;
}

</style>
