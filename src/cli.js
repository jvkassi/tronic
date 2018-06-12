import dotenv from 'dotenv'
import yargs from 'yargs'

import bundler from './bundler'

dotenv.config()

yargs
  .command(['$0', 'start'], 'Start bundle', () => bundler('watch'))
  .command('build', 'Run bundle', () => bundler('build'))
  .parse()

