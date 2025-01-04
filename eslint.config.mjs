import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // Aquí puedes agregar reglas personalizadas si es necesario
    rules: {
      // Ejemplo de regla personalizada
      "no-console": "warn",
    },
  },
];

export default eslintConfig;