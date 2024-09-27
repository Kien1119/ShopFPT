module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false, // This will prevent the Babel config file error
  },
  rules: {
    "vue/multi-word-component-names": "off", // Disable multi-word component names requirement
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ], // Adjust how unused vars are handled
  },
};
