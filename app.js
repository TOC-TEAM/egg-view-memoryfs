'use strict'

module.exports = app => {
  app.view.use('memoryfs', require('./lib/view'))

  if (app.view) {
    app.view.resolve = function(name) {
      return Promise.resolve(name)
    }
  }
}
