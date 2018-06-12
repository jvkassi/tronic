/* eslint-disable no-empty */
const resolvePath = require('../utils/resolve-path')

let localConfig = {}
try {
  localConfig = require(`${resolvePath('.bundler.js')}`)
} catch (e) {
}

module.exports = localConfig
