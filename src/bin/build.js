import webpack from 'webpack'
import { config, output } from '../webpack'

export default function build() {
  const compiler = webpack(config)
  compiler.run(output)
}
