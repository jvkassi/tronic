const { resolve } = require('path')

const cwd = process.cwd()

module.exports = f => resolve(cwd, f)
