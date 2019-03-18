const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  config.module.rules.push({
    test: /\.md$/,
    use: [ {
      loader: 'html-loader'
    }, {
      loader: 'highlight-loader'
    }, {
      loader: 'markdown-loader',
      options: {
        breaks: true,
        gfm: true
      }
    } ],
    include: path.resolve(__dirname, '../../src')
  })

  // Return the altered config
  return config
}
