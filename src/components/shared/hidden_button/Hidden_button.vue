<template>
  <div class="container ponteiro" @click="escolher">
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
        const { value } = this.$store.state.estado_cliente
        this.aux = !value

        const payload = { value: this.aux }
        this.$store.commit('CHANGE_HIDDEN', payload)
        this.$emit('esconder', event)

        //para n fazer com vuex depois deixa isso mais elegante
        console.log(this.aux);
        if(this.aux == false){
          return this.mensagem = "Mostrar cliente";
        }
       return this.mensagem = "Esconder cliente"
      }
    }

  }
</script>

<style scoped>
  .container {
    padding-left: 10%;
  }

  .ponteiro {
    cursor: pointer;
  }

  .container .imagem {
    float: left;
  }

  .container .imagem img {
    width: 30px;
    height: 30px;
  }

  .container .texto {
    float: left;
    margin-top: 0.3em;
  }

  @media(min-width: 600px) {
    .container {
      float: left;
      width: 40%;
      padding-left: 0%;
    }
  }
</style>
