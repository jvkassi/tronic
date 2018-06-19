import ora from 'ora'
import webpack from 'webpack'
import yargs from 'yargs'
import { config } from '../webpack'

// Set flags
yargs.option('watch', { alias: 'w', default: false })

/**
 * Display compilation output
 * @param {Object} spinner
 * @param {string} err
 * @param {Object} stats
 */
let callback = (spinner, err, stats) => {
  if (err) {
    spinner.fail('Failed to bundle')
    console.log(err)
    return
  }

  if (stats.hasErrors()) {
    spinner.fail('Failed to bundle')
  } else {
    spinner.succeed('Bundled')
  }

  const info = stats.toString(config.stats)
  if (info) {
    console.log(info)
  }
}

/**
 * Build bundle to disk
 */
export default function build() {
  const spinner = ora('Bundling').start()
  callback = callback.bind(null, spinner)
  const compiler = webpack(config)
  // Run watcher
  if (yargs.argv.watch) {
    return compiler.watch({}, callback)
  }
  // Run one-off build
  return compiler.run(callback)
}
