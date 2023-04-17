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
    timer = setTimeout(() => {
      typeof fn === "function" && fn();
    }, delay);
  };
}

/**
 * 节流函数（定时器版本）
 * 概念：每隔 n 秒触发一次
 */
export function throttle(fn, delay = 500) {
  let timer = null;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        typeof fn === "function" && fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}
function throttleTime(fn, delay = 500) {
  let timer = null,
    startTime = 0;
  return () => {
    let now = +new Date(); // 转换为时间戳
    if (now - startTime > delay) {
      typeof fn === "function" && fn.apply(this, arguments);
      startTime = now;
    }
  };
}
