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
      // Configure no-unused-vars to ignore TypeScript types
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // Ignore variables starting with _
          varsIgnorePattern: "^_", // Ignore variables starting with _
          caughtErrorsIgnorePattern: "^_", // Ignore caught errors starting with _
          ignoreRestSiblings: true, // Allow unused variables in rest/spread patterns
          // Ignore TypeScript types, interfaces, and enums
          vars: "all",
          args: "after-used",
          ignoreTSDecorators: true, // Ignore unused TS decorators
        },
      ],
      // Optional: Add other common rule customizations for Next.js/TypeScript
      "react/prop-types": "off", // Disable prop-types (not needed with TypeScript)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Allow implicit return types
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn and console.error
      "react/jsx-key": "error", // Enforce JSX key prop for lists
    },
  },
];

export default eslintConfig;