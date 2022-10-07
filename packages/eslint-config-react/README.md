# lemonbot/eslint-config-react

Enhances Airbnb's ESLint config with TypeScript support

## Setup

### 1) Install dependencies (and peer dependencies)

```bash
npm i @lemonbot.fun/eslint-config-react \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            -D
            
# eg: pnpm
pnpm add @lemonbot.fun/eslint-config-react \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            -D

#eg: yarn
yarn add @lemonbot.fun/eslint-config-react \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            --dev
```

### 2) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  '@lemonbot.fun/eslint-config-react',
]
```

## Credits

Authored and maintained by Jason Chang ([Lemonbot](https://github.com/lemonbot-fun)).

## License

Open source [licensed as MIT](https://github.com/lemonbot-fun/eslint-config/blob/master/LICENSE).
