const use = [require.resolve('babel-loader'), require.resolve('eslint-loader')]

const rule = {
  use,
  test: /\.js$/,
  exclude: /node_modules/,
}

module.exports = rule
