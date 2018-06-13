export default {
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
