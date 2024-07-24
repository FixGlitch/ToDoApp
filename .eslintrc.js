module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    '@react-native',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-native', '@typescript-eslint'],
  env: {
    'react-native/react-native': true,
    browser: true,
  },
};
