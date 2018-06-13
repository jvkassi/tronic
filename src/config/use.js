import ExtractTextPlugin from 'extract-text-webpack-plugin'
import yargs from 'yargs'
import * as rules from './rules'

const whitelist = Object.keys(rules)
let { use = [] } = yargs.argv
if (!Array.isArray(use)) {
  use = use.split(',')
}
use.forEach((rule) => {
  if (!whitelist.includes(rule)) {
    throw new Error('Invalid use parameter')
  }
})

const includeJS = use.includes('js')
const includeJSON = use.includes('json')
const includeCSS = use.includes('css')
const includeSASS = use.includes('sass')

export default {
  entry: [
    includeJS && require.resolve('@babel/polyfill'),
  ].filter(Boolean),
  module: {
    rules: [
      includeJS && rules.js,
      includeJSON && rules.json,
      includeCSS && rules.css,
      includeSASS && rules.sass,
    ].filter(Boolean),
  },
  plugins: [
    (includeCSS || includeSASS) && new ExtractTextPlugin('bundle.css'),
  ].filter(Boolean),
}
