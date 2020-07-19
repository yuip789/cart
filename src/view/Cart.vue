<template>
  <div>
    购物车
    <Cart :data="carts" @add="addNum" @reduce="reduce"></Cart>
  </div>
</template>

<script>
import Cart from "../components/cart";
export default {
  components: {
    Cart
  },
  data() {
    return {
      carts: []
    };
  },
  methods: {
    addNum(i) {
      console.log(i.index);
      this.carts[i.index].count += 1;
    },
    reduce(arg) {
      if (this.carts[arg.index].count > 1) {
        this.carts[arg.index].count--;
      }
    }
  }
};
</script>

<style>
</style>