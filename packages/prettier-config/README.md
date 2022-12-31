# [prettier-config](https://github.com/newlevelup/config/tree/develop/packages/prettier-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Fprettier-config%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/prettier-config?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/@newlevelup/prettier-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/prettier-config?label=\&logo=github\&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/prettier-config)

New Level Up [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for [Prettier](https://prettier.io/)

## Installation

> 💡 The purpose of the `prettier` is to format your code's style issues so that the developers conforms to your organizations code formatting norm. It automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc.

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
