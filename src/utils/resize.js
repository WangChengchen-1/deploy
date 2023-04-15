import { debounce } from "@/utils/utils.js";
import pinia from "@/stores/index.js";
import { useAppStore } from "@/stores/modules/app.js";
const { toggleSideBarHide } = useAppStore(pinia);

function resize() {
  let innerWidth = window.innerWidth; //获取文档显示区的宽度
  if (innerWidth <= 1000) {
    toggleSideBarHide(true);
  }
}
resize();
const debounceFn = debounce(resize, 300);
window.addEventListener("resize", debounceFn);
