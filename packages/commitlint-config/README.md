# [commitlint-config](https://github.com/newlevelup/config/tree/develop/packages/commitlint-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Fcommitlint-config%2Fpackage.json&label=%20&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/commitlint-config?label=&logo=npm&color=CB0001)](https://www.npmjs.com/package/@newlevelup/commitlint-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/commitlint-config?label=&logo=github&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/commitlint-config)

New Level Up [shareable config](https://commitlint.js.org/#/concepts-shareable-config) for [commitlint](https://commitlint.js.org/)

## Installation

> 💡 The purpose of the `commitlint` is to lint commit messages such that it conforms to the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) such that it is machine readable. ex. `<type>[optional scope]: <description>`

Install `@newlevelup/commitlint-config`:

```sh
yarn add -D @commitlint/cli @newlevelup/commitlint-config
```

### Husky

`@newlevelup/commitlint-config` should be used in conjunction with [Husky](https://github.com/typicode/husky). See the [Husky installation guide](https://github.com/typicode/husky#install) for more details.

## Usage

New Level Up commitlint rules come bundled in `@newlevelup/commitlint-config`. To enable these rules, add a `commitlint` property in your `package.json`. See the [commitlint configuration docs](https://commitlint.js.org/#/reference-configuration) for more details.

```json
"commitlint": {
  "extends": ["@newlevelup"]
}
```

Now you can run commitlint by adding the following scripts to your package.json.

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```
