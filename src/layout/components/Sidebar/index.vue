/*
 * new page
 * @author: wangcc
 * @since: 2023-04-07
 * @name: 
*/
<template>
  <div class="sidebar">
    <div class="logo">CC HOME</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="activeMenu"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        mode="vertical"
      >
        <SideberItem
          v-for="(route, index) in routes"
          :key="route.path + index"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup >
import SideberItem from "./SidebarItem.vue";
import routes from "@/router/routes";

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
    line-height: 50px;
    text-align: center;
    color: #fff;
  }
  :deep(.scrollbar-wrapper) {
    height: calc(100vh - 50px);
  }
}
</style>
