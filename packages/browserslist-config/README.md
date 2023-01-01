# [browserslist-config](https://github.com/newlevelup/config/tree/develop/packages/browserslist-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Fbrowserslist-config%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/browserslist-config?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/@newlevelup/browserslist-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/browserslist-config?label=\&logo=github\&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/browserslist-config)

New Level Up [shareable config](https://github.com/browserslist/browserslist#shareable-configs) for [Browserslist](https://github.com/browserslist/browserslist)

## Installation

> :bulb: The purpose of `Browserslist` is to specify which browsers should be support your current application by specifying "queries" in a config file. This is commonly used by all major frontend frameworks, but not limited only to it. More detailed information [here](https://stackoverflow.com/a/66234329).

Install `@newlevelup/browserslist-config`:

```sh
yarn add -D @newlevelup/browserslist-config
```

## Usage

New Level Up Browserslist rules come bundled in `@newlevelup/browserslist-config`. To enable these rules, add a `browserslist` property in your `package.json`. See the [Browserslist configuration docs](https://github.com/browserslist/browserslist#config-file) for more details.

```json
"browserslist": [
  "extends @newlevelup/browserslist-config"
]
```
