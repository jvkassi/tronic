import webpack from 'webpack'
import yargs from 'yargs'
import { config } from '../webpack'

// Set flags
yargs.option('watch', { alias: 'w', default: false })

/**
 * Display compilation output
 * @param {string} err
 * @param {Object} stats
 */
function callback(err, stats) {
  if (err) {
    console.log(err)
    return
  }

  console.log(stats.toString(config.stats))
}

/**
 * Build bundle to disk
 */
export default function build() {
  const compiler = webpack(config)
  // Run watcher
  if (yargs.argv.watch) {
    return compiler.watch({}, callback)
  }
  // Run one-off build
  return compiler.run(callback)
}
