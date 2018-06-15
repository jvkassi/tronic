import ora from 'ora'
import webpack from 'webpack'
import yargs from 'yargs'
import { config, output } from '../webpack'

// Set watch flag
yargs.option('watch', {
  alias: 'w',
  default: false,
})

/**
 * Build bundle to disk
 */
export default function build() {
  const spinner = ora('Bundling').start()
  const compiler = webpack(config)
  // Run watcher
  if (yargs.argv.watch) {
    return compiler.watch({}, output.bind(null, spinner))
  }
  // Run one-off build
  return compiler.run(output.bind(null, spinner))
}
