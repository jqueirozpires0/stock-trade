<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";

export default {
  components: { Stock },
  computed: {
    ...mapGetters({
      stocks: "stockPortifolio",
    }),
  },
};
</script>


<style>
.row {
  margin-top: 1% !important;
  margin-left: -12% !important;
  margin-right: -12% !important;
}
</style>