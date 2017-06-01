<template>
  <div class="container-header">
    <campo-valor :argumento1="campo1" argumento2="123.00">
    </campo-valor>
    <export-button></export-button>
    <hidden v-on:esconder="visualizar" class="hidden"></hidden>
  </div>
</template>

<script>
  import Export_button from '../export_button/Export_button.vue'
  import CampoValor from '../campoValor/CampoValor.vue'
  import Hidden_button from '../hidden_button/Hidden_button.vue'
  export default {

    name: 'header',

    components: {

      'campo-valor': CampoValor,
      'export-button': Export_button,
      'hidden': Hidden_button,
    },

    data() {
      return {
        visualiza: true,
      }
    },

    props: ['campo1', 'campo2'],

    methods: {

      visualizar() {
        this.$emit('esconder-', event)
      }


    }
  }
</script>



<style lang="">
  .container-header {
  }

  @media(min-width: 600px) {
    .container-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media(min-width: 600px) {
    .hidden {
      display: none;
    }
  }
</style>
