<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-17
 * @name: 
-->
<template>
  <div class="">
    css
    <!-- v-on/class的透传功能 -->
    <MyButton @click="click" class="my-button" />
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue';
function click() {
  console.log('触发了MyButton标签的点击事件');
}
</script>

<style scoped lang="scss"></style>
