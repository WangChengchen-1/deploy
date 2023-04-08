import Layout from "@/layout/index.vue";
export const asyncRoutes = [
  {
    path: "/index",
    meta: { title: "首页" },
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
];
// 公共路由
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    redirect: "/index",
    component: Layout,
    children: asyncRoutes,
  },
];

export default routes;
