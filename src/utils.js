/* global __non_webpack_require__ */
import { resolve } from 'path'

const cwd = process.cwd()

export const resolveFromCwd = f => resolve(cwd, f)
export const resolveModulePath = module => __non_webpack_require__.resolve(module)
