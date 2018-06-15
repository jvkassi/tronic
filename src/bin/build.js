import ora from 'ora'
import webpack from 'webpack'
import yargs from 'yargs'
import { config, output } from '../webpack'

yargs.option('watch', {
  alias: 'w',
  default: false,
})

export default function build() {
  const spinner = ora('Bundling').start()
  const compiler = webpack(config)
  if (yargs.argv.watch) {
    return compiler.watch({}, output.bind(null, spinner))
  }
  return compiler.run(output.bind(null, spinner))
}
