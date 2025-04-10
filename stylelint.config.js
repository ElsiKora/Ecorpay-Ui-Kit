export default {
 defaultSeverity: "warning",
 extends: [
  "stylelint-config-rational-order",
  "stylelint-prettier/recommended",
  "stylelint-config-standard",
  "stylelint-config-tailwindcss",
 ],
 plugins: ["stylelint-order", "stylelint-config-rational-order/plugin", "stylelint-prettier"],
};
