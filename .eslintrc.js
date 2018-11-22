module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'babel/semi': 0,
    'generator-star-spacing': 'off',
    'indent': [ 2, 2, {'SwitchCase': 1} ],
    'lines-between-class-members': [ 'error', 'always' ],
    'space-before-blocks': 'error',
    'lines-around-directive': [ 'error', 'always' ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/order-in-components': 0,
    'vue/max-attributes-per-line': [ 2, {
      'singleline': 2,
      'multiline': {
        'max': 2,
        'allowFirstLine': false
      }
    } ]
  }
}
