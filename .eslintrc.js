module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // enable linting for jsx files
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: [
    '@typescript-eslint',
    'sort-destructure-keys',
    'sort-imports-es6-autofix',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for NextJs
    'react/react-in-jsx-scope': 'off',
    // NextJs specific fix: allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
    'react/display-name': 1,
    // Not quite helpful. Besides, when define default value in context, ()=>{} is handy
    '@typescript-eslint/no-empty-function': 'off',
    // Need to disable this in Next.js projects, since href is on the next/link component.
    'jsx-a11y/anchor-is-valid': 'off',
    'sort-destructure-keys/sort-destructure-keys': ['warn', { caseSensitive: false }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        // ignoreMemberSort: false,
        // memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
}
