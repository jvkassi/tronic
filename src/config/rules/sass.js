const ExtractTextPlugin = require('extract-text-webpack-plugin')

const use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
})

const rule = {
  use,
  test: /\.scss$/,
}

module.exports = rule
