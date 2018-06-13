require('dotenv').config()
const yargs = require('yargs')

const tronic = require('./tronic')
const lint = require('./lint')

yargs
  .command('$0', 'Start bundle', () => tronic('watch'))
  .command('start', 'Start bundle', () => tronic('watch'))
  .command('build', 'Run bundle', () => tronic('build'))
  .command('lint', 'Lint', lint)
  .parse()

