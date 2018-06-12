const use = [
  {
    loader: require.resolve('babel-loader'),
    options: {
      extends: require.resolve('../../../.babelrc'),
    },
  },
  require.resolve('eslint-loader'),
]

const rule = {
  use,
  test: /\.js$/,
  exclude: /node_modules/,
}

module.exports = rule
