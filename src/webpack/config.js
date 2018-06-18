import merge from 'webpack-merge'
import requireIfExists from 'require-if-exists'
import { sync } from 'find-up'
import { defaults } from '../webpack'

// Get config
const tronic = requireIfExists(sync('tronic.config.js')) || {}
let config = defaults

// Load and initialise plugins in order
tronic.plugins = tronic.plugins || []
tronic.plugins.forEach((plugin) => {
  const isObject = typeof plugin === 'object'
  const identifier = isObject ? plugin.name : plugin
  if (!identifier) {
    console.log('Plugin identifier missing')
    return
  }
  const name = `tronic-plugin-${identifier}`
  const module = requireIfExists(sync(`node_modules/${name}`))
  if (!module) {
    console.log(`Plugin "${name}" is not installed`)
    return
  }
  config = module(config, isObject ? plugin.options : undefined)
})

// Deep merge config with defaults and plugins
tronic.webpack = tronic.webpack || {}
config = typeof tronic.webpack === 'function'
  ? tronic.webpack(config)
  : merge(config, tronic.webpack)

export default config
