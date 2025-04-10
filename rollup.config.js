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
import tailwind from "tailwindcss";

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

   postcss({
    extract: "fonts.css",
    include: "src/assets/fonts.css",
    minimize: true,
    plugins: [tailwind, autoprefixer],
   }),

   postcss({
    extract: "style.css",
    include: "src/assets/style.css",
    minimize: true,
    plugins: [tailwind, autoprefixer],
   }),

   postcss({
    extract: "tailwind.css",
    include: "src/assets/tailwind.css",
    minimize: true,
    plugins: [tailwind, autoprefixer],
   }),

   copy({
    flatten: false,
    hook: "writeBundle",
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
