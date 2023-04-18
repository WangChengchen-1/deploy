import svgSprites from "rollup-plugin-svg-sprites";

export default function () {
  return svgSprites({
    vueComponent: true,
    exclude: ["node_modules/**"],
  });
}
