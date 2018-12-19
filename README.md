# egg-view-memoryfs

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-memoryfs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-memoryfs
[travis-image]: https://img.shields.io/travis/eggjs/egg-view-memoryfs.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-view-memoryfs
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-view-memoryfs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-view-memoryfs?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-view-memoryfs.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-view-memoryfs
[snyk-image]: https://snyk.io/test/npm/egg-view-memoryfs/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-memoryfs
[download-image]: https://img.shields.io/npm/dm/egg-view-memoryfs.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-memoryfs

<!--
Description here.
-->

## Install

```bash
$ npm i egg-view-memoryfs --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.viewmemoryfs = {
  enable: true,
  package: 'egg-view-memoryfs'
}
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.viewmemoryfs = {}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
