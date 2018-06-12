import nodeExternals from 'webpack-node-externals'
import { get } from 'lodash'

export default function externals(config) {
  const entity = get(config, 'webpack.externals', [])
  if (get(config, 'webpack.target') === 'node') {
    entity.push(nodeExternals())
  }
  return entity
}
