<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-17
 * @name: 
-->
<template>
    <el-scrollbar class="scroll-container">
        <slot></slot>
    </el-scrollbar>
</template>

<script setup ></script>

<style scoped lang="scss">
.scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 80%;

    :deep(.el-scrollbar__wrap) {
        display: flex;
        align-items: center;
    }

    :deep(.el-scrollbar__bar) {
        bottom: 0px;
    }

}
</style>
