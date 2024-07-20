module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: ['**/*.(css|scss)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'no-empty-source': null,
    'selector-type-no-unknown': [true, { ignoreTypes: ['page', 'view'] }],
  },
};
