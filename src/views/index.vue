/*
 * new page
 * @author: wangcc
 * @since: 2023-04-08
 * @name: 首页展示内容
*/
<template>
  <div class="home-page page-container">
    <el-card class="box-card">
      <template #header>
        <h3>技术选型</h3>
      </template>
      <el-row class="card-body">
        <el-col class="font-end" :span="4">
          <h5>前端</h5>
          <div
            class="list"
            v-for="(item, index) in FrontEndTechnology"
            :key="index"
          >
            {{ item }}
          </div>
        </el-col>
        <el-col class="font-end" :span="4">
          <h5>工具库</h5>
          <div class="list" v-for="(item, index) in toolsLibrary" :key="index">
            {{ item }}
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup >
const FrontEndTechnology = reactive([
  "Vue3.x",
  "Pinia",
  "Element-Plus",
  "Sass",
  "...",
]);
const toolsLibrary = reactive([]);
</script>

<style scoped lang="scss">
.home-page {
  .font-end {
    h5 {
      margin-bottom: 10px;
    }
    .list {
      color: #676a6c;
      font-size: 14px;
    }
  }
}
</style>
