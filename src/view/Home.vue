<template>
  <div>
    <el-row>
      <el-col v-for="(item, index) in goods" :key="index" :span="6">
        <img
          :src="item.url"
          class="image"
        />
        <div style="padding: 14px;">
          <span>{{item.name}}</span>
          <span>{{item.price}}</span>
          <i class="el-icon-circle-plus-outline" @click="addCart(item)"></i>
          <!-- <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      goods: []
    }
  },
  created() {
    Axios.get("/goods").then(data => {
      console.log(data)
      this.goods = data.data;
    });
  },
  methods: {
    addCart(item) {
      this.$store.commit("addCart", item)
    }
  }
}
</script>

<style>

</style>