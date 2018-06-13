import dotenv from 'dotenv'
import yargs from 'yargs'
import build from './build'
import lint from './lint'
import start from './start'

dotenv.config()

yargs
  .command(['$0', 'start'], 'Start bundle', start)
  .command('build', 'Run bundle', build)
  .command('lint', 'Lint', lint)
  .parse()

