import { join, resolve } from 'path'

const cwd = process.cwd()

/**
 * Resolve module location from current working directory
 * @param {string} module
 * @returns {string}
 */
export const resolveCwd = module => resolve(cwd, module)

/**
 * Join path for module based on current working directory
 * @param {string} module
 * @returns {string}
 */
export const joinCwd = module => join(cwd, module)
