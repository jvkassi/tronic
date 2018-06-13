import { resolve } from 'path'

const cwd = process.cwd()
const resolveFromCwd = f => resolve(cwd, f)

export default resolveFromCwd
