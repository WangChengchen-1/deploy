<!-- 
    name：首页
 -->
<template>
  <div class="main-content">
    <Sidebar class="left" />
    <!-- 二级路由出口 -->
    <div class="right" :style="{ width: rightWidth }">
      <Navbar />
      <el-scrollbar height="calc(100vh - 84px)">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar/index.vue';
import { useAppStore } from '@/stores/modules/app.js';

const isCollapse = computed(() => useAppStore().isCollapse);
const rightWidth = ref('');

watchEffect(() => {
  rightWidth.value = isCollapse.value
    ? 'calc(100% - 64px)'
    : 'calc(100% - 200px)';
});
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
}
</style>
