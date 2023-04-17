import { throttle } from "@/utils/utils.js";
import pinia from "@/stores/index.js";
import { useAppStore } from "@/stores/modules/app.js";
const { toggleSideBarHide } = useAppStore(pinia);

function resize() {
  let innerWidth = window.innerWidth; //获取文档显示区的宽度
  if (innerWidth <= 1000) {
    toggleSideBarHide(true);
  } else {
    toggleSideBarHide(false);
  }
}
resize();
const throttleFn = throttle(resize, 300);
window.addEventListener("resize", throttleFn);
