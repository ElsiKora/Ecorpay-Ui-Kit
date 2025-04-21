import { createConfig } from "@elsikora/eslint-config";

const config = {
 ignores: [
  "package-lock.json",
  "yarn.lock",
  "bun.lock",
  "pnpm-lock.yaml",
  ".elsikora/commitlint-ai.config.js",
  "dist",
  "bin",
  "build",
  "out",
  "www",
  "public/build",
  "_site",
  "release",
  "node_modules",
  "storybook-static",
  ".env",
  ".env.local",
  ".env.*",
  "coverage",
  ".cache",
  "public",
  "static",
  "assets",
  "uploads",
  "*.png",
  "*.jpg",
  "*.jpeg",
  "*.gif",
  "*.svg",
  "*.ico",
  "*.md",
  "*.mdx",
  "tmp",
  ".temp",
  "**/*.d.ts",
  "**/*.spec.ts",
  "**/*.test.ts",
  "**/*.e2e-spec.ts",
  "__tests__",
  "test",
  "tests",
  ".rollup.cache",
 ],
};

export default [
 config,
 ...(await createConfig({
  withCss: false,
  withJavascript: true,
  withJson: true,
  withJsx: true,
  withMarkdown: true,
  withNoSecrets: true,
  withPackageJson: true,
  withPerfectionist: true,
  withPrettier: true,
  withReact: true,
  withRegexp: true,
  withSonar: true,
  withStorybook: true,
  withStylistic: true,
  withTailwindCss: true,
  withTypescript: true,
  withUnicorn: true,
  withYaml: true,
 })),

 {
  languageOptions: {
   globals: {
    NodeJS: true,
    React: true,
   },
  },
 },

 {
  rules: {
   "@elsikora/react/1/no-context-provider": "off", // Форматирует Context.Provider в Context. Не собирается билд
  },
 },
];
