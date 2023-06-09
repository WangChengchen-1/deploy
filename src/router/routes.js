// redirect: "noRedirect", //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
// affix:true //设置该字段为true的时候，tags 不可以被删除
import Layout from "@/layout/index.vue";
export const asyncRoutes = [
  {
    path: "/index",
    meta: { title: "首页", icon: "icon-shouye-zhihui", affix: true },
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/web",
    name: "WEB",
    redirect: "noRedirect",
    meta: { title: "web", icon: "icon-yemian" },
    children: [
      {
        path: "html",
        name: "HTML",
        component: () => import("@/views/web/html/index.vue"),
        meta: { title: "HTML", icon: "icon-HTML" },
      },
      {
        path: "css",
        name: "CSS",
        component: () => import("@/views/web/css/index.vue"),
        meta: { title: "CSS", icon: "icon-css" },
      },
      {
        path: "javascript",
        name: "JAVASCRIPT",
        component: () => import("@/views/web/javascript/index.vue"),
        meta: { title: "JavaScript", icon: "icon-java-script" },
      },
      {
        path: "vue",
        name: "VUE",
        meta: { title: "Vue", icon: "icon-vue" },
        children:[
          {
            path:'slot',
            name:'SLOT',
            component:()=>import("@/views/web/vue/slot/index.vue"),
            meta: { title: "Slots", icon: "icon-zhishi" },
          },
          {
            path:'composables',
            name:'Composables',
            component:()=>import("@/views/web/vue/composables/index.vue"),
            meta: { title: "Composables", icon: "icon-zhishi" },
          },
          {
            path:'customDirectives',
            name:'CustomDirectives',
            component:()=>import("@/views/web/vue/customDirectives/index.vue"),
            meta: { title: "CustomDirectives", icon: "icon-zhishi" },
          },
          {
            path:'builtInComponent-transition',
            name:'Transition',
            component:()=>import("@/views/web/vue/builtInComponent/transition/index.vue"),
            meta: { title: "Transition", icon: "icon-zhishi" },
          },
          {
            path:'builtInComponent-transitionGroup',
            name:'TransitionGroup',
            component:()=>import("@/views/web/vue/builtInComponent/transitionGroup/index.vue"),
            meta: { title: "TransitionGroup", icon: "icon-zhishi" },
          },
          {
            path:'builtInComponent-keepAlive',
            name:'KeepAlive',
            component:()=>import("@/views/web/vue/builtInComponent/keepAlive/index.vue"),
            meta: { title: "keepAlive", icon: "icon-zhishi" },
          },
          {
            path:'builtInComponent-teleport',
            name:'Teleport',
            component:()=>import("@/views/web/vue/builtInComponent/teleport/index.vue"),
            meta: { title: "teleport", icon: "icon-zhishi" },
          },
          {
            path:'store',
            name:'Store',
            component:()=>import("@/views/web/vue/store/index.vue"),
            meta: { title: "Store", icon: "icon-zhishi" },
          },
        ]
      },
      {
        path: "element-plus",
        name: "Element-Plus",
        meta: { title: "Element-Plus", icon: "icon-vue" },
        children:[
          {
            path:'date-picker',
            name:'Date-Picker',
            component:()=>import("@/views/web/elementPlus/datePicker/index.vue"),
            meta: { title: "Date-Picker", icon: "icon-zhishi" },
          }
        ]
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
