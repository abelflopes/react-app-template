/** @type import("eslint").Linter.Config */
const config = {
  extends: "@abelflopes/eslint-config-tsr-pro",
  rules: {
    "no-duplicate-imports": 1,  // type imports on default conflict 
  }
};

module.exports = config;
