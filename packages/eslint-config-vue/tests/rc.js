module.exports = {
  env: {
    node: true,
  },
  extends: [require.resolve('../index')],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
};
