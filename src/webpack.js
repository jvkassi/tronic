import ora from 'ora'
import webpack from 'webpack'
import buildConfig from './config/build-config'
import { error } from './utils/console'

let spinner

function callback(err, stats) {
  if (err) {
    error(err.stack || err)
    if (err.details) {
      console.log(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    spinner.fail('Failed to bundle')
    console.log()
    info.errors.forEach(error)
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

export default function run(command, argv) {
  spinner = ora('Bundling').start()
  const compiler = webpack(buildConfig(argv))
  switch (command) {
    case 'watch':
      return compiler.watch({}, callback)
    case 'build':
      return compiler.run(callback)
    default:
      throw new Error('Invalid command')
  }
}
