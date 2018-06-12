const ora = require('ora')
const webpack = require('webpack')
const config = require('./config')
const { error, warning } = require('../utils/console')

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
    info.warnings.forEach(warning)
    console.log()
  }

  spinner.succeed('Bundled')
}

async function getCompiler() {
  const json = await config
  return webpack(json)
}

const build = async () => {
  spinner = ora('Bundling').start()
  const compiler = await getCompiler()
  compiler.run(callback)
}

const watch = async () => {
  spinner = ora('Bundling').start()
  const compiler = await getCompiler()
  compiler.watch({}, callback)
}

module.exports = { build, watch }
