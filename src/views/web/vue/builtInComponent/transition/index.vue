/* * new page * @author: wangcc * @since: 2023-04-24 * @name: Transition 组件 */
<template>
  <div class="page-container">
    <el-button @click="show = !show">Toggle</el-button>
    <el-divider />
    <h3>基础用法</h3>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <br />
    <h3>有名字的过渡效果</h3>
    <Transition name="fade">
      <p v-if="show">hello</p>
    </Transition>
    <br />
    <h3>搭配css的transition</h3>
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>
    <br />
    <h3>搭配css的animation</h3>
    <Transition
      name="bounce"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <p v-if="show" style="text-align: center">
        Hello here is some bouncy text!
      </p>
    </Transition>
    <br />
    <h3>可以复用的过渡/动画效果</h3>
    <MyTransion>
      <p v-if="show" style="text-align: center">
        Hello here is some bouncy text!
      </p>
    </MyTransion>
  </div>
</template>

<script setup>
import MyTransion from './Transition.vue';

const show = ref(false);

// javascript 钩子
function afterEnter() {
  console.log('after-enter');
}
function afterLeave() {
  console.log('after-leave');
}
</script>

<style scoped lang="scss">
/* 基础用法 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 有名字的过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 搭配css的transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/* 搭配css的animation */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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
