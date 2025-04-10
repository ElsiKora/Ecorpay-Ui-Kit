import type { StorybookConfig } from "@storybook/react-vite";

import path from "node:path";
import { fileURLToPath } from "node:url";

import svgr from "vite-plugin-svgr";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
 addons: [
  "@storybook/addon-essentials",
  "@chromatic-com/storybook",
  "@storybook/addon-interactions",
 ],
 framework: {
  name: "@storybook/react-vite",
  options: {},
 },
 staticDirs: ["../public"],

 stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

 typescript: {
  reactDocgen: "react-docgen-typescript",
 },

 viteFinal(config) {
  if (config.resolve) {
   config.resolve.alias = {
    // eslint-disable-next-line @elsikora/typescript/no-misused-spread
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
   };
  }

  if (config.plugins) {
   config.plugins.push(svgr({ include: "**/*.svg" }));
  }

  return config;
 },
};
export default config;
