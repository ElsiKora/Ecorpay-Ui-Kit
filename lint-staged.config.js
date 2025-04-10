export default {
 "*": (files) => {
  const commands = [];
  commands.push("prettier --write --ignore-unknown");

  const eslintFiles = files.filter((fileName) => {
   const validExtensions = ["js", "jsx", "mjs", "cjs", "ts", "tsx", "json", "jsonc", "yml", "yaml"];
   const fileExtension = fileName.split(".").pop();
   const hasValidExtension = validExtensions.includes(fileExtension);
   const hasNoExtension = !fileName.includes(".");

   return hasValidExtension && !hasNoExtension;
  });

  if (eslintFiles.length > 0) {
   commands.push(
    `eslint --fix --report-unused-disable-directives --no-warn-ignored --max-warnings=0 ${eslintFiles.join(" ")}`,
   );
  }

  const styleFiles = files.filter((fileName) => {
   const validExtensions = ["css", "scss", "sass", "less", "style", "pcss", "styled", "stylus"];
   const fileExtension = fileName.split(".").pop();

   return validExtensions.includes(fileExtension);
  });

  if (styleFiles.length > 0) {
   //   --max-warnings=0
   commands.push(`stylelint  --fix ${styleFiles.join(" ")}`);
  }

  return commands;
 },
};
