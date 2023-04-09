import Layout from "@/layout/index.vue";
export const asyncRoutes = [
  {
    path: "/index",
    meta: { title: "首页", icon: "icon-shouye-zhihui" },
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/web",
    name: "WEB",
    redirect: "noRedirect", //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    meta: { title: "web", icon: "icon-yemian" },
    children: [
      {
        path: "html",
        name: "HTML",
        component: () => import("@/views/web/html/index.vue"),
        meta: { title: "HTML", icon: "icon-HTML" },
      },
    ],
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
  {
    path: "/:pathMatch(.*)*", //匹配404页面
    component: () => import("@/views/error/404.vue"),
  },
];

export default routes;
