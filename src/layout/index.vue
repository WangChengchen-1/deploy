<!-- 
    name：首页
 -->
<template>
  <div class="home-page">
    <Sidebar class="left" />
    <!-- 二级路由出口 -->
    <div class="right">
      <Navbar />
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  .right {
    flex: auto;
    .main-content {
      height: calc(100vh - 84px);
    }
  }
}
</style>