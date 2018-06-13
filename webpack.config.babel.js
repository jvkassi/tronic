import nodeExternals from 'webpack-node-externals'
import { resolve } from 'path'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

export default {
  devtool: isDev ? 'cheap-module-source-map' : false,
  mode: env,
  entry: ['@babel/polyfill', resolve(__dirname, 'src/index.js')],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
}
