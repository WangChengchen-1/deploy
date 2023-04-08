/* 
    Vue Router 不再是一个类，而是一组函数。现在你不用再写 new Router()，而是要调用 createRouter:
*/
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  // history: createWebHistory(),//history mode
  history: createWebHashHistory(), //history mode
  routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  const authentication =
    sessionStorage.getItem("isAuthenticated") ??
    localStorage.getItem("isAuthenticated");
  if (to.name !== "Login" && !authentication) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
