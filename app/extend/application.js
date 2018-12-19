const MEMORY_FS = Symbol('Application#memoryfs')
const engine = require('../../lib/engine')

module.exports = {
  get memoryfs() {
    if (!this[MEMORY_FS]) {
      this[MEMORY_FS] = engine(this)
    }
    return this[MEMORY_FS]
  }
}
