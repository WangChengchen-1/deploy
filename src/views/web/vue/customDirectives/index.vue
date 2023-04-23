/*
 * new page
 * @author: wangcc
 * @since: 2023-04-23
 * @name: 自定义指令 Custom Directives
*/
<script setup>
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>

