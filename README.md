# assert-argument

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/assert-argument.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/assert-argument
[travis-image]: https://img.shields.io/travis/sethvincent/assert-argument.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/assert-argument
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CODE_OF_CONDUCT.md

## About

A small helper library for making assertions about function arguments.

This project has two main goals:

1. provide methods that are focused on making assertions about argument types
2. be an alternative to node's assert package that doesn't include all the node-specific dependencies like buffer and fs

For this use case I typically don't use the methods on node's assert module, but instead have found it useful to have a few type-related methods so that instead of doing things like: `assert(value && typeof value === 'string')` I can do: `assert.isString(value)`

### Why make/use this?
I'm not a fan of using tools like flow or typescript, but I am a fan of writing defensively against mistakes. So here we are.

There are probably a lot of similar projects. For instance, if you don't care about type assertions and just want a really tiny assert module, check out [nanoassert](https://npmjs.com/nanoassert), it's cool.

This isn't meant to be a comprehensive type checking library, just a small collection of assertions for types that come up most often for me as function params. Obviously this can be different depending on the project, so your needs may be wildly different. See below about [contributing type assertions](#contributing-type-assertions).

## Install

```sh
npm install --save assert-argument
```

## Usage

Any time the type of an argument doesn't match the assertion, an `ArgumentError` will be thrown.

```js
var assert = require('assert-argument')

function aReallyCoolFunction (str, options, callback) {
  assert.isString(str, 'first param is required and must be a string')
  assert.isObject(options, 'second param is required and must be an object')
  assert.isNumber(options.num, 'options.num must be a number')
  assert.isFunction(callback, 'third param must be a function')
  // do some cool stuff
}
```

### Methods

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

Any time the assertion fails an error will be thrown with the format of `ArgumentError: <message>`, where `<message>` is the string you passed in as the second argument to describe the assertion.

## Contributing type assertions
I'm interested in adding more type assertion to this, but only those that have really common use cases to help keep this module small. Before adding new type assertions to this library I'd recommend extending it in your application by creating a file similar to this:

```js
var assert = require('assert-argument')

// function that does the check using the same argument signature as the other methods
assert.isMap = function isMap (map, message) {
  assert(
    Object.prototype.toString.call(map) === '[object Map]',
    message
  )
}

module.exports = assert
```

That's what I'll be doing until I decide something is common enough for me that I want to add it here.

## Documentation
- [API](docs/api.md)
- [Tests](tests/)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first. Also see the [tests readme](tests/) for detailed development instructions, and check out the note above about when we might add more type assertions.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all, particularly for folks that are historically underrepresented in technology. Read this project's [code of conduct](CODE_OF_CONDUCT.md)

## Change log

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## License

[ISC](LICENSE.md)
