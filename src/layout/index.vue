<!-- 
    name：首页
 -->
<template>
  <div class="home-page">
    <Sidebar />
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script  setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
}
</style>