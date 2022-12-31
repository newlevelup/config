# [release-config]() [![NPM version](https://img.shields.io/npm/v/@newlevelup/release-config.svg)](https://www.npmjs.com/package/@newlevelup/release-config)

New Level Up [shareable config](https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations) for [semantic-relase](https://semantic-release.gitbook.io/)

## Installation

Install semantic-relase and `@newlevelup/release-config`:

```sh
yarn add -D semantic-release @newlevelup/release-config
```

## Usage

New Level Up semantic-release rules come bundled in `@newlevelup/release-config`. To enable these rules, add a `release` property in your `package.json`. See the [semantic-release configuration docs](https://semantic-release.gitbook.io/semantic-release/usage/configuration) for more details.

```json
"release": {
  "extends": "@newlevelup/release-config"
}
```

## Multiple registry release

To release package to multiple registries for example GitHub Private Registry and NPM Public Registry use `@newlevelup/release-config/npm-multiple`. See the [semantic-release-npm-multiple configuration docs](https://github.com/amanda-mitchell/semantic-release-npm-multiple#configuration) for more details.

```json
"release": {
  "extends": "@newlevelup/release-config/npm-multiple"
}
```
