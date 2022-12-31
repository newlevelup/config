# [renovate-config](https://github.com/newlevelup/config/tree/develop/packages/renovate-config) ![Package version](https://img.shields.io/github/package-json/v/newlevelup/config?filename=packages%2Frenovate-config%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/@newlevelup/renovate-config?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/@newlevelup/renovate-config) [![Github Package version](https://img.shields.io/npm/v/@newlevelup/renovate-config?label=\&logo=github\&color=24292f)](https://github.com/newlevelup/config/pkgs/npm/renovate-config)

New Level Up [shareable config](https://docs.renovatebot.com/config-presets/) for [Renovate](http://renovatebot.com/)

## Usage

> 💡 The purpose of `renovate` is to automate the dependency management such that all your dependencies are up to date. It creates new PR whenever a new version of a package is release to the package registry.

New Level Up Renovate rules come bundled in `@newlevelup/renovate-config`. To enable these rules, add a `renovate` property in your `package.json`. See the [Renovate configuration docs](https://docs.renovatebot.com/configuration-options/) for more details.

```json
"renovate": {
  "extends": ["@newlevelup"]
}
```
