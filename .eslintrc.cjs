/** @type import("eslint").Linter.Config */
const config = {
  extends: "@abelflopes/eslint-config-tsr-pro",
  rules: {
    "no-duplicate-imports": 1,  // type imports on default conflict 
    "react/jsx-no-literals": 1
  }
};

module.exports = config;
