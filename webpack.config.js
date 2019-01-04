const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      root: 'Margarita',
      amd: 'margarita',
      commonjs: 'margarita'
    },
    libraryTarget: 'umd'
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
        ]
      }, {
        test: /\.(jpg|png|gif|eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([ {
      from: 'src/assets/fonts',
      to: 'fonts'
    } ]),
    new CopyWebpackPlugin([{
      from: 'src/assets/icons',
      to: 'icons'
    }]),
    new CopyWebpackPlugin([ {
      from: 'src/scss',
      to: 'scss'
    } ])
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
