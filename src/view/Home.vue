<template>
  <div class="title">
    <img src="@/assets/logo.png" alt="" />
    <div>我是home页面</div>
    <button @click="testAxios">点击测试mock</button>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
import axios from 'axios';
import HelloWorld from '../components/HelloWorld.vue';

// 测试mock数据
const testAxios = () => {
  axios.get('/api/get').then(({ data: res }) => {
    console.log(res);
  });
};
</script>

<style lang="scss" scoped>
.title {
  width: 750px;
  height: 100px;
  background-color: pink;
  & > div {
    color: green;
  }
}
</style>
