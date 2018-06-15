import merge from 'webpack-merge'
import { defaults } from '../webpack'
import { importIfExists, resolveCwd } from '../utils'

// Get config
const tronic = importIfExists(resolveCwd('tronic.config.js')) || {}
tronic.plugins = tronic.plugins || {}
tronic.webpack = tronic.webpack || {}

// Deep merge config with defaults
let config = merge(defaults, tronic.webpack)

// Load and initialise plugins
tronic.plugins.forEach((plugin) => {
  const name = `tronic-plugin-${plugin.name}`
  const module = importIfExists(name)
  const options = plugin.options || {}
  config = module(config, options)
})

export default config
