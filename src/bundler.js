import webpack from 'webpack'

import config from './config'
import output from './output'

export default function bundler(command) {
  const compiler = webpack(config)

  switch (command) {
    case 'watch':
      compiler.watch({}, output)
      break
    case 'build':
      compiler.run(output)
      break
    default:
      throw new Error('Invalid command')
  }
}
