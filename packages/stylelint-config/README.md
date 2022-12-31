# [stylelint-config](https://github.com/newlevelup/config/tree/develop/packages/stylelint-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Fstylelint-config%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/stylelint-config?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/@newlevelup/stylelint-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/stylelint-config?label=\&logo=github\&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/stylelint-config)

New Level Up [shareable config](https://stylelint.io/user-guide/configuration#extends) for [stylelint](https://stylelint.io/)

## Installation

> :bulb: The purpose of `stylelint` is to style and format your `css`,
> `sass`, `scss` files. This takes cares of new style conventions and warns about
> old deprecated style rules.

Install stylelint and `@newlevelup/stylelint-config`:

```sh
yarn add -D stylelint @newlevelup/stylelint-config
```

### Prettier

`@newlevelup/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@newlevelup/prettier-config` installation guide](https://github.com/newlevelup/prettier-config#installation) for more details.

## Usage

New Level Up stylelint rules come bundled in `@newlevelup/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```json
"stylelint": {
  "extends": ["@newlevelup/stylelint-config"]
}
```

Now you can run stylelint by adding the following scripts to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```json
"scripts": {
  "lint:css": "stylelint --cache --ignore-path .gitignore '**/*.?(s)css'",
  "format:css": "yarn lint:css --fix"
}
```

Lint it:

```sh
yarn lint:css
```

Format it:

```sh
yarn format:css
```
