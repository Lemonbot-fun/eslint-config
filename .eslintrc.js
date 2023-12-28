
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [require.resolve('./packages/eslint-config-base/index')],
  rules: {},
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
};
