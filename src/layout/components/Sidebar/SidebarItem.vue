/* 
  * new page 
  * @author: wangcc 
  * @since: 2023-04-07 
  * @name: 
*/
<template>
  <div class="sidebar-item">
    <!-- 无菜单 -->
    <router-link v-if="!item.children" :to="basePath">
      <el-menu-item :index="basePath">
        <i class="iconfont" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <!-- 有子菜单 -->
    <el-sub-menu :index="item.path" v-else>
      <template #title>
        <i class="iconfont" :class="item.meta.icon" style="margin-right:10px"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <SidebarItem v-for="(route, index) in item.children" :key="route.path" :item="route"
        :base-path="resolvePath(basePath, route.path)" />
    </el-sub-menu>
  </div>
</template>

<script setup>
const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: "",
  },
});

// 解析路径：页面路由
function resolvePath(basePath, path) {
  return basePath + "/" + path;
}
</script>

<style scoped lang="scss">
.sidebar-item {
  :deep(.iconfont) {
    margin-right: 10px;

    &::before {
      color: #bfcbd9;
      font-weight: bold;
    }
  }

  .el-menu-item.is-active {
    color: #409eff;

    :deep(.iconfont) {
      &::before {
        color: #409eff;
        font-weight: bold;
      }
    }
  }
}
</style>
