import { get } from 'lodash'
import { resolve } from 'path'
import jsLoaders from './jsLoaders'
import cssLoaders from './cssLoaders'
import sassLoaders from './sassLoaders'
import plugins from './plugins'

const cwd = process.cwd()
const resolvePath = f => resolve(cwd, f)

let config = {}
try {
  config = { ...config, ...require(`${resolvePath('.bundler.js')}`) }
} catch (e) {
  console.log('Configuration file missing, applying defaults...')
}

export default {
  devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-source-map' : false,
  mode: process.env.NODE_ENV || 'development',
  entry: resolvePath(get(config, 'webpack.entry', 'src/index.js')),
  output: {
    path: resolvePath(get(config, 'webpack.output.path', 'dist')),
    filename: get(config, 'webpack.output.filename', 'bundle.js'),
  },
  target: get(config, 'webpack.target', 'web'),
  externals: get(config, 'webpack.externals', []),
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
