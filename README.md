eslint-config
================

[![npm version](https://img.shields.io/npm/v/eslint-config.svg)](https://npmjs.org/package/eslint-config)

The config extends [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) by adding support for the following:

* [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
* [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)

and more...

## Usage

1. Install the config:
```bash
# Yarn
yarn add --dev @lemonbot.fun/eslint-config-base
# NPM
npm install --save-dev @lemonbot.fun/eslint-config-base
```
2. Extend the config
```jsonc
// .eslintrc.json
{
  "extends": "@lemonbot.fun/eslint-config-base"
}
```
