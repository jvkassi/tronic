const dotenv = require('dotenv')
const yargs = require('yargs')
const { build, watch } = require('./webpack')

dotenv.config()

yargs
  .command('$0', 'Start bundling', () => { (watch)().then() })
  .command('start', 'Start bundling', () => { (watch)().then() })
  .command('build', 'Run bundle', () => { (build)().then() })
  .parse()

