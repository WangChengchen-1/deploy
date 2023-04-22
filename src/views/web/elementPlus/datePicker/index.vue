/* * new page * @author: wangcc * @since: 2023-04-22 * @name: 日期选择器 */
<template>
  <el-col>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </el-col>
</template>

<script setup>
const value = ref('');

</script>

<style scoped lang="scss"></style>
