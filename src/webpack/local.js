import { importIfExists, resolveFromCwd } from '../utils'

const webpackConfig = importIfExists(resolveFromCwd('webpack.config.js'))
const webpackConfigBabel = importIfExists(resolveFromCwd('webpack.config.babel.js'))

export default webpackConfig || webpackConfigBabel || {}
