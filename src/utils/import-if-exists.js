/* eslint-disable no-empty */
export default function importIfExists(path) {
  let module
  try { module = require(`${path}`) } catch (e) {}
  return module
}
