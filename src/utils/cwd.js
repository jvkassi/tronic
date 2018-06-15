import { join, resolve } from 'path'

const cwd = process.cwd()

export const resolveCwd = f => resolve(cwd, f)
export const joinCwd = f => join(cwd, f)
