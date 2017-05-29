<template>
  <div id="app">
    <orders-list></orders-list>
  </div>
</template>

<script>
  import OrdersList from './components/OrdersList/OrdersList'

  export default {
    name: 'app',
    components: {
      OrdersList
    }
  }
</script>

<style>
  #app {
    font-family: Quicksand;
    font-size: 1em;
    font-style: normal;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1A237E;
  }

  @media(min-width: 600px) {
    #app {
      font-size: 1em;
    }
  }

  @media(min-width: 601px) {
    #app {
      font-size: 0.65em;
    }
  }

  @media(min-width: 820px) {
    #app {
      font-size: 0.75em;
    }
  }

  @media(min-width: 850px) {
    #app {
      font-size: 0.80em;
    }
  }

  @media(min-width:1100px) {
    #app {
      font-size: 1em;
    }
  }

  body {
    background: -webkit-linear-gradient(left, rgba(100, 181, 246, 1), rgba(30, 136, 229, 1));
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, rgba(100, 181, 246, 1), rgba(30, 136, 229, 1));
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, rgba(100, 181, 246, 1), rgba(30, 136, 229, 1));
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, rgba(100, 181, 246, 1), rgba(30, 136, 229, 1));
    /* Standard syntax (must be last) */
  }
</style>
