var test = require('tape')
var assert = require('../index')

var testValues = {
  boolean: [
    true,
    false,
    new Boolean()
  ],
  string: [
    '',
    new String('')
  ],
  object: [
    {},
    new Object()
  ],
  array: [
    [],
    new Array()
  ],
  'function': [
    function () {},
    new Function(),
    () => {},
    async () => {}
  ],
  regexp: [
    /./g,
    new RegExp('')
  ],
  promise: [
    new Promise(function () {})
  ],
  date: [
    new Date()
  ],
  error: [
    new Error()
  ],
  buffer: [
    Buffer.from([]), Buffer.from('')
  ],
  number: [
    1,
    1.1
  ],
  integer: [
    1
  ]
}

var methods = Object.keys(assert)

test('assert methods', function (t) {
  Object.keys(testValues).forEach((key) => {
    var values = testValues[key]

    var methodName = methods.find((m) => {
      return m.replace(/^is/, "").toLowerCase() === key
    })

    var method = assert[methodName]

    var failingMethods = methods.filter((m) => {
      return m !== methodName
    })

    // test values expeced to pass
    values.forEach((value) => {
      try {
        method(value)
      } catch (err) {
        console.log(err)
        t.notOk(true, `error with ${value}: ${err.message}`)
      }

      // test values expected to fail
      failingMethods.forEach((m) => {
        try {
          assert[m](value)
        } catch (err) {
          t.ok(err, `${key} errored when passed to ${m} as expected`)
        }
      })
    })

    t.ok(true, `${key} assertion passed`)
  })

  t.end()
})
