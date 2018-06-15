import serve from 'webpack-serve'
import { config } from '../webpack'

export default function start() {
  return serve({ config })
}
