#!/usr/bin/env node
require('dotenv').config()
const ora = require('ora')
const webpack = require('webpack')
const yargs = require('yargs')
const config = require('./config')

const compiler = webpack(config)

let spinner

const callback = (err, stats) => {
  if (err || stats.hasErrors()) {
    spinner.fail('Failed to bundle')
    console.log()
    console.log(stats.toString({ colors: true }))
    console.log()
    return
  }
  spinner.succeed('Bundled')
}

yargs
  .command('build', 'Run bundle', () => {
    spinner = ora('Bundling').start()
    compiler.run(callback)
  })
  .command('$0', 'Start bundling', () => {
    spinner = ora('Bundling').start()
    compiler.watch({}, callback)
  })
  .command('start', 'Start bundling', () => {
    spinner = ora('Bundling').start()
    compiler.watch({}, callback)
  })
  .parse()
