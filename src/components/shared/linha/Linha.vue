<template>
  <div id="linha_tabela">
    <div id="status" class="">
      <img :src="status">
    </div>
    <div id="codigo" class="linha">
      {{codigo}}
    </div>
    <div id="meio_pagamento" class="linha">
      <img :src="meio_pagamento"> {{valor}}
    </div>
    <div id="atualizado" class="linha">
      {{atualizado}}
    </div>
    <div id="cliente" class="linha">
      <!-- componente -->
      {{cliente}}
    </div>
  </div>
</template>

<script>
 export default {

    props: ['status', 'codigo', 'meio_pagamento', 'valor', 'atualizado', 'cliente'],
    //http://www.freeiconspng.com/uploads/blue-check-icon-13.png
    //http://icons.iconarchive.com/icons/iconsmind/outline/512/Credit-Card-2-icon.png"
    computed: {
        //fazer metodos para saber qual icone pelo status
    }
  }

</script>

<style scoped>

#linha_tabela {
  margin-top: 1em;
  background-color: white;
  border-radius: 3em;
  width: 100%;
  height: 16%;
  line-height: 350%;
  float: left;
  min-width: 300px;
  padding: 1.0%;

}

#linha #status{

  width: 8%;

}
#linha_tabela #status img{

  width: 1em;
  height: 1em;
  margin-left: 1em;
  margin-top: 0.8em;
  float:left;
}

#linha_tabela #codigo{
  width: 25%;
  margin-left:1em;
  float:left;
}

#linha_tabela #meio_pagamento{

  width: 5%;
  float: left;
}

#linha_tabela #meio_pagamento img{

  width: 1em;
  height: 120%;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.8em;
  float:left;
}

#linha_tabela #valor{

  width: 12%;
  margin-left:1em;
  float:left;

}

#linha_tabela #atualizado{

  width: 20%;
  margin-left:1em;
  float:left;


}

#linha_tabela #cliente{

  width: 20%;
  margin-left:1em;
  float:left;
  border-left-color: purple;
  border-style:dashed;
  border-top: none;
  border-bottom:none;
  border-right: none;
  padding-left: 1em;

}

.linha{
    min-width: 150px;
}

</style>
