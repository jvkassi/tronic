import ora from 'ora'
import webpack from 'webpack'
import yargs from 'yargs'
import { config } from '../webpack'

// Set flags
yargs.option('watch', { alias: 'w', default: false })

/**
 * Attach hooks to compiler
 * @param {Compiler} compiler
 */
function hook(compiler) {
  let spinner

  const startSpinner = () => {
    spinner = ora('Bundling').start()
  }

  compiler.hooks.watchRun.tap('tronic', startSpinner)
  compiler.hooks.run.tap('tronic', startSpinner)

  compiler.hooks.done.tap('tronic', (stats) => {
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
  })

  compiler.hooks.failed.tap('tronic', (err) => {
    if (err) {
      console.log(err)
    }
  })

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
