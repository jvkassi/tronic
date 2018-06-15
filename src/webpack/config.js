import merge from 'webpack-merge'
import { defaults, local } from '../webpack'
import { importIfExists, resolveCwd } from '../utils'

let config = merge(defaults, local)

const tronic = importIfExists(resolveCwd('tronic.config.js'))

if (tronic) {
  tronic.plugins = tronic.plugins || []
  tronic.plugins.forEach((plugin) => {
    const name = `tronic-plugin-${plugin}`
    const module = importIfExists(name)
    if (!module) {
      throw new Error(`Plugin "${name}" could not be found`)
    }
    if (typeof module !== 'function') {
      throw new Error(`Plugin "${name}" is not a function`)
    }
    config = module(config)
  })
}

export default config
