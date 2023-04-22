import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";//element-plus 中文
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
import "@/assets/css/reset.css";
import "@/assets/css/index.scss";
import "@/utils/resize.js"

// svg图标
import elementIcons from "@/components/SvgIcon/elementIcons";

const app = createApp(App);
app.use(elementIcons);
app.use(router);
app.use(store);
app.use(ElementPlus, {locale});
app.mount("#app");
