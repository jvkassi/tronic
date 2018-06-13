import npmi from 'npmi'
import { resolve } from 'path'

export default function installModule(module) {
  const options = { name: module, version: 'latest', path: '.' }
  npmi(options, (err) => {
    if (err) {
      if (err.code === npmi.LOAD_ERR) {
        console.log('npm load error')
      } else if (err.code === npmi.INSTALL_ERR) {
        console.log('npm install error')
      }
      return console.log(err.message)
    }
    return console.log(`${options.name}@${options.version} installed successfully in ${resolve(options.path)}`)
  })
}
