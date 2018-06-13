import webpack from 'webpack'
import config from './config'
import output from './output'

export default function build() {
  const compiler = webpack(config)
  compiler.run(output)
}
