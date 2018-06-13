import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: [require.resolve('css-loader'), require.resolve('sass-loader')],
  }),
}
