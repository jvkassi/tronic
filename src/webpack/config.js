import merge from 'webpack-merge'
import { defaults } from '../webpack'
import { importIfExists, resolveCwd } from '../utils'

const tronic = importIfExists(resolveCwd('tronic.config.js')) || {}
tronic.webpack = tronic.webpack || {}
tronic.plugins = tronic.plugins || {}

let config = merge(defaults, tronic.webpack)

Object.keys(tronic.plugins).forEach((identifier) => {
  const name = `tronic-plugin-${identifier}`
  const options = tronic.plugins[name]
  if (!options) {
    return
  }
  const module = importIfExists(name)
  if (!module) {
    throw new Error(`Plugin "${identifier}" could not be found`)
  }
  config = module(config, options !== true ? options : {})
})

export default config
