import path from "node:path";

import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import autoprefixer from "autoprefixer";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import sass from "sass";

import packageJson from "./package.json" with { type: "json" };

export default defineConfig([
 {
  external: ["react", "react-dom", "react/jsx-runtime"],
  input: "src/index.ts",

  onwarn: (warning, warn) => {
   if (warning.message.includes('"use client"')) return;
   else warn(warning);
  },

  output: [
   {
    file: packageJson.main,
    format: "cjs",
    plugins: [terser()],
   },
   {
    file: packageJson.module,
    format: "esm",
    plugins: [terser()],
   },
  ],

  plugins: [
   del({ hook: "buildStart", targets: "dist" }),

   postcss({
    exclude: "src/**/*.stories.module.scss",
    extensions: [".scss"],
    extract: "css/style.css",
    include: "src/**/*.module.scss",
    minimize: true,
    modules: {
     generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    plugins: [autoprefixer()],
    preprocessor: (content, id) =>
     new Promise((resolve, reject) => {
      if (id.endsWith(".scss")) {
       try {
        const result = sass.renderSync({
         data: content,
         file: id,
         outFile: "styles.css",
         sourceMap: true,
        });
        resolve({
         code: result.css.toString(),
         map: result.map ? result.map.toString() : "",
        });
       } catch (error) {
        reject(error);
       }
      } else {
       resolve({ code: content });
      }
     }),
    sourceMap: false,
   }),

   svgr({ icon: true }),

   alias({
    entries: [{ find: "@", replacement: path.resolve("src") }],
   }),

   resolve({
    extensions: [".js", ".jsx", ".ts", ".tsx", ".woff"],
    preserveSymlinks: true,
   }),

   typescript({
    exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
    tsconfig: "./tsconfig.json",
   }),

   copy({
    flatten: false,
    targets: [
     { dest: "dist", src: "public/fonts/**/*" },
     {
      dest: "dist",
      expandDirectories: true,
      onlyFiles: true,
      src: ["public/icons/**/*", "!public/icons/_temp_flags_"],
     },
    ],
   }),
  ],
 },

 {
  input: "src/assets/base.css",
  output: {
   dir: "dist",
   format: "esm",
  },
  plugins: [
   postcss({
    extract: "css/base.css",
    include: ["src/assets/base.css"],
    minimize: true,
    plugins: [autoprefixer()],
    sourceMap: false,
   }),
   del({
    hook: "writeBundle",
    targets: ["dist/base.js"],
   }),
  ],
 },

 // 3️⃣ Конфиг для fonts.css
 {
  input: "src/assets/fonts.css",
  output: {
   dir: "dist",
   format: "esm",
  },
  plugins: [
   postcss({
    extract: "css/fonts.css",
    include: ["src/assets/fonts.css"],
    minimize: true,
    plugins: [autoprefixer()],
    sourceMap: false,
   }),
   del({
    hook: "writeBundle",
    targets: ["dist/fonts.js"],
   }),
  ],
 },

 // 4️⃣ Конфиг для theme.css
 {
  input: "src/assets/theme.css",
  output: {
   dir: "dist",
   format: "esm",
  },
  plugins: [
   postcss({
    extract: "css/theme.css",
    include: ["src/assets/theme.css"],
    minimize: true,
    plugins: [autoprefixer()],
    sourceMap: false,
   }),
   del({
    hook: "writeBundle",
    targets: ["dist/theme.js"],
   }),
  ],
 },

 {
  external: [/\.(css|scss)$/, "class-variance-authority/types"],
  input: "dist/types/src/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "esm" }],
  plugins: [
   dts({
    compilerOptions: {
     baseUrl: path.resolve("dist/types"),
     paths: {
      "@/*": ["src/*"],
     },
    },
   }),
   del({ hook: "buildEnd", targets: "dist/types" }),
  ],
 },
]);
