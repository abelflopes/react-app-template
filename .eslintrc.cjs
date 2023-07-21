module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".prettierrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    // React
    "react-hooks",
    // Formatting
    "prettier",
    "import-helpers",
    // Docs
    "eslint-plugin-tsdoc",
    // Bundling
    "react-refresh",
  ],
  rules: {
    // Javascript
    "eqeqeq": 2,
    "no-console": 2,
    "require-await": 2,
    "vars-on-top": 2,
    // React
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-max-props-per-line": [2, { maximum: 2, when: "multiline" }],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/self-closing-comp": 2,
    "react-hooks/rules-of-hooks": 2, // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 2, // Checks effect dependencies
    "react/react-in-jsx-scope": "off",
    // Formatting - Generic
    "max-len": [
      2,
      {
        code: 100, // Sync with prettier
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "*", next: "try" },
    ],
    "arrow-body-style": [2, "as-needed"],
    "prettier/prettier": [
      1,
      {
        endOfLine: "lf", // Sync with prettier
      },
    ],
    "linebreak-style": ["error", "unix"], // Force linux line break style / Sync with prettier
    // Formatting - Imports
    // https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
    "import-helpers/order-imports": [
      1,
      {
        // newlinesBetween: "always", // new line between groups
        // groups: ["/^react/", "module", ["parent", "sibling", "index"]],
        // groups: ["/react/", "/layout/", "/partial/", "/component/", "/redux/", "/rout/", "/util/"],
        // alphabetize: { order: "asc", ignoreCase: true },
        groups: ["/^react/"],
        // habetize: { order: "ignore" },
      },
    ],
    // https://eslint.org/docs/rules/sort-imports
    "sort-imports": [
      1,
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    // Docs
    "tsdoc/syntax": 1,
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
