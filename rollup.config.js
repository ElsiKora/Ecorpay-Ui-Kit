import path from "node:path";

import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import { execaCommand } from "execa";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";

import packageJson from "./package.json" with { type: "json" };

const compileTailwindFile = async (inputFileUrl, outpuFileName) => {
 try {
  await execaCommand(
   `npx @tailwindcss/cli -i ${inputFileUrl} -o dist/css/${outpuFileName} --minify`,
  );
 } catch (error) {
  console.error(`❌ Failed to compile ${inputFileUrl}:`, error);

  throw error;
 }
};

const compileCss = async () => {
 // eslint-disable-next-line no-console
 console.log(`⌛️ Compiling Tailwind CSS...`);

 try {
  const tasks = [
   compileTailwindFile("src/assets/css/base.css", "base.css"),
   compileTailwindFile("src/assets/css/theme/theme.css", "theme.css"),
   compileTailwindFile("src/assets/css/utilities.css", "utilities.css"),
   compileTailwindFile("src/assets/fonts.css", "fonts.css"),
  ];

  await Promise.all(tasks);
  // eslint-disable-next-line no-console
  console.log("✅ Tailwind CSS compiled successfully!");
 } catch (error) {
  console.error("❌ Build failed:", error);

  throw error;
 }
};

// Кастомный плагин для выполнения @tailwindcss/cli
const tailwindPlugin = () => ({
 async buildStart() {
  try {
   await compileCss();
  } catch (error) {
   console.error("❌ Failed to compile Tailwind CSS:", error);

   throw error;
  }
 },
 name: "tailwind",
});

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

   tailwindPlugin(),

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
