# lemonbot/eslint-config-base

Enhances Airbnb's ESLint config with TypeScript support

## Setup

### 1) Install dependencies (and peer dependencies)

```bash
npm i @lemonbot.fun/eslint-config-base \
    @typescript-eslint/eslint-plugin@^5.0.0 \
    @typescript-eslint/parser@^5.0.0 \
    typescript \
    -D
            
# eg: pnpm
pnpm add @lemonbot.fun/eslint-config-base \
    @typescript-eslint/eslint-plugin@^5.0.0 \
    @typescript-eslint/parser@^5.0.0 \
    typescript \
    -D
  
# eg: yarn
yarn add @lemonbot.fun/eslint-config-base \
    @typescript-eslint/eslint-plugin@^5.0.0 \
    @typescript-eslint/parser@^5.0.0 \
    typescript \
    --dev
```

### 2) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  require.resolve('@lemonbot.fun/eslint-config-base/index'),
]
```

### 3) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.eslint.json`.

For example:

```diff
{
  extends: [
    '@lemonbot.fun/eslint-config-base'
  ],
+ parserOptions: {
+   project: './tsconfig.eslint.json'
+ }
}
```

### 4) Set module resolver. 

1. If you are not using compiler like `webpack` or `rullup`, add `eslint-import-resolver-typescript` to the `devDependencies`, add config to `eslintrc` like blow.

```diff
settings: {
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx']
  },
  'import/resolver': {
    'typescript': {
      'alwaysTryTypes': true,
      'project': './tsconfig.eslint.json',
    }
  }
},
```

2. If you are not using webpack, add `eslint-import-resolver-webpack` to the `devDependencies`, add config to `eslintrc` like blow.

```diff
settings: {settings: {
  'import/resolver': {
    webpack: {
      config: './path-to-your-webpack.config.js',
    }
  }
},
```

### 4) Run ESLint

Open a terminal to the root of your project, and run the following command:

```
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## Credits

Authored and maintained by Jason Chang ([Lemonbot](https://github.com/lemonbot-fun)).

## License

Open source [licensed as MIT](https://github.com/lemonbot-fun/eslint-config/blob/master/LICENSE).
