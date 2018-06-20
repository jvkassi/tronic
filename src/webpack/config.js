import merge from 'webpack-merge'
import pkgDir from 'pkg-dir'
import requireIfExists from 'require-if-exists'
import { defaults } from '../webpack'

const dir = pkgDir.sync()

// Get config
const tronic = requireIfExists(`${dir}/tronic.config.js`) || {}
let config = defaults

// Load and initialise plugins
tronic.plugins = tronic.plugins || []
tronic.plugins.forEach((plugin) => {
  if (typeof plugin === 'string') {
    plugin = { name: plugin }
  }
  const name = `tronic-plugin-${plugin.name}`
  const module = requireIfExists(`${dir}/node_modules/${name}`)
  if (!module) {
    throw new Error(`Plugin "${name}" is not installed`)
  }
  config = module(config, plugin.options)
})

// Deep merge config with defaults and plugins
tronic.webpack = tronic.webpack || {}
config = typeof tronic.webpack === 'function'
  ? tronic.webpack(config)
  : merge(config, tronic.webpack)

export default config
