module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        // 'react/jsx-filename-extension': [1, {extensions: ['js', 'jsx']}],
        'react-hooks/exhaustive-deps': 'warn',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
