import _isError from 'is-error'
import _isBuffer from 'is-buffer'
import _isPromise from 'is-promise'
import _isDate from 'is-date-object'
import _isString from 'is-string'

const toString = Object.prototype.toString
const defaultErrorName = 'ArgumentError'

/**
* Assert that a value is true
*
* @param {boolean} bool - value that is expected to be a `true` boolean or at least "truthy" value
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not true
* @returns {undefined}
* @example
* import { assertArgument } from 'assert-argument'
*
* function doSomethingWithAString (str) {
*   assertArgument(typeof str === 'string', 'str param must be a string')
* }
**/
function assertArgument (bool, message) {
  if (!bool) {
    var error = new Error(message)
    error.name = defaultErrorName
    throw error || 'expected truthy value'
  }
}

/**
* Assert that a value is a boolean
*
* @param {boolean} bool - value that is expected to be a boolean
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a boolean
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithABoolean (bool) {
*   assert.isBoolean(bool, 'bool param must be a string')
* }
**/
export function isBoolean (bool, message) {
  assertArgument(
    bool === true || bool === false || toString.call(bool) === '[object Boolean]',
    message || 'expected boolean'
  )
}

/**
* Assert that a value is a string
*
* @param {string} str - value that is expected to be a string
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a string
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithAString (str) {
*   assert.isString(str, 'str param must be a string')
* }
**/
export function isString (str, message) {
  assertArgument(
    _isString(str),
    message || 'expected string'
  )
}

/**
* Assert that a value is a number
*
* @param {number} num - value that is expected to be a number
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a number
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithANumber (num) {
*   assert.isNumber(num, 'num param must be a number')
* }
**/
export function isNumber (num, message) {
  assertArgument(
    toString.call(num) === '[object Number]',
    message || 'expected number'
  )
}

/**
* Assert that a value is an integer
*
* @param {number} int - value that is expected to be an integer
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not an integer
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithANumber (num) {
*   assert.isNumber(num, 'num param must be a number')
* }
**/
export function isInteger (num, message) {
  assertArgument(
    Number.isInteger(num),
    message || 'expected number'
  )
}

/**
* Assert that a value is an object
*
* @param {object} obj - value that is expected to be a object
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not an object
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithAString (obj) {
*   assert.isObject(obj, 'obj param must be an object')
* }
**/
export function isObject (obj, message) {
  assertArgument(
    typeof obj === 'object' && Array.isArray(obj) === false,
    message || 'expected object'
  )
}

/**
* Assert that a value is an array
*
* @param {array} arr - value that is expected to be an array
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not an array
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithnArray (arr) {
*   assert.isArray(arr, 'arr param must be an array')
* }
**/
export function isArray (arr, message) {
  assertArgument(
    Array.isArray(arr) ||
      (arr != null && arr.length && typeof arr !== 'function'),
    message || 'expected array'
  )
}

/**
* Assert that a value is a function
*
* @param {function} fn - value that is expected to be a function
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a function
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithAFunction (fn) {
*   assert.isFunction(fn, 'fn param must be a function')
* }
**/
export function isFunction (fn, message) {
  assertArgument(
    typeof fn === 'function',
    message || 'expected function'
  )
}

/**
* Assert that a value is a RegExp
*
* @param {RegExp} re - value that is expected to be a RegExp
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a RegExp
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithARegExp (re) {
*   assert.isRegExp(re, 're param must be a regexp')
* }
**/
export function isRegExp (re, message) {
  assertArgument(
    toString.call(re) === '[object RegExp]',
    message || 'expected regexp'
  )
}

/**
* Assert that a value is a promise
*
* @param {promise} p - value that is expected to be a promise
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a promise
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithAPromise (p) {
*   assert.isPromise(p, 'p param must be a ')
* }
**/
export function isPromise (p, message) {
  assertArgument(
    _isPromise(p),
    message || 'expected promise'
  )
}

/**
* Assert that a value is a Date object
*
* @param {Date} date - value that is expected to be a Date object
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a Date object
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithADate (date) {
*   assert.isDate(date, 'date param must be a Date object')
* }
**/
export function isDate (date, message) {
  assertArgument(
    _isDate(date),
    message || 'expected date'
  )
}

/**
* Assert that a value is an Error
*
* @param {Error} errObj - value that is expected to be an Error
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not an Error
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithAnError (errObj) {
*   assert.isError(errObj, 'errObj param must be an Error')
* }
**/
export function isError (errObj, message) {
  assertArgument(
    _isError(errObj),
    message || 'expected error'
  )
}

/**
* Assert that a value is a Buffer
*
* @param {Buffer} buf - value that is expected to be a Buffer
* @param {string} [message] - optional message describing the assertion
* @throws {ArgumentError} - throws an `ArgumentError` if the value is not a Buffer
* @returns {undefined}
* @example
* import * as assert from 'assert-argument'
*
* function doSomethingWithABuffer (buf) {
*   assert.isBuffer(buf, 'buf param must be a Buffer')
* }
**/
export function isBuffer (buf, message) {
  assertArgument(
    _isBuffer(buf),
    message || 'expected buffer'
  )
}
