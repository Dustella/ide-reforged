module.exports = {
    extends: [
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue',
      'stylelint-config-recommended-vue/scss',
    ],
    "overrides": [
      {
        "files": ["**/*.{html,vue}"],
        "customSyntax": "postcss-html"
      },
      {
        "files": ["**/*.scss"],
        "customSyntax":"postcss-scss"
      }
    ]
  }