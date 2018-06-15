import { importIfExists, resolveCwd } from '../utils'

const webpackConfig = importIfExists(resolveCwd('webpack.config.js'))
const webpackConfigBabel = importIfExists(resolveCwd('webpack.config.babel.js'))

export default webpackConfig || webpackConfigBabel || {}
