import webpack from 'webpack'
import config from './webpack/config'
import output from './utils/output'

export default function start() {
  const compiler = webpack(config)
  compiler.watch({}, output)
}
