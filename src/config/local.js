import { importIfExists, resolveFromCwd } from '../utils'

const local = importIfExists(resolveFromCwd('webpack.config.js')) || importIfExists(resolveFromCwd('webpack.config.babel.js')) || {}

export default local
