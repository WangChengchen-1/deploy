/**
 * 防抖 函数
 * 概念：仅在最后一次触发
 */
export function debounce(fn, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
