import chalk from 'chalk'

export const error = message => console.log(chalk.bold.red(message))
export const success = message => console.log(chalk.green(message))
export const warning = message => console.log(chalk.keyword('orange')(message))
