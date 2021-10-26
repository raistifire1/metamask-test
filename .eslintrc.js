module.exports = {
  env: {
    'browser': true,
  },
  parserOptions: {
    'ecmaVersion': 2018,
  },
  globals: {
    'web3': 'readonly',
    'ethereum': 'readonly',
  },
  plugins: [
    'json',
  ],
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/nodejs',
  ],
  overrides: [{
    'files': ['src/index.js'],
    'parserOptions': {
      'sourceType': 'module',
    },
  }],
  rules: {
    'linebreak-style': 0,
  },
  ignorePatterns: [
    '!.eslintrc.js',
    'dist',
  ],
}
