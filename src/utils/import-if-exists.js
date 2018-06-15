/**
 * Synchronously import module without throwing error if it's not found
 * @param {string} path
 * @returns {*}
 */
export default function importIfExists(path) {
  let module
  try { module = require(`${path}`) } catch (e) {}
  return module
}
