import { importIfExists, resolveFromCwd } from '../utils'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const pkg = importIfExists(resolveFromCwd('package.json'))
const entry = pkg.main || 'src/index.js'

export default {
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [resolveFromCwd(entry)],
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
  resolve: {
    extensions: ['.js'],
  },
}
