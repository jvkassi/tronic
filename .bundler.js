const nodeExternals = require('webpack-node-externals')

module.exports = {
  features: {
    babel: true,
    css: true,
    sass: true,
    eslint: true,
    extract: true
  },
  webpack: {
    target: 'node',
    externals: [nodeExternals()]
  }
}
