<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-25
 * @name: 
-->
<template>
  <div class="">
    <h4>count:{{ count }}</h4>
    <span @click="add">点我+1</span>
  </div>
</template>

<script setup>
const count = ref(0);
function add() {
  count.value += 1;
}
//缓存实例的声明周期
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('挂载/取出');
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('缓存/卸载');
})
</script>

<style scoped lang="scss"></style>
