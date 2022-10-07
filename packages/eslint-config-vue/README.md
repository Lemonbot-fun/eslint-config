# lemonbot/eslint-config-vue

Enhances Airbnb's ESLint config with TypeScript support

## Setup

### 1) Install dependencies (and peer dependencies)

```bash
npm i @lemonbot.fun/eslint-config-vue \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            -D
            
# eg: pnpm
pnpm add @lemonbot.fun/eslint-config-vue \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            -D 
            
# eg: yarn
yarn add @lemonbot.fun/eslint-config-vue \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            --dev
```

### 2) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  '@lemonbot.fun/eslint-config-vue',
],
```
#### Setting import resolver.
If you are using `vue-cli` add config blow
```diff
settings: {
  'import/resolver': {
    webpack: {
      config: require.resolve('@vue/cli-service/webpack.config.js'),
    }
  }
},
```
If you are using webpack standalone, add config blow
```diff
settings: {
  'import/resolver': {
    webpack: {
      config: './path-to-your-webpack.config.js',
    }
  }
},
```

## Credits

Authored and maintained by Jason Chang ([Lemonbot](https://github.com/lemonbot-fun)).

## License

Open source [licensed as MIT](https://github.com/lemonbot-fun/eslint-config/blob/master/LICENSE).
