import webpack from 'webpack'
import { config, output } from '../webpack'

export default function start() {
  const compiler = webpack(config)
  compiler.watch({}, output)
}
