# commitlint-config [![NPM version](https://img.shields.io/npm/v/@newlevelup/commitlint-config.svg)](https://www.npmjs.com/package/@newlevelup/commitlint-config)

New Level Up [shareable config](https://commitlint.js.org/#/concepts-shareable-config) for [commitlint](https://commitlint.js.org/)

## Installation

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
