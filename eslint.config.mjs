import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Relax no-unused-vars for TypeScript types
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // Ignore variables/args starting with _
          varsIgnorePattern: "^_", // Ignore variables starting with _
          caughtErrorsIgnorePattern: "^_", // Ignore caught errors starting with _
          ignoreRestSiblings: true, // Allow unused variables in rest/spread patterns
          vars: "all",
          args: "after-used",
          ignoreTSDecorators: true, // Ignore unused TS types, interfaces, enums
        },
      ],
      // Additional rules for Next.js/TypeScript
      "react/prop-types": "off", // Disable prop-types (TypeScript handles this)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Allow implicit return types
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn/error
      "react/jsx-key": "error", // Enforce JSX key prop for lists
      "@typescript-eslint/no-explicit-any": "warn", // Warn on use of 'any' type
    },
  },
];

export default eslintConfig;