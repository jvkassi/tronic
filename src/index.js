import dotenv from 'dotenv'
import yargs from 'yargs'

import tronic from './tronic'
import lint from './lint'

dotenv.config()

yargs
  .command('$0', 'Start bundle', () => tronic('watch'))
  .command('start', 'Start bundle', () => tronic('watch'))
  .command('build', 'Run bundle', () => tronic('build'))
  .command('lint', 'Lint', lint)
  .parse()

