const path = require('path')
const nunjucks = require('nunjucks')

class View {
  constructor(ctx) {
    this.ctx = ctx
    this.app = ctx.app
    this.config = this.app.config.memoryfs
  }

  async render(name, locals, options) {
    const filePath = path.isAbsolute(name)
      ? name
      : path.join(this.app.config.view.root[0], name)

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
    return new Promise((resolve, reject) => {
      nunjucks.renderString(tpl, locals, (err, result) => {
        if (err) return reject(err)

        resolve(result)
      })
    })
  }
}

module.exports = View
