<template>
  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase mr-4">
        <span>stock</span>
        <span class="font-weight-light">trader</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat to="/">Inicio</v-btn>
        <v-btn flat to="/portifolio">Portifolio</v-btn>
        <v-btn flat to="/stocks">Ações</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat @click="endDay"> Atualizar Preços</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">Salvar e Carregar</v-btn>
          </template>
          <v-list>
            <v-list-item >
              <v-list-item-title @click="saveData">Salvar Dados</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title @click="loadDataLocal">Carregar Dados</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-layout align-center>
          <span class="text-uppercase grey--text text--darken-2">
            Saldo:{{ currency(funds)}}
          </span>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

import { mapActions } from 'vuex';


export default {
  computed: {
    currency(){
      return (value)=>{ return value.toLocaleString()+" R$"}
    },
    funds() {
      return this.$store.getters.funds;
    },
  },

  methods:{
    ...mapActions(['randonPrice' , 'loadData']),
    endDay(){
      this.randonPrice()
    },

    saveData(){
      const { funds , stockPortifolio , stocks} = this.$store.getters
      this.$http.put('data.json', { funds , stockPortifolio , stocks})
    },

    loadDataLocal(){
      this.loadData()
    }
  }
};
</script>

<style>
.v-btn {
  box-shadow: 0 0 0 0 !important;
  background-color: white !important;
}
</style>