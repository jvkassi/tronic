import { get } from 'lodash'

export default (config) => {
  const loaders = []
  if (get(config, 'features.babel')) {
    loaders.push('babel-loader')
  }
  if (get(config, 'features.eslint')) {
    loaders.push('eslint-loader')
  }
  return loaders
}
