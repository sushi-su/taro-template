module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss,html}': ['stylelint --fix'],
  '**/*': 'prettier --write --ignore-unknown',
};
