# lemonbot/eslint-config-base

Enhances Airbnb's ESLint config with TypeScript support

## Setup

### 1) Install dependencies (and peer dependencies)

```bash
npm install @lemonbot.fun/eslint-config-base \
            @typescript-eslint/eslint-plugin@^4.29.3 \
            @typescript-eslint/parser@^4.29.3 \
            --save-dev
```

### 2) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  '@lemonbot/eslint-config-base/index',
]
```

### 3) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
{
  extends: ['@lemonbot/eslint-config-base/index'],
+ parserOptions: {
+   project: './tsconfig.json'
+ }
}
```

### 4) Run ESLint

Open a terminal to the root of your project, and run the following command:

```
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## Credits

Authored and maintained by Jason Chang ([Lemonbot](https://github.com/Lemonbot-fun).

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).
