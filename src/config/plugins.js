import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { get } from 'lodash'

export default function plugins(config) {
  const entity = get(config, 'webpack.plugins', [])
  if (get(config, 'features.extract')) {
    entity.push(new ExtractTextPlugin(get(config, 'webpack.output.filename', 'bundle.js').replace('.js', '.css')))
  }
  return entity
}
