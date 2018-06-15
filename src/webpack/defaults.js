import { joinCwd, importIfExists, resolveCwd } from '../utils'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const pkg = importIfExists(resolveCwd('package.json'))
const entry = pkg.main || 'src/index.js'

export default {
  devServer: {
    compress: true,
    contentBase: joinCwd(''),
    port: 9000,
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [resolveCwd(entry)],
  output: {
    path: resolveCwd('dist'),
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
