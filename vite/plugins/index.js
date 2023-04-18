import vue from "@vitejs/plugin-vue";

import autoImport from "./auto-import.js";
import svgSprites from "./rollup-plugin-svg-sprites";

export default function createVitePlugins() {
  const vitePlugins = [vue(), autoImport(),svgSprites()];

  return vitePlugins;
}
