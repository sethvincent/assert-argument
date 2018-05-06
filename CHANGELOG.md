# assert-argument change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

* ???

## [v1.0.0] - 2018-05-05

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

[v1.0.0]: https://github.com/sethvincent/assert-argument/compare/master...v1.0.0
