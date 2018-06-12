import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { get } from 'lodash'

export default function cssLoaders(config) {
  const entity = []
  if (get(config, 'features.css')) {
    entity.push('style-loader')
    entity.push('css-loader')

    if (get(config, 'features.extract')) {
      return ExtractTextPlugin.extract({
        fallback: entity.splice(0, 1)[0],
        use: entity[0],
      })
    }
  }
  return entity
}
