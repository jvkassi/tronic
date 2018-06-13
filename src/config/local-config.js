/* eslint-disable no-empty, import/no-mutable-exports */
import { resolveFromCwd } from '../utils'

async function getLocalConfig() {
  const config = await import(`${resolveFromCwd('webpack.config.js')}`)
  const babelConfig = await import(`${resolveFromCwd('webpack.config.babel.js')}`)

  return config || babelConfig || {}
}

export default getLocalConfig()
