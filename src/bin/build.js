import webpack from 'webpack'
import config from '../webpack/config'
import output from '../utils/output'

export default function build() {
  const compiler = webpack(config)
  compiler.run(output)
}
