const path = require('path')

module.exports = {

  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      root: 'Margarita',
      amd: 'margarita',
      commonjs: 'margarita'
    },
    libraryTarget: 'umd',
  },

  externals: {
    vue: 'vue'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
      }, {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }

}
