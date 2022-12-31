# [release-config](https://github.com/newlevelup/config/tree/develop/packages/release-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Frelease-config%2Fpackage.json&label=%20&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/release-config?label=&logo=npm&color=CB0001)](https://www.npmjs.com/package/@newlevelup/release-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/release-config?label=&logo=github&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/release-config)

New Level Up [shareable config](https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations) for [semantic-release](https://semantic-release.gitbook.io/)

## Installation

> 💡 The purpose of `semantic-release` is to automate the package release process be seamless. It automates the release process, updates the CHANGELOG and bumps the version all based on [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) messages.

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
