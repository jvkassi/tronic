import requireIfExists from 'require-if-exists'
import { sync } from 'find-up'

// Set environment variables
const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

// Set application entrypoint based on package.json
const pkg = requireIfExists(sync('package.json'))
const entry = pkg.main || 'src/index.js'

export default {
  devServer: {
    compress: true,
    contentBase: sync('dist'),
    port: 9000,
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [sync(entry)],
  output: {
    path: sync('dist'),
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
  stats: {
    chunks: false,
    colors: true,
  },
}
