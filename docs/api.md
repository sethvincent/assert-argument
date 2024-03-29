<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [assertArgument][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [isBoolean][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [isString][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [isNumber][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [isInteger][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [isObject][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [isArray][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [isFunction][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [isRegExp][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [isPromise][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [isDate][31]
    *   [Parameters][32]
    *   [Examples][33]
*   [isError][34]
    *   [Parameters][35]
    *   [Examples][36]
*   [isBuffer][37]
    *   [Parameters][38]
    *   [Examples][39]

## assertArgument

Assert that a value is true

### Parameters

*   `bool` **[boolean][40]** value that is expected to be a `true` boolean or at least "truthy" value
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import { assertArgument } from 'assert-argument'

function doSomethingWithAString (str) {
  assertArgument(typeof str === 'string', 'str param must be a string')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not true

Returns **[undefined][42]** 

## isBoolean

Assert that a value is a boolean

### Parameters

*   `bool` **[boolean][40]** value that is expected to be a boolean
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithABoolean (bool) {
  assert.isBoolean(bool, 'bool param must be a string')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a boolean

Returns **[undefined][42]** 

## isString

Assert that a value is a string

### Parameters

*   `str` **[string][41]** value that is expected to be a string
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithAString (str) {
  assert.isString(str, 'str param must be a string')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a string

Returns **[undefined][42]** 

## isNumber

Assert that a value is a number

### Parameters

*   `num` **[number][43]** value that is expected to be a number
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithANumber (num) {
  assert.isNumber(num, 'num param must be a number')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a number

Returns **[undefined][42]** 

## isInteger

Assert that a value is an integer

### Parameters

*   `num`  
*   `message` **[string][41]?** optional message describing the assertion
*   `int` **[number][43]** value that is expected to be an integer

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithANumber (num) {
  assert.isNumber(num, 'num param must be a number')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not an integer

Returns **[undefined][42]** 

## isObject

Assert that a value is an object

### Parameters

*   `obj` **[object][44]** value that is expected to be a object
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithAString (obj) {
  assert.isObject(obj, 'obj param must be an object')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not an object

Returns **[undefined][42]** 

## isArray

Assert that a value is an array

### Parameters

*   `arr` **[array][45]** value that is expected to be an array
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithnArray (arr) {
  assert.isArray(arr, 'arr param must be an array')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not an array

Returns **[undefined][42]** 

## isFunction

Assert that a value is a function

### Parameters

*   `fn` **[function][46]** value that is expected to be a function
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithAFunction (fn) {
  assert.isFunction(fn, 'fn param must be a function')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a function

Returns **[undefined][42]** 

## isRegExp

Assert that a value is a RegExp

### Parameters

*   `re` **[RegExp][47]** value that is expected to be a RegExp
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithARegExp (re) {
  assert.isRegExp(re, 're param must be a regexp')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a RegExp

Returns **[undefined][42]** 

## isPromise

Assert that a value is a promise

### Parameters

*   `p` **[promise][48]** value that is expected to be a promise
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithAPromise (p) {
  assert.isPromise(p, 'p param must be a ')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a promise

Returns **[undefined][42]** 

## isDate

Assert that a value is a Date object

### Parameters

*   `date` **[Date][49]** value that is expected to be a Date object
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithADate (date) {
  assert.isDate(date, 'date param must be a Date object')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a Date object

Returns **[undefined][42]** 

## isError

Assert that a value is an Error

### Parameters

*   `errObj` **[Error][50]** value that is expected to be an Error
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithAnError (errObj) {
  assert.isError(errObj, 'errObj param must be an Error')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not an Error

Returns **[undefined][42]** 

## isBuffer

Assert that a value is a Buffer

### Parameters

*   `buf` **[Buffer][51]** value that is expected to be a Buffer
*   `message` **[string][41]?** optional message describing the assertion

### Examples

```javascript
import * as assert from 'assert-argument'

function doSomethingWithABuffer (buf) {
  assert.isBuffer(buf, 'buf param must be a Buffer')
}
*
```

*   Throws **ArgumentError** throws an `ArgumentError` if the value is not a Buffer

Returns **[undefined][42]** 

[1]: #assertargument

[2]: #parameters

[3]: #examples

[4]: #isboolean

[5]: #parameters-1

[6]: #examples-1

[7]: #isstring

[8]: #parameters-2

[9]: #examples-2

[10]: #isnumber

[11]: #parameters-3

[12]: #examples-3

[13]: #isinteger

[14]: #parameters-4

[15]: #examples-4

[16]: #isobject

[17]: #parameters-5

[18]: #examples-5

[19]: #isarray

[20]: #parameters-6

[21]: #examples-6

[22]: #isfunction

[23]: #parameters-7

[24]: #examples-7

[25]: #isregexp

[26]: #parameters-8

[27]: #examples-8

[28]: #ispromise

[29]: #parameters-9

[30]: #examples-9

[31]: #isdate

[32]: #parameters-10

[33]: #examples-10

[34]: #iserror

[35]: #parameters-11

[36]: #examples-11

[37]: #isbuffer

[38]: #parameters-12

[39]: #examples-12

[40]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[41]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[42]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[43]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[44]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[45]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[46]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[47]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[51]: https://nodejs.org/api/buffer.html
