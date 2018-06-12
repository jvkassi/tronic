import { get } from 'lodash'

export default function jsLoaders(config) {
  const entity = []
  if (get(config, 'features.babel')) {
    entity.push('babel-loader')
  }
  if (get(config, 'features.eslint')) {
    entity.push('eslint-loader')
  }
  return entity
}
