import dotenv from 'dotenv'
import yargs from 'yargs'
import { build, watch } from './webpack'

dotenv.config()

yargs
  .command('$0', 'Start bundling', () => { (watch)().then() })
  .command('start', 'Start bundling', () => { (watch)().then() })
  .command('build', 'Run bundle', () => { (build)().then() })
  .parse()

