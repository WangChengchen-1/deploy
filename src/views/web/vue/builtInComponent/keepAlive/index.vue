<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-25
 * @name: keep-alive 组件
-->
<template>
  <div class="page-container">
    <el-radio-group v-model="radio">
      <el-radio label="A">Option A</el-radio>
      <el-radio label="B">Option B</el-radio>
    </el-radio-group>
    <h4>Current Component:{{ radio }}</h4>
    <!--  include 和 exclude  -->
    <keep-alive :include="['A']">
      <component :is="view"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import A from "./components/A.vue";
import B from "./components/B.vue";
const radio = ref("");
let view = computed(() => {
  if (radio.value === "A") {
    return A;
  } else if (radio.value === "B") {
    return B;
  }
});


</script>

<style scoped lang="scss"></style>
