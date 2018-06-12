import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import yargs from 'yargs'

import { js, css, sass } from './rules'
import localConfig from '../config/local-config'
import resolvePath from '../utils/resolve-path'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const defaultConfig = {
  devtool: isDev ? 'cheap-module-source-map' : false,
  mode: env,
  entry: resolvePath('src/index.js'),
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

export default config
