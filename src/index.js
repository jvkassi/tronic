import dotenv from 'dotenv'
import yargs from 'yargs'
import { build, start } from './bin'

// Set environment variables
dotenv.config()

yargs
  .command('$0', 'Start bundle', start)
  .command('build', 'Run bundle', build)
  .parse()

