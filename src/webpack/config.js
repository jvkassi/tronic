import merge from 'webpack-merge'
import requireIfExists from 'require-if-exists'
import findUp from 'find-up'
import { defaults } from '../webpack'

// Get config
const tronic = requireIfExists(findUp.sync('tronic.config.js')) || {}
tronic.webpack = tronic.webpack || {}
tronic.plugins = tronic.plugins || []

// Deep merge config with defaults
let config = merge(defaults, tronic.webpack)

// Load and initialise plugins in order
tronic.plugins.forEach((plugin) => {
  const isObject = typeof plugin === 'object'
  const name = `tronic-plugin-${isObject ? plugin.name : plugin}`
  const module = requireIfExists(findUp.sync(`node_modules/${name}`))
  if (!module) {
    console.log(`Plugin "${name}" not installed`)
    return
  }
  config = module(config, isObject ? plugin.options : undefined)
})

export default config
