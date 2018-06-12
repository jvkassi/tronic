import merge from 'webpack-merge'
import { get, set } from 'lodash'
import jsLoaders from './js-loaders'
import cssLoaders from './css-loaders'
import sassLoaders from './sass-loaders'
import externals from './externals'
import plugins from './plugins'
import bundlerConfig from '../utils/bundler-config'
import resolvePath from '../utils/resolve-path'

export default function buildConfig(argv) {
  const defaultConfig = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: 'src/index.js',
    output: {
      path: resolvePath('dist'),
      filename: 'bundle.js',
    },
    target: 'web',
    externals: [],
    module: {
      rules: [],
    },
    plugins: [],
  }

  const config = merge(defaultConfig, bundlerConfig)

  if (argv.target) {
    set(config, 'webpack.target', argv.target)
  }

  return {
    devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-source-map' : false,
    mode: process.env.NODE_ENV || 'development',
    entry: resolvePath(get(config, 'webpack.entry', 'src/index.js')),
    output: {
      path: resolvePath(get(config, 'webpack.output.path', 'dist')),
      filename: get(config, 'webpack.output.filename', 'bundle.js'),
    },
    target: get(config, 'webpack.target', 'web'),
    externals: externals(config),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: jsLoaders(config),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: cssLoaders(config),
        },
        {
          test: /\.scss$/,
          use: sassLoaders(config),
        },
      ],
    },
    plugins: plugins(config),
  }
}
