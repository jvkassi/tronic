import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { get } from 'lodash'

export default (config) => {
  const plugins = get(config, 'webpack.plugins', [])
  if (get(config, 'features.extract')) {
    plugins.push(new ExtractTextPlugin(get(config, 'webpack.output.filename', 'bundle.js').replace('.js', '.css')))
  }
  return plugins
}
