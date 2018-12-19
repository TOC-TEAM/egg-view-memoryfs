const MEMORY_FS = Symbol('Application#memoryfs')

module.exports = {
  get memoryfs() {
    if (!this[MEMORY_FS]) {
      this[MEMORY_FS] = this.nunjucks
    }
    return this[MEMORY_FS]
  }
}
