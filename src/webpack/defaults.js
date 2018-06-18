import findUp from 'find-up'
import requireIfExists from 'require-if-exists'

// Set environment variables
const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

// Set application entrypoint based on package.json
const pkg = requireIfExists(findUp.sync('package.json'))
const entry = pkg.main || 'src/index.js'

export default {
  devServer: {
    compress: true,
    contentBase: findUp.sync('dist'),
    port: 9000,
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [findUp.sync(entry)],
  output: {
    path: findUp.sync('dist'),
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
