import dotenv from 'dotenv'
import yargs from 'yargs'

import bundler from './bundler'
import lint from './lint'

dotenv.config()

yargs
  .command('$0', 'Start bundle', () => bundler('watch'))
  .command('start', 'Start bundle', () => bundler('watch'))
  .command('build', 'Run bundle', () => bundler('build'))
  .command('lint', 'Lint', lint)
  .parse()

