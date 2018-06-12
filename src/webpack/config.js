const { resolve } = require('path')

const cwd = process.cwd()
const path = f => resolve(cwd, f)

let config = {}
try {
  config = require(`${path('.bundler.js')}`)
} catch (e) {
  console.log('Configuration file missing, applying defaults...')
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path(config.entry || 'src/index.js'),
  output: {
    path: path(config.output && config.output.path || 'dist'),
    filename: config.output && config.output.filename || 'bundle.js',
  },
  target: config.target || 'web',
  externals: config.externals,
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
}
