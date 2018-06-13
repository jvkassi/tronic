const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const yargs = require('yargs')
const { resolve } = require('path')

const localConfig = require('../config/local-config')
const {
  js, json, css, sass,
} = require('./rules')

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const defaultConfig = {
  devtool: isDev ? 'cheap-module-source-map' : false,
  mode: env,
  entry: [require.resolve('@babel/polyfill'), resolve(process.cwd(), 'src/index.js')],
  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  externals: [],
  module: {
    rules: [js, json, css, sass],
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
