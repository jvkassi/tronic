const use = ['babel-loader', 'eslint-loader']

const rule = {
  use,
  test: /\.js$/,
  exclude: /node_modules/,
}

module.exports = rule
