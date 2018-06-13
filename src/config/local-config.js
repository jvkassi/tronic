/* eslint-disable no-empty, import/no-mutable-exports */
import { resolveFromCwd } from '../utils'

let localConfig = {}
try {
  localConfig = require(`${resolveFromCwd('webpack.config.js')}`)
} catch (e) {
}

export default localConfig
