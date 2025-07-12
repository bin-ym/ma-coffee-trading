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
      "@typescript-eslint/no-unused-vars": "off", // Disable the rule entirely
      "react/prop-types": "off", // Disable prop-types as we use TypeScript
      "@typescript-eslint/explicit-module-boundary-types": "off", // Allow omitting return types
      "no-console": ["warn", { allow: ["warn", "error", "log"] }], // Allow specific console methods
      "react/jsx-key": "error", // Ensure keys are provided for JSX elements
      "@typescript-eslint/no-explicit-any": "warn", // Warn on 'any' type usage
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Prefer interfaces over type aliases
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
    },
  },
];

export default eslintConfig;