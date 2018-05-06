# assert-argument change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

* ???

## [v1.0.2] - 2018-05-06

### Changed
- revised example in readme for extending assert-argument in applications
- small docs fixes

## [v1.0.1] - 2018-05-05

### Fixed
- fixed docs mistakes

## [v1.0.0] - 2018-05-05

### Added
- initial release with the following usage:
  ```js
  var assert = require('assert-argument')

  // check that value is truthy
  assert(value, message)

  // type-specific assertions
  assert.isBoolean(value, message)
  assert.isString(value, message)
  assert.isNumber(value, message)
  assert.isObject(value, message)
  assert.isArray(value, message)
  assert.isFunction(value, message)
  assert.isRegExp(value, message)
  assert.isPromise(value, message)
  assert.isDate(value, message)
  assert.isError(value, message)
  assert.isBuffer(value, message)
  ```

[v1.0.2]: https://github.com/sethvincent/assert-argument/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/sethvincent/assert-argument/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/sethvincent/assert-argument/tree/v1.0.0
