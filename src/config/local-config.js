import { importIfExists, resolveFromCwd } from '../utils'

const getLocalConfig = () => {
  const conf1 = importIfExists(resolveFromCwd('webpack.config.js'))
  const conf2 = importIfExists(resolveFromCwd('webpack.config.babel.js'))
  return conf1 || conf2 || {}
}

export default getLocalConfig()
