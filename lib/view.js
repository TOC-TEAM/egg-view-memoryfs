const path = require('path')

class View {
  constructor(ctx) {
    this.ctx = ctx
    this.app = ctx.app
    this.config = this.app.config.memoryfs
  }

  async render(name, locals) {
    const extname = path.extname(name)
    let filePath = path.isAbsolute(name)
      ? name
      : path.join(this.config.buildPath, name)

    if (!extname) {
      filePath = filePath + this.config.defaultExtension
    }
    const content = await this.app.webpack.fileSystem.readWebpackMemoryFile(
      filePath,
      name
    )
    if (!content) {
      throw new Error(
        `read webpack memory file[${filePath}] content is empty, please check if the file exists`
      )
    }
    return await this.renderString(content, locals)
  }

  renderString(tpl, locals) {
    return this.app.nunjucks.renderString(tpl, locals)
  }
}

module.exports = View
