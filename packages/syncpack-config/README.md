# [syncpack-config](https://github.com/newlevelup/config/tree/develop/packages/syncpack-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Fsyncpack-config%2Fpackage.json&label=%20&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/syncpack-config?label=&logo=npm&color=CB0001)](https://www.npmjs.com/package/@newlevelup/syncpack-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/syncpack-config?label=&logo=github&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/syncpack-config)

New Level Up [shareable config](https://github.com/JamieMason/syncpack#-configuration-file) for [Syncpack](https://github.com/JamieMason/syncpack)

## Installation

Install Syncpack and `@newlevelup/syncpack-config`:

```sh
yarn add -D syncpack @newlevelup/syncpack-config
```

## Usage

> 💡 The purpose of the [syncpack](https://www.npmjs.com/package/syncpack) is formatting `package.json` and validating dependencies versions.

New Level Up Syncpack rules come bundled in `@newlevelup/syncpack-config`. To enable these rules, add a `.syncpackrc.js` or `syncpack.config.js` file. See the [Prettier configuration docs](https://github.com/JamieMason/syncpack#-configuration-file) for more details.

```javascript
// `syncpack.config.js` or `.syncpackrc.js`
  module.exports = require('@newlevelup/syncpack-config');
```

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is required, it is possible. Syncpack does not offer an "extends" mechanism as you might be familiar from tools such as ESLint.

To extend a configuration you will need to use a `syncpack.config.js` or `.syncpackrc.js` file that exports an object:

```javascript
module.exports = {
    ...require('@newlevelup/syncpack-config'),
    indent: '  ', // example override
};
```
