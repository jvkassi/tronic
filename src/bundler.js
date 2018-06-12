import chalk from 'chalk'
import ora from 'ora'
import webpack from 'webpack'

import config from './config'

function callback(spinner, err, stats) {
  if (err) {
    console.log(chalk.bold.red(err.stack || err))
    if (err.details) {
      console.log(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    spinner.fail('Failed to bundle')
    console.log()
    info.errors.forEach(error => console.log(chalk.bold.red(error)))
    console.log()
    return
  }

  if (stats.hasWarnings()) {
    spinner.fail('Failed to bundle')
    console.log()
    info.warnings.forEach(warning => console.log(warning))
    console.log()
  }

  spinner.succeed('Bundled')
}

export default function bundler(command) {
  const spinner = ora('Bundling').start()
  const compiler = webpack(config)

  switch (command) {
    case 'watch':
      compiler.watch({}, callback.bind(null, spinner))
      break
    case 'build':
      compiler.run(callback.bind(null, spinner))
      break
    default:
      throw new Error('Invalid command')
  }
}
