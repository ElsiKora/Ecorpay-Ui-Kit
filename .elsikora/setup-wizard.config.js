export default {
 ci: {
  isEnabled: true,
  isNpmPackage: true,
  moduleProperties: {
   dependabot: {
    devBranchName: "dev",
   },
   "release-npm": {
    isPrerelease: true,
    mainBranch: "main",
    preReleaseBranch: "dev",
   },
  },
  modules: ["codecommit-sync", "dependabot", "qodana", "release-npm", "snyk"],
  provider: "GitHub",
 },
 commitlint: {
  isEnabled: true,
 },
 eslint: {
  features: [
   "sonar",
   "unicorn",
   "perfectionist",
   "javascript",
   "typescript",
   "jsx",
   "json",
   "yaml",
   "packageJson",
   "markdown",
   "react",
   "storybook",
   "regexp",
   "tailwindCss",
   "prettier",
   "stylistic",
   "css",
   "noSecrets",
  ],
  isEnabled: true,
 },
 gitignore: {
  isEnabled: true,
 },
 ide: {
  ides: ["vs-code"],
  isEnabled: true,
 },
 license: {
  author: "Elsikora",
  isEnabled: true,
  license: "MIT",
  year: 2025,
 },
 "lint-staged": {
  features: ["eslint", "prettier", "stylelint"],
  isEnabled: true,
 },
 prettier: {
  isEnabled: true,
 },
 "semantic-release": {
  developBranch: "dev",
  isBackmergeEnabled: true,
  isEnabled: true,
  isPrereleaseEnabled: true,
  mainBranch: "main",
  preReleaseBranch: "dev",
  preReleaseChannel: "beta",
  repositoryUrl: "https://github.com/ElsiKora/Ecorpay-Ui-Kit",
 },
 stylelint: {
  isEnabled: true,
 },
};
