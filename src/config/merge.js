import merge from 'webpack-merge'
import { defaults, local, use } from '../config'

const config = merge(
  defaults,
  local,
  use,
)

export default config
