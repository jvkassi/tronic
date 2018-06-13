import { resolveFromCwd } from '../utils'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const defaults = {
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [resolveFromCwd('src/index.js')],
  output: {
    path: resolveFromCwd('dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  externals: [],
  module: {
    rules: [],
  },
  plugins: [],
}

export default defaults
