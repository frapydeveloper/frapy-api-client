import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import rollupJson from "@rollup/plugin-json";

export default [
  {
    input: "src/lib/index.ts",
    output: [
      {
        dir: "dist",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      rollupJson(),
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
      // resolve({ preferBuiltins: true, mainFields: ["browser"] }),
      resolve(),
      scss({
        output: "dist/style.min.css",
        outputStyle: "compressed",
        failOnError: true,
        runtime: require("sass"),
      }),
      babel({
        exclude: ["node_modules/**", "src/stories"],
        presets: ["@babel/preset-react"],
      }),
      external(),
      typescript(),
      terser(),
      commonjs({
        include: "node_modules/axios/**",
        preferBuiltins: true,
      }),
    ],
  },
];
