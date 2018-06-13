const ExtractTextPlugin = require('extract-text-webpack-plugin')

const js = {
  test: /\.js$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        extends: require.resolve('../../.babelrc'),
      },
    },
    require.resolve('eslint-loader'),
  ],
  exclude: /node_modules/,
}

const json = {
  test: /\.json$/,
  use: require.resolve('json-loader'),
}

const css = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: require.resolve('css-loader'),
  }),
}

const sass = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: [require.resolve('css-loader'), require.resolve('sass-loader')],
  }),
}

module.exports = {
  js, json, css, sass,
}
