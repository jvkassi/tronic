import { resolve } from 'path'

const cwd = process.cwd()

export default f => resolve(cwd, f)
