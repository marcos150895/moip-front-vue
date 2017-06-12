<template>
  <div class="container-hidden ponteiro" @click="escolher">
    <div class="imagem">
      <img src="http://www.freeiconspng.com/uploads/account-profile-icon-1.png">
    </div>
    <div class="texto">
      <div>{{mensagem}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hidden',

    data() {
      return {
        mensagem: "Esconder cliente"
      }
    },

    computed: {},
    methods: {
      escolher() {
        const {
          value
        } = this.$store.state.estado_cliente
        this.aux = !value

        const payload = {
          value: this.aux
        }
        this.$store.commit('CHANGE_HIDDEN', payload)
        this.$emit('esconder', event)

        //para n fazer com vuex depois deixa isso mais elegante
        console.log(this.aux);
        if (this.aux == false) {
          return this.mensagem = "Mostrar cliente";
        }
        return this.mensagem = "Esconder cliente"
      }
    }

  }
</script>

<style scoped>
  .container-hidden {
    display: flex;
    align-items: center;
  }

  .ponteiro {
    cursor: pointer;
  }

  .container-hidden .imagem img {
    width: 30px;
    height: 30px;
  }
</style>
