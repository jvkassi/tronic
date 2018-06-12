const ora = require('ora')
const { CLIEngine } = require('eslint')
const { resolve } = require('path')

function lint() {
  const spinner = ora('Linting').start()
  const cli = new CLIEngine({ useEslintrc: true })
  const report = cli.executeOnFiles([resolve(process.cwd())])
  const formatter = cli.getFormatter()
  const results = formatter(report.results)
  if (!results) {
    spinner.succeed('Linting succeeded')
    return
  }
  spinner.fail('Linting failed')
  console.log(results)
}

module.exports = lint
