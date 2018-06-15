import findPlugins from 'find-plugins'
import merge from 'webpack-merge'
import { defaults } from '../webpack'
import { importIfExists, resolveCwd } from '../utils'

const tronic = importIfExists(resolveCwd('tronic.config.js')) || {}
tronic.webpack = tronic.webpack || {}
tronic.plugins = tronic.plugins || {}

let config = merge(defaults, tronic.webpack)

const plugins = findPlugins({
  includeDev: true,
  filter: plugin => /^tronic-plugin-/.test(plugin.pkg.name),
})

plugins.forEach((plugin) => {
  const identifier = plugin.pkg.name.split('tronic-plugin-')[1]
  const module = importIfExists(plugin.pkg.name)
  if (Object.hasOwnProperty.call(tronic.plugins, identifier)) {
    const options = tronic.plugins[identifier]
    config = module(config, options)
    return true
  }
  config = module(config)
})

export default config
