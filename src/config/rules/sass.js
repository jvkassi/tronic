const ExtractTextPlugin = require('extract-text-webpack-plugin')

const use = ExtractTextPlugin.extract({
  fallback: require.resolve('style-loader'),
  use: [require.resolve('css-loader'), require.resolve('sass-loader')],
})

const rule = {
  use,
  test: /\.scss$/,
}

module.exports = rule
