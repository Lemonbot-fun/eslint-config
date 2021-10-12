module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
  overrides: [
    {
      files: [
        '**/__tests__/*.js',
        '**/tests/unit/**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
