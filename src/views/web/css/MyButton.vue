<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-20
 * @name: 
-->
<template>
  {{ $attrs }}
  <BaseButton v-bind="$attrs" />
</template>

<script setup>
import BaseButton from './Button.vue';

const attrs = useAttrs();
console.log(attrs);
</script>
<script>
// 禁止继承的写法
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
};
</script>

<style scoped lang="scss"></style>
