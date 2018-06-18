import requireIfExists from 'require-if-exists'
import { resolve } from 'path'

// Set environment variables
const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

// Set application entrypoint based on package.json
const pkg = requireIfExists(resolve(process.cwd(), 'package.json'))
const entry = pkg.main || 'src/index.js'

export default {
  devServer: {
    compress: true,
    contentBase: resolve(process.cwd(), 'dist'),
    port: 9000,
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [resolve(process.cwd(), entry)],
  output: {
    path: resolve(process.cwd(), 'dist'),
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
