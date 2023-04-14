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
      <div :style="{ width: !isCollapse ? '150px' : '0' }"><span> CC HOME</span></div>
    </div>
    <!-- el-menu -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-vertical-demo" :default-active="activeMenu" :collapse="isCollapse"
        active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" mode="vertical">
        <SideberItem v-for="(route, index) in asyncRoutes" :key="route.path + index" :item="route"
          :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/modules/app";
import SideberItem from "./SidebarItem.vue";
import { asyncRoutes } from "@/router/routes";

const route = useRoute();
const appStore = useAppStore();

//✅ 这样写是响应式的
const isCollapse = computed(() => appStore.isCollapse);
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
  // width: 200px;
  // width: unset;
  background-color: #545c64;

  .logo {
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;

    // 设置字体的隐藏/出现的渐变效果
    div {
      display: inline-block;
      transition: width 0.5s ease-out;
      overflow: hidden;

      span {
        display: inline;
        white-space: nowrap; //属性是用来设置如何处理元素中的空白
        margin-left: 10px;
      }
    }
  }

  :deep(.scrollbar-wrapper) {
    height: calc(100vh - 50px);

    .el-sub-menu__title:hover {
      background-color: rgb(67, 74, 80) !important;
    }

    .el-menu-vertical-demo {
      border-right: none;

      /* el-menu 折叠状态下的样式 */
      &.el-menu--collapse {
        span {
          display: none; //隐藏菜单折叠后的字体
        }

        .el-sub-menu__icon-arrow {
          display: none; //隐藏菜单折叠后的箭头
        }
      }
    }
  }
}
</style>
<style>
/*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
/*隐藏文字*/
/* .el-menu--collapse  .el-submenu__title span{
        display: none;
    } */
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>

