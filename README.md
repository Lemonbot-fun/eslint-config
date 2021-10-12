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
yarn add --dev @jason-chang/eslint-config
# NPM
npm install --save-dev @jason-chang/eslint-config
```
2. Extend the config
```jsonc
// .eslintrc.json
{
  "extends": "@jason-chang/eslint-config"
}
```
