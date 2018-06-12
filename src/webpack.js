import ora from 'ora'
import webpack from 'webpack'
import config from './config'
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

async function getCompiler() {
  const json = await config
  console.log(json)
  return webpack(json)
}

export async function build() {
  spinner = ora('Bundling').start()
  const compiler = await getCompiler()
  compiler.run(callback)
}

export async function watch() {
  spinner = ora('Bundling').start()
  const compiler = await getCompiler()
  compiler.watch({}, callback)
}
