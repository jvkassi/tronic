const webpack = require('webpack')

const config = require('./config')
const output = require('./output')

function tronic(command) {
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

module.exports = tronic
