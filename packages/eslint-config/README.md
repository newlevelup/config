# eslint-config [![NPM version](https://img.shields.io/npm/v/@newlevelup/eslint-config.svg)](https://www.npmjs.com/package/@newlevelup/eslint-config)

New Level Up [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/)

## Installation

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
