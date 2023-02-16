module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': 0,
  },
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.stories.tsx',
          '**/*.config.ts',
          '**/*.config.cjs',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
};
