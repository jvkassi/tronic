import ora from 'ora'
import webpack from 'webpack'
import yargs from 'yargs'
import { config } from '../webpack'

// Set flags
yargs.option('watch', { alias: 'w', default: false })

let spinner

/**
 * Start spinner on initial run
 */
function handleRun() {
  spinner = ora('Bundling').start()
}

/**
 * Output compilation progress and errors
 * @param {Object} stats
 */
function handleDone(stats) {
  if (stats.hasErrors()) {
    spinner.fail('Failed to bundle')
  } else {
    spinner.succeed('Bundled')
  }

  const info = stats.toString(config.stats)
  if (info) {
    console.log(info)
    console.log()
  }
}

/**
 * Output failure error
 * @param {string} err
 */
function handleFailed(err) {
  if (err) {
    console.log(err)
  }
}

/**
 * Attach hooks to compiler
 * @param {Compiler} compiler
 */
function hook(compiler) {
  compiler.hooks.watchRun.tap('tronic', handleRun)
  compiler.hooks.run.tap('tronic', handleRun)
  compiler.hooks.done.tap('tronic', handleDone)
  compiler.hooks.failed.tap('tronic', handleFailed)
  return compiler
}

/**
 * Build bundle to disk
 */
export default function build() {
  const compiler = hook(webpack(config))
  // Run watcher
  if (yargs.argv.watch) {
    return compiler.watch({}, () => {})
  }
  // Run one-off build
  return compiler.run()
}
