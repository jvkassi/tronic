/* eslint-disable no-empty */
/* global __non_webpack_require__ */
import npmi from 'npmi'
import { resolve } from 'path'

const cwd = process.cwd()

export function importIfExists(path) {
  let module
  try { module = require(`${path}`) } catch (e) {}
  return module
}

export const resolveFromCwd = f => resolve(cwd, f)

export const resolveModulePath = module => __non_webpack_require__.resolve(module)

export function installModule() {
  const options = { name: 'execa', version: 'latest', path: '.' }
  npmi(options, (err) => {
    if (err) {
      if (err.code === npmi.LOAD_ERR) console.log('npm load error')
      else if (err.code === npmi.INSTALL_ERR) console.log('npm install error')
      return console.log(err.message)
    }
    // installed
    return console.log(`${options.name}@${options.version} installed successfully in ${resolve(options.path)}`)
  })
}
