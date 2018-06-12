const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const yargs = require('yargs')

const { js, css, sass } = require('./rules')
const localConfig = require('../config/local-config')
const resolvePath = require('../utils/resolve-path')

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const defaultConfig = {
  devtool: isDev ? 'cheap-module-source-map' : false,
  mode: env,
  entry: [require.resolve('@babel/polyfill'), resolvePath('src/index.js')],
  output: {
    path: resolvePath('dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  externals: [],
  module: {
    rules: [js, css, sass],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
}

const { devtool, mode, target } = yargs.argv

const config = merge(
  defaultConfig,
  localConfig,
  { devtool, mode, target },
)

if (config.target === 'node') {
  config.externals.push(nodeExternals())
}

module.exports = config
