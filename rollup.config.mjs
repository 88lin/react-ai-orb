import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module
    },
  ],
  external: ["react", "react-dom", "tslib"], // External dependencies
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve extensions
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      inject: true,
      minimize: true, // Minify the CSS
    }),
  ],
};
