import chalk from 'chalk'
import ora from 'ora'

export default function output(err, stats) {
  const spinner = ora('Bundling').start()

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
