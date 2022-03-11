<template>
  <v-flex class="pr-3 pb-3 pt-3" xs12 m6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }}
          <small> - Preço: {{ currency(stock.price) }}</small></strong
        >
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        ></v-text-field>
        <v-btn
          class="green darken-3 white--text"
          :disabled="
            insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
          "
          @click="buyStock"
        >
          Comprar
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  iconPack: "fontawesome",
});

export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    },
    currency() {
      return (value) => {
        return value.toLocaleString() + " R$";
      };
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      Vue.toasted.success("Compra Realizada!", {
        className: "success",
        duration: "7000",
        position: "bottom-right",
      });
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>


<style>
</style>