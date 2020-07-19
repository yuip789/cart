<template>
  <div>
    <div>购物车列表</div>
    <div @click="clearCart()">清空购物车</div>
    <table border="1">
      <tr>
        <th>名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(cart, index) in cart" :key="index">
        <td>{{cart.name}}</td>
        <td>{{cart.price}}</td>
        <td>{{cart.count}}</td>
        <td>{{cart.price * cart.count}}</td>
        <td>
          <button @click="add(index)">+</button>
          <button @click="reduce(index)">-</button>
        </td>
      </tr>
    </table>
    <h1>总价：{{total}}</h1>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
      ...mapState({
        cart: state => state.cart
      }),
      total() {
          return this.cart.reduce((sum, item) => {
              return sum += item.price * item.count
          }, 0);
      }
  },
  methods: {
      add(i) {
          // this.$emit('add',{index: i});
          this.$store.commit('addcount', i);
      },
      reduce(i) {
          // this.$emit('reduce', {index: i});
          this.$store.commit('reducecount', i);
      },
      clearCart() {
        this.$store.commit('clearcart')
      }
  }
};
</script>
<style>
</style>