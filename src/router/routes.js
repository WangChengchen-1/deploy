// 公共路由
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    name: "index",
    component: () => import("@/layout/index.vue"),
    meta: { title: "首页" }, //原标记
  },
];

export default routes;
