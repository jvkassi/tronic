import { importIfExists, resolveFromCwd } from '../utils'

const localConfig = importIfExists(resolveFromCwd('webpack.config.js')) || importIfExists(resolveFromCwd('webpack.config.babel.js')) || {}

export default localConfig
