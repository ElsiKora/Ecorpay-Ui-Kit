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
   "@elsikora/json/no-comments": "off", // Запрещает комменты в json
   "@elsikora/jsx/no-autofocus": "off", // Запрещает автофокус на инпутах,
   "@elsikora/react/1/naming-convention/filename": "off", // Некорректные правила неймингов,
   "@elsikora/react/1/naming-convention/filename-extension": "off", // Заствялет указывать расширения файлов при импорте
   "@elsikora/react/1/no-context-provider": "off", // Форматирует Context.Provider в Context. Не собирается билд
   "@elsikora/react/2/jsx-curly-brace-presence": "off", // Заставляет оборачивать все строки в {}
   //    ["error", { children: "never", props: "never" }],
   "@elsikora/react/2/require-default-props": "off",
   "@elsikora/sonar/different-types-comparison": "off", // Запрещает сравнивать разные типы данных
   "@elsikora/tailwindcss/enforces-negative-arbitrary-values": "off", // Запрещает указывать негативные аттрибуты
   "@elsikora/typescript/explicit-function-return-type": "off", // Заставляет везде явно указывать тип возврата
   "@elsikora/typescript/explicit-module-boundary-types": "off", // Заставляет везде явно указывать тип возврата
   "@elsikora/typescript/naming-convention": "off", // Некорректные правила неймингов
   "@elsikora/typescript/no-floating-promises": "off", // Заставляет ждать все промисы. Не собирается билд
   "@elsikora/typescript/no-magic-numbers": "off", // Заставляет выносить все числа в отдельные константы и конфиги
   "@elsikora/typescript/restrict-template-expressions": "off",
   //  ["error", { allowNumber: true }], // Запрещает приводить к строке все, кроме чисел в интерполяции
   "@elsikora/typescript/typedef": "off", // Заставляет везде явно указывать типы,
   "@elsikora/typescript/unbound-method": "off", // Запрещает деструтуризировать функции

   //    "@typescript-eslint/no-explicit-any": "error",
   "no-console": ["warn", { allow: ["warn", "error"] }],
  },
 },
];
