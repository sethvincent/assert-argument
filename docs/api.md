<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [assertArgument][1]
-   [isBoolean][2]
-   [isString][3]
-   [isNumber][4]
-   [isObject][5]
-   [isArray][6]
-   [isFunction][7]
-   [isRegExp][8]
-   [isPromise][9]
-   [isDate][10]
-   [isError][11]
-   [isBuffer][12]

## assertArgument

Assert that a value is true

**Parameters**

-   `bool` **[boolean][13]** value that is expected to be a `true` boolean or at least "truthy" value
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAString (str) {
  assert(typeof str === 'string', 'str param must be a string')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not true

Returns **[undefined][15]** 

## isBoolean

Assert that a value is a boolean

**Parameters**

-   `bool` **[boolean][13]** value that is expected to be a boolean
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithABoolean (bool) {
  assert.isBoolean(bool, 'bool param must be a string')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a boolean

Returns **[undefined][15]** 

## isString

Assert that a value is a string

**Parameters**

-   `str` **[string][14]** value that is expected to be a string
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAString (str) {
  assert.isString(str, 'str param must be a string')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a string

Returns **[undefined][15]** 

## isNumber

Assert that a value is a number

**Parameters**

-   `num` **[number][16]** value that is expected to be a number
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithANumber (num) {
  assert.isNumber(num, 'num param must be a number')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a number

Returns **[undefined][15]** 

## isObject

Assert that a value is an object

**Parameters**

-   `obj` **[object][17]** value that is expected to be a object
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAString (obj) {
  assert.isObject(obj, 'obj param must be an object')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not an object

Returns **[undefined][15]** 

## isArray

Assert that a value is an array

**Parameters**

-   `arr` **[array][18]** value that is expected to be an array
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithnArray (arr) {
  assert.isArray(arr, 'arr param must be an array')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not an array

Returns **[undefined][15]** 

## isFunction

Assert that a value is a function

**Parameters**

-   `fn` **[function][19]** value that is expected to be a function
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAFunction (fn) {
  assert.isFunction(fn, 'fn param must be a function')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a function

Returns **[undefined][15]** 

## isRegExp

Assert that a value is a RegExp

**Parameters**

-   `re` **[RegExp][20]** value that is expected to be a RegExp
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithARegExp (re) {
  assert.isRegExp(re, 're param must be a regexp')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a RegExp

Returns **[undefined][15]** 

## isPromise

Assert that a value is a promise

**Parameters**

-   `p` **[promise][21]** value that is expected to be a promise
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAPromise (p) {
  assert.isPromise(p, 'p param must be a ')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a promise

Returns **[undefined][15]** 

## isDate

Assert that a value is a Date object

**Parameters**

-   `date` **[Date][22]** value that is expected to be a Date object
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithADate (date) {
  assert.isDate(date, 'date param must be a Date object')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a Date object

Returns **[undefined][15]** 

## isError

Assert that a value is an Error

**Parameters**

-   `errObj` **[Error][23]** value that is expected to be an Error
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithAnError (errObj) {
  assert.isError(errObj, 'errObj param must be an Error')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not an Error

Returns **[undefined][15]** 

## isBuffer

Assert that a value is a Buffer

**Parameters**

-   `buf` **[Buffer][24]** value that is expected to be a Buffer
-   `message` **[string][14]?** optional message describing the assertion

**Examples**

```javascript
var assert = require('assert-argument')

function doSomethingWithABuffer (buf) {
  assert.isBuffer(buf, 'buf param must be a Buffer')
}
*
```

-   Throws **ArgumentError** throws an `ArgumentError` if the value is not a Buffer

Returns **[undefined][15]** 

[1]: #assertargument

[2]: #isboolean

[3]: #isstring

[4]: #isnumber

[5]: #isobject

[6]: #isarray

[7]: #isfunction

[8]: #isregexp

[9]: #ispromise

[10]: #isdate

[11]: #iserror

[12]: #isbuffer

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[22]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[24]: https://nodejs.org/api/buffer.html
