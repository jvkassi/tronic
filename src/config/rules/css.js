const ExtractTextPlugin = require('extract-text-webpack-plugin')

const use = ExtractTextPlugin.extract({
  fallback: require.resolve('style-loader'),
  use: require.resolve('css-loader'),
})

const rule = {
  use,
  test: /\.css$/,
}

module.exports = rule
