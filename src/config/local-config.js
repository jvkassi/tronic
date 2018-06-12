/* eslint-disable no-empty, import/no-mutable-exports */
import resolvePath from '../utils/resolve-path'

let localConfig = {}
try {
  localConfig = require(`${resolvePath('.bundler.js')}`)
} catch (e) {
}

export default localConfig
