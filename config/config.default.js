'use strict'
const path = require('path')
/**
 * egg-view-memoryfs default config
 * @member Config#memoryfs
 * @property {String} SOME_KEY - some description
 */
exports.memoryfs = {
  buildPath: path.join(process.cwd(), 'app/view'),
  defaultExtension: '.html'
}
