//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default [
  ...tanstackConfig,
  ...oxlint.configs['flat/recommended'],
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    extends: [
      'eslint:recommended',
      // ... other extends (e.g., "next", "airbnb")
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    // ... other ESLint configurations
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]
