/*
 * new page
 * @author: wangcc
 * @since: 2023-04-11
 * @name: 切换全屏
*/
<template>
  <i
    class="screenfull-icon iconfont"
    :class="[isFullscreen ? 'icon-cancel-full-screen' : 'icon-quanping']"
    @click="toggle"
  ></i>
</template>

<script setup >
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style scoped lang="scss">
.screenfull-icon {
  cursor: pointer;
  font-size: 25px;
}
</style>
