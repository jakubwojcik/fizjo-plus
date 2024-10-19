import js from "@eslint/js";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/*"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
      perfectionist,
      prettier,
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      "sort-destructure-keys": sortDestructureKeys,
      "sort-keys-fix": sortKeysFix,
      unusedImports,
    },
    rules: {
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-sort-props": [
        "error",
        {
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...prettier.configs.recommended.rules,
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, prefix: "@", rootDir: "src" },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          ignoreCase: true,
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          type: "alphabetical",
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports.
            ["^\\u0000"],
            // Node.js builtins prefixed with `node:`.
            ["^node:"],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^@?\\w"],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ["^"],
            // Relative imports.
            // Anything that starts with a dot.
            ["^\\."],
          ],
        },
      ],
      "sort-destructure-keys/sort-destructure-keys": [
        "error",
        { caseSensitive: false },
      ],
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, minKeys: 2, natural: false },
      ],
    },
  },
);
