/* * new page * @author: wangcc * @since: 2023-04-23 * @name:
“组合式函数”(Composables) */
<template>
  <div class="">Mouse position is at: {{ x }}, {{ y }}</div>
</template>

<script setup>
import { useMouse } from '@/hooks/mouse.js';
const { x, y } = useMouse();
</script>

<style scoped lang="scss"></style>
