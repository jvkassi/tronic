import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import yargs from 'yargs'
import { resolveFromCwd, resolveModulePath } from '../utils'

import localConfig from '../config/local-config'
import { js, json, css, sass } from './rules'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const defaultConfig = {
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [resolveModulePath('@babel/polyfill'), resolveFromCwd('src/index.js')],
  output: {
    path: resolveFromCwd('dist'),
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

const { mode, target } = yargs.argv

const config = merge(
  defaultConfig,
  localConfig,
  { mode, target },
)

if (config.target === 'node') {
  config.externals.push(nodeExternals())
}

export default config
