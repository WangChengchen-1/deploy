// 公共路由
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    name: "index",
    component: () => import("@/layout/index.vue"),
    meta: { title: "首页" }, //原标记
  },
  {
    path: "/system",
    name: "system",
    component: () => import("@/views/system/index.vue"),
    meta: { title: "系统管理" }, //原标记
  },
];

export default routes;
