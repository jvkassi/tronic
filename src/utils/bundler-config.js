import resolvePath from './resolve-path'

let bundlerConfig = {}
try {
  bundlerConfig = require(`${resolvePath('.bundler.js')}`)
} catch (e) {
  bundlerConfig = { ...bundlerConfig }
}

export default { ...bundlerConfig }
