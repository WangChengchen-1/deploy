/* 
* new page 
* @author: wangcc 
* @since: 2023-04-07 
* @name: 左侧菜单 
*/
<template>
  <div class="sidebar">
    <div class="logo">
      <el-icon color="#409eff" size="30">
        <Eleme />
      </el-icon>
      CC HOME
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-vertical-demo" :default-active="activeMenu" active-text-color="#ffd04b"
        background-color="#545c64" text-color="#fff" mode="vertical">
        <SideberItem v-for="(route, index) in asyncRoutes" :key="route.path + index" :item="route"
          :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SideberItem from "./SidebarItem.vue";
import { asyncRoutes } from "@/router/routes";

const route = useRoute();

const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path; //要和el-menu-item 的index的值一致
});
</script>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  background-color: #545c64;

  .logo {
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
  }

  :deep(.scrollbar-wrapper) {
    height: calc(100vh - 50px);

    .el-sub-menu__title:hover {
      background-color: rgb(67, 74, 80) !important;
    }
  }
}
</style>
