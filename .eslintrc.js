module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    './node_modules/eslint-config-hackreactor/index.js'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};


// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//     jest: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//     // 'no-console': 'off',
//     'react/prop-types': ['off'],
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
//     // ignoreReadBeforeAssign: false,
//   },
// };