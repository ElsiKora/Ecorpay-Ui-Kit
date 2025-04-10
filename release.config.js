import process from "node:process";

const reference = process.env.GITHUB_REF;
const branch = reference ? reference.split("/").pop() : process.env.BRANCH || "unknown";

const config = {
 branches: [
  "main",
  {
   channel: "beta",
   name: "dev",
   prerelease: true,
  },
 ],
 plugins: [
  [
   "@semantic-release/commit-analyzer",
   {
    parserOpts: {
     noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
    },
    preset: "conventionalcommits",
    releaseRules: [
     { breaking: true, release: "major" },
     { release: "minor", type: "feat" },
     { release: "patch", type: "fix" },
     { release: "patch", type: "docs" },
    ],
   },
  ],
  "@semantic-release/release-notes-generator",
  "@semantic-release/github",
  [
   "@semantic-release/npm",
   {
    access: "public",
   },
  ],
 ],
 repositoryUrl: "https://github.com/ElsiKora/Ecorpay-Ui-Kit",
};

const isPrereleaseBranch = config.branches.some(
 (b) => typeof b === "object" && branch.includes(b.name) && b.prerelease,
);

if (isPrereleaseBranch) {
 config.plugins.push([
  "@semantic-release/git",
  {
   assets: ["package.json"],
   message: "chore(release): ${nextRelease.version} [skip ci]",
  },
 ]);
} else {
 config.plugins.push(
  [
   "@semantic-release/changelog",
   {
    changelogFile: "CHANGELOG.md",
   },
  ],
  [
   "@semantic-release/git",
   {
    assets: ["package.json", "CHANGELOG.md"],
    message: "chore(release): ${nextRelease.version} [skip ci]",
   },
  ],
  [
   "@saithodev/semantic-release-backmerge",
   {
    backmergeBranches: ["dev"],
    backmergeStrategy: "rebase",
    message: "chore(release): synchronization [skip ci]",
   },
  ],
 );
}

export default config;
