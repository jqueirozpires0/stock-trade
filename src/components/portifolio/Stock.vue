<template>
  <v-flex class="pr-3 pb-3 pt-3" xs12 m6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }}
          <small>
            - Preço: {{ currency(stock.price) }} | Qnt: {{ stock.quantity }}</small
          ></strong
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
          class="blue darken-3 white--text"
          :disabled="
            quantity <= 0 ||
            !Number.isInteger(quantity) ||
            quantity > stock.quantity
          "
          @click="sellStock"
        >
          Vender
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import Vue from "vue";
import Toasted from "vue-toasted";
// import { mapActions } from 'vuex';

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
    currency() {
      return (value) => {
        return value.toLocaleString() + " R$";
      };
    },
  },

  methods: {
    // ...mapActions({ sellStockActions: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      Vue.toasted.success("Venda Realizada!", {
        className: "success",
        duration: "7000",
        position: "bottom-right",
      });
      //   this.sellStockActions(order)
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    },
  },
};
</script>


<style>
</style>