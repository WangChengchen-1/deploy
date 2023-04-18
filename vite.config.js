import { defineConfig } from "vite";
import createVitePlugins from "./vite/plugins"

// 配置别名需要的路径模块
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
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
