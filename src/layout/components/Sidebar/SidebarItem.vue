/*
 * new page
 * @author: wangcc
 * @since: 2023-04-07
 * @name: 
*/
<template>
  <div class="sidebar-item">
    <!-- 无菜单 -->
    <router-link v-if="!item.children" :to="item.path">
      <el-menu-item v-if="!item.children" :index="item.path">
        <span>{{ item.meta && item.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <!-- 有子菜单 -->
    <el-sub-menu :index="item.path" v-else>
      <SidebarItem
        v-for="(route, index) in item.children"
        :key="route.path"
        :item="route"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>

<style scoped lang="scss"></style>
