<!-- 
    name：首页
 -->
<template>
  <div class="main-content">
    <Sidebar class="left" />
    <!-- 二级路由出口 -->
    <div class="right">
      <Navbar />
      <el-scrollbar height="calc(100vh - 84px)">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script  setup>
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";

</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  .right {
    width: 100%;
  }
}
</style>