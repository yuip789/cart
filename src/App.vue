<template>
  <div id="#app">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/cart">
        <el-badge :value="cartTotal" class="item">
          <el-button size="small">购物车</el-button>
        </el-badge>
      </router-link>
      <div>购物车</div>
    </div>
    <router-view></router-view>
    <!-- <ul>
      <li v-for="(good, index) in goods" :key="index">
        {{good.name}}--{{good.price}}---
        <el-button @click="addCare(index)">添加至购物车</el-button>
      </li>
    </ul>-->

    <!--<Cart :data="carts" @add="addNum" @reduce="reduce"></Cart>-->
  </div>
</template>

<script>
// import Axios from "axios";
// import Cart from "./components/cart";
import {mapGetters} from 'vuex'
export default {
  el: "#app",
  data() {
    return {
      goods: [],
      carts: []
    };
  },
  computed: {
    ...mapGetters([
      'cartTotal'
    ])
  },
  methods: {
  }
};
</script>

<style>
.image {
  width: 100%;
}
</style>
