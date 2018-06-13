/* eslint-disable no-empty */
const { resolve } = require('path')

let localConfig = {}
try {
  localConfig = require(`${resolve(process.cwd(), 'webpack.config.js')}`)
} catch (e) {
}

module.exports = localConfig
