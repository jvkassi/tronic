import merge from 'webpack-merge'
import nodeModulesPath from 'node-modules-path'
import requireIfExists from 'require-if-exists'
import { resolve } from 'path'
import { defaults } from '../webpack'

// Get config
const tronic = requireIfExists(resolve(process.cwd(), 'tronic.config.js')) || {}
tronic.plugins = tronic.plugins || {}
tronic.webpack = tronic.webpack || {}

// Deep merge config with defaults
let config = merge(defaults, tronic.webpack)

// Load and initialise plugins in order
tronic.plugins.forEach((plugin) => {
  const name = `tronic-plugin-${plugin.name}`
  const module = requireIfExists(resolve(nodeModulesPath(process.cwd()), name))
  if (!module) {
    console.log(`Plugin "${name}" not installed`)
    return
  }
  config = module(config, plugin.options)
})

export default config
