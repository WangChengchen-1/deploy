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
      <el-menu-item :index="item.path" v-if="item.meta">
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <!-- <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item> -->
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>

<style scoped lang="scss"></style>
