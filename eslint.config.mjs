import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
// Configuración del parser y parserOptions
// export const parser = "@typescript-eslint/parser"; // Si usas TypeScript
export const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};