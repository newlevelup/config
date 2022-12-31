# [eslint-config](https://github.com/newlevelup/config/tree/develop/packages/eslint-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Feslint-config%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/eslint-config?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/@newlevelup/eslint-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/eslint-config?label=\&logo=github\&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/eslint-config)

New Level Up [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/)

## Installation

> :bulb: The purpose of `eslint` is to lint `javascript` and `typescript` files such that it conforms your organization practice. Its also performs automated scans of your files for common syntax, style errors and potential organization based code rule violations.

Install ESLint and `@newlevelup/eslint-config`:

```sh
npm install --save-dev eslint @newlevelup/eslint-config
```

### Prettier

`@newlevelup/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@newlevelup/prettier-config` installation guide](https://github.com/newlevelup/prettier-config#installation) for more details.

## Usage

New Level Up ESLint rules come bundled in `@newlevelup/eslint-config`. To enable these rules, add an `eslintConfig` property in your `package.json`. See the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring) for more details.

```json
"eslintConfig": {
  "extends": ["@newlevelup"]
}
```

Now you can run ESLint by adding the following scripts to your `package.json`. See the [ESLint CLI docs](https://eslint.org/docs/user-guide/command-line-interface) for more details.

```json
"scripts": {
  "lint:js": "eslint --cache --ignore-path .gitignore .",
  "format:js": "yarn lint:js --fix"
}
```

Lint it:

```sh
yarn lint:js
```

Format it:

```sh
yarn format:js
```
