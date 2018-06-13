import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: require.resolve('css-loader'),
  }),
}
