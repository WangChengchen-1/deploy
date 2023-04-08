import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgSprites from "rollup-plugin-svg-sprites";
import AutoImport from "unplugin-auto-import/vite";

// 配置别名需要的路径模块
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSprites({
      vueComponent: true,
      exclude: ["node_modules/**"],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],//自动引入相关钩子函数
      dts: false,
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
  base: "./", //静态资源获取
  // 配置别名
  resolve: {
    alias: [
      {
        find: "@", //指向的是src目录
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
