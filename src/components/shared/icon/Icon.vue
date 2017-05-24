<template>
  <div>
    <span :class="escolher_icone"></span>
  </div>
</template>

<script>
  export default {

    props: ['status', 'color', 'escolha'],

    computed: {

      escolher_icone() {

        if (this.escolha == 'status') {
          return this.status == 'PAID' ? 'icon icon-label-check estilo' : 'icon icon-label-error estilo';
        } else if (this.escolha == 'pagamento') {
          if (this.status == 'CREDIT_CARD')
            return 'icon icon-credit-card estilo';
          else if (this.status == 'BOLETO')
            return 'icon icon-bar-codel estilo';
        } else {
          return 'icon icon-label-empty estilo'
        }
      }
    }
  }
</script>

<style scoped>

  .estilo {
    float: left;
    margin-top: 0.5em;
  }

  @media (min-width: 600px) {
    .estilo {
      float: left;
      margin-top: 1.25em;
    }
  }

  .icon-credit-card:before {
    content: "\e900";
    color: #7C259A;
  }

  .icon-bar-codel:before {
    content: "\1f313";
    color: #7C259A;
  }

  @font-face {
    font-family: 'moip';
    src: url('fonts/moip.eot?utqmmj');
    src: url('fonts/moip.eot?utqmmj#iefix') format('embedded-opentype'), url('fonts/moip.ttf?utqmmj') format('truetype'), url('fonts/moip.woff?utqmmj') format('woff'), url('fonts/moip.svg?utqmmj#moip') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .icon {
    font-family: 'moip' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    letter-spacing: 0;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    font-feature-settings: "liga";
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-credit-card:before {
    content: "\e900";
  }

  .icon-debit-card:before {
    content: "\e901";
  }

  .icon-double-arrows-down:before {
    content: "\e902";
  }

  .icon-label-atention:before {
    content: "\e903";
  }

  .icon-label-check:before {
    content: "\e904";
    color: #0000CD;
  }

  .icon-label-empty:before {
    content: "\e905";
  }

  .icon-label-error:before {
    margin-top: 1.3em;
    content: "\e906";
  }

  .icon-label-loading:before {
    content: "\e907";
  }

  .icon-label-waiting:before {
    content: "\e908";
  }
</style>
