<template>
  <div>
    <h1>Informações:</h1>
    <v-sheet :elevation="6" class="pa-2 mt-3" color="#888888">
      <span>Você pode salvar e carregar</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <v-sheet :elevation="6" class="pa-2" color="#888888">
      <span>Clique em atualizar preços para uma movimentação nas ações</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>

    <p><strong>Seu Saldo: </strong>{{ currency(funds) }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    currency() {
      return (value) => {
        return value.toLocaleString() + " R$";
      };
    },
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>


<style>
</style>