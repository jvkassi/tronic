import dotenv from 'dotenv'
import yargs from 'yargs'
import run from './webpack'

dotenv.config()

const builder = (args) => {
  args.positional('target', { default: 'web' })
}

yargs
  .command(['$0', 'start'], 'Start bundling', builder, argv => run('watch', argv))
  .command('build', 'Run bundle', builder, argv => run('build', argv))
  .parse()

