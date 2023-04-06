import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 配置别名需要的路径模块
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
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
