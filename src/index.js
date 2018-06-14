import dotenv from 'dotenv'
import yargs from 'yargs'
import { build, start } from './bin'

dotenv.config()

yargs
  .command(['$0', 'start'], 'Start bundle', start)
  .command('build', 'Run bundle', build)
  .parse()

