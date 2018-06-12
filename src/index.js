require('dotenv').config()
const yargs = require('yargs')

const bundler = require('./bundler')

yargs
  .command(['$0', 'start'], 'Start bundle', () => bundler('watch'))
  .command('build', 'Run bundle', () => bundler('build'))
  .parse()

