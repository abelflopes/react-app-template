/** @type import("eslint").Linter.Config */
const config = {
  extends: "@abelflopes/eslint-config-tsr-pro",
  rules: {
    // prefer component arrow functions
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // ignore to allow usage of tsconfig aliases
    "import/no-unresolved": 1,
    // allow abbreviations
    "unicorn/prevent-abbreviations": [
      1,
      {
        checkProperties: true,
        allowList: {
          db: true,
          param: true,
          params: true,
          props: true,
          Props: true,
        },
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": 1,
    "unicorn/filename-case": [
      1,
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    "react/button-has-type": 1,
    "no-implicit-coercion": 1,
    "unicorn/no-array-reduce": 1,
    "unicorn/no-array-for-each": 1,
  },
};

module.exports = config;
