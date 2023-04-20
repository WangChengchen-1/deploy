<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-20
 * @name: 
-->
<template>
    <button @click="click">MyButton</button>
</template>

<script setup >

function click(){
    console.log('触发了button按钮自己的点击事件');
}
</script>

<style scoped lang="scss"></style>
