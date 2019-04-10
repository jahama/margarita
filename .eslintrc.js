module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'babel/semi': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'generator-star-spacing': 'off',
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'lines-between-class-members': [ 'error', 'always' ],
    'space-before-blocks': 'error',
    'lines-around-directive': [ 'error', 'always' ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/order-in-components': 0,
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 2,
      'multiline': {
        'max': 2,
        'allowFirstLine': false,
      },
    } ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case' ],
  },
}
