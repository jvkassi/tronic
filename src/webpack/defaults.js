import requireIfExists from 'require-if-exists'
import pkgDir from 'pkg-dir'

const dir = pkgDir.sync()

// Set environment variables
const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

// Set application entrypoint based on package.json
const pkg = requireIfExists(`${dir}/package.json`)
const entry = pkg.main || 'src/index.js'

const stats = {
  all: false,
  errors: true,
  moduleTrace: true,
  colors: true,
}

export default {
  devServer: {
    compress: true,
    contentBase: `${dir}/dist`,
    port: 9000,
    stats,
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  cache: true,
  mode: env,
  entry: [`${dir}/${entry}`],
  output: {
    path: `${dir}/dist`,
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
  stats,
}
