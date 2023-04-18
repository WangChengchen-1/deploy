import vue from "@vitejs/plugin-vue";

import autoImport from "./auto-import.js";
import svgSprites from "./svg-sprites.js";

export default function createVitePlugins() {
  const vitePlugins = [vue(), autoImport(), svgSprites()];

  return vitePlugins;
}
