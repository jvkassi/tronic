import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { get } from 'lodash'

export default function sassLoaders(config) {
  const entity = []
  if (get(config, 'features.sass')) {
    entity.push('style-loader')
    entity.push('css-loader')
    entity.push('sass-loader')

    if (get(config, 'features.extract')) {
      return ExtractTextPlugin.extract({
        fallback: entity.splice(0, 1)[0],
        use: entity,
      })
    }
  }
  return entity
}
