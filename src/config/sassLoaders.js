import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { get } from 'lodash'

export default (config) => {
  const loaders = []
  if (get(config, 'features.sass')) {
    loaders.push('style-loader')
    loaders.push('css-loader')
    loaders.push('sass-loader')

    if (get(config, 'features.extract')) {
      return ExtractTextPlugin.extract({
        fallback: loaders.splice(0, 1)[0],
        use: loaders,
      })
    }
  }
  return loaders
}
