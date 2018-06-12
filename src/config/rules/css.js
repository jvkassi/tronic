import ExtractTextPlugin from 'extract-text-webpack-plugin'

const use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader',
})

const rule = {
  use,
  test: /\.css$/,
}

export default rule
