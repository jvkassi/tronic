import ora from 'ora'
import { CLIEngine } from 'eslint'
import { resolveFromCwd } from './utils'

export default function lint() {
  const spinner = ora('Linting').start()
  const cli = new CLIEngine({ useEslintrc: true })
  const report = cli.executeOnFiles([resolveFromCwd('')])
  const formatter = cli.getFormatter()
  const results = formatter(report.results)
  if (!results) {
    spinner.succeed('Linting successful')
    return
  }
  spinner.fail('Linting failed')
  console.log(results)
}
