# [prettier-config](https://github.com/newlevelup/config/tree/develop/packages/prettier-config) [![NPM version](https://img.shields.io/npm/v/@newlevelup/prettier-config.svg)](https://www.npmjs.com/package/@newlevelup/prettier-config)

New Level Up [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for [Prettier](https://prettier.io/)

## Installation

Install Prettier and `@newlevelup/prettier-config`:

```sh
yarn add -D prettier @newlevelup/prettier-config
```

## Usage

New Level Up Prettier rules come bundled in `@newlevelup/prettier-config`. To enable these rules, add a `prettier` property in your `package.json`. See the [Prettier configuration docs](https://prettier.io/docs/en/configuration.html) for more details.

```json
"prettier": "@newlevelup/prettier-config"
```

If you don't want to use `package.json`, you can use any of the supported extensions to export a string:

```jsonc
// `.prettierrc.json`
"@newlevelup/prettier-config"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@newlevelup/prettier-config';
```

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is required, it is possible. Prettier does not offer an "extends" mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to use a `prettier.config.js` or `.prettierrc.js` file that exports an object:

```javascript
module.exports = {
    ...require('@newlevelup/prettier-config'),
    semi: false
};
```
