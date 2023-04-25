<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-24
 * @name: TransitionGroup 内置组件
-->
<template>
  <div class="page-container">
    <el-button type="primary" @click="add">添加元素</el-button>
    <el-button @click="remove">移除元素</el-button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
const items = ref([1, 2, 3, 4, 5, 6]);
function add() {
  let a = items.value[items.value.length - 1];
  items.value.push(++a);
}
function remove() {
  items.value.length -= 1;
}
</script>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
