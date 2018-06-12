const chalk = require('chalk')

const error = message => console.log(chalk.bold.red(message))
const success = message => console.log(chalk.keyword('green')(message))
const warning = message => console.log(chalk.green(message))

module.exports = { error, success, warning }
