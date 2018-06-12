require('dotenv').config()
const yargs = require('yargs')

const bundler = require('./bundler')
const lint = require('./lint')

yargs
  .command('$0', 'Start bundle', () => bundler('watch'))
  .command('start', 'Start bundle', () => bundler('watch'))
  .command('build', 'Run bundle', () => bundler('build'))
  .command('lint', 'Lint', lint)
  .parse()

