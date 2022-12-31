module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-css-modules'
  ],
  rules: {
    // Handle collision between SCSS and CSS Modules rules
    // See: https://github.com/pascalduez/stylelint-config-css-modules/issues/6#issuecomment-640194712
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value']
      }
    ],
    'function-no-unknown': null,
    'scss/function-no-unknown': null,

    'selector-class-pattern': null,
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: [
          // Adds support for CSS Modules composes
          'composes'
        ]
      }
    ]
  }
}
