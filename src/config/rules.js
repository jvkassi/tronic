import ExtractTextPlugin from 'extract-text-webpack-plugin'

export const js = {
  test: /\.js$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: true,
        presets: [
          '@babel/preset-env',
          ['@babel/preset-stage-0', { decoratorsLegacy: true }],
        ],
      },
    },
    require.resolve('eslint-loader'),
  ],
  exclude: /node_modules/,
}

export const json = {
  test: /\.json$/,
  use: require.resolve('json-loader'),
}

export const css = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: require.resolve('css-loader'),
  }),
}

export const sass = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: require.resolve('style-loader'),
    use: [require.resolve('css-loader'), require.resolve('sass-loader')],
  }),
}
