import chalk from 'chalk'

export default function output(spinner, err, stats) {
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
