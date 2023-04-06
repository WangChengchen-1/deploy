/* 
    Vue Router 不再是一个类，而是一组函数。现在你不用再写 new Router()，而是要调用 createRouter:
*/
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),//history mode
  routes,
});

export default router;
