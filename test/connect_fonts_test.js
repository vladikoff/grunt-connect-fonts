'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.connect_fonts = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  fonts_written: function(test) {
    test.expect(2);

    var actualDE = grunt.file.read('tmp/de.css');
    var expectedDE = grunt.file.read('test/expected/de.css');
    test.equal(actualDE, expectedDE, 'German fonts are created');

    var actualEN = grunt.file.read('tmp/en.css');
    var actualEN = grunt.file.read('test/expected/en.css');
    test.equal(actualDE, expectedDE, 'English fonts are created');

    test.done();
  },
};
