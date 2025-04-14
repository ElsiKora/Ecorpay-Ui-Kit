export default {
 defaultSeverity: "warning",
 extends: [
  "stylelint-config-rational-order",
  "stylelint-prettier/recommended",
  "stylelint-config-standard",
 ],
 plugins: ["stylelint-order", "stylelint-config-rational-order/plugin", "stylelint-prettier"],
};
