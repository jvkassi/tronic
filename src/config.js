const { resolve } = require('path')

const cwd = process.cwd()
const path = f => resolve(cwd, f)
let json

try {
  json = require(path('.bundler.js'))
} catch (e) {
  json = {}
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path(json.entry || 'src/index.js'),
  output: {
    path: path(json.output || 'public/dist'),
    filename: 'bundle.js',
  },
  plugins: { ...json.plugins },
}
