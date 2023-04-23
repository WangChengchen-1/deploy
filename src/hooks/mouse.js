// mouse.js
import { ref } from 'vue';
import { useEventListener } from './event.js'; //嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数

//最佳实践：组合式函数约定用驼峰命名法命名，并以“use”作为开头。
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0);
  const y = ref(0);

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  useEventListener(window, 'mousemove', update);

  // 通过返回值暴露所管理的状态
  return { x, y };
}
