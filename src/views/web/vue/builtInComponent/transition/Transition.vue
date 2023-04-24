<!-- 
  * new page 
  * @author: wangcc 
  * @since: 2023-04-24 
  * @name: 可复用的过渡效果
 -->
<template>
  <!-- 包装内置的 Transition 组件 -->
  <Transition
    name="my-transition"
    @enter="onEnter"
    @leave="onLeave"
    enter-active-class="animate__animated animate__backInLeft"
    leave-active-class="animate__animated animate__backOutRight"
  >
    <slot></slot>
    <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<script setup>
// javascript 钩子函数
function onEnter() {
  console.log('enter');
}

function onLeave() {
  console.log('leave');
}
</script>

<style lang="scss">
/* 注意不要在这里使用scoped ，因为那不会应用到插槽上 */
/* 对于大多数的 CSS 动画，我们可以简单地在 *-enter-active 和 *-leave-active class 下声明它们。 */
/* 搭配animate.css */
.my-transition-enter-active {
  animation: animate__backInLeft 0.5s;
}
.my-transition-leave-active {
  animation: animate__backOutRight 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
