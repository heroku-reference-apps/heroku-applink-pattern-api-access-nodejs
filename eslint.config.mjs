import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
    },
  },
  {
    files: ['**/*.test.js', '**/test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
