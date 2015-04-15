var assert = require('assert');
var speak = require('../src/speak');

describe('Test `typeof` func', function () {
    it('`3` should be `number`', function () {
        assert.equal(speak.typeof(3), 'number');
    });

    it('`abc` should be `string`', function () {
        assert.equal(speak.typeof('abc'), 'string');
    });

    it('`true` should be `boolean`', function () {
        assert.equal(speak.typeof(true), 'boolean');
    });

    it('`[]` should be `array`', function () {
        assert.equal(speak.typeof([]), 'array');
    });

    it('`{}` should be `object`', function () {
        assert.equal(speak.typeof({}), 'object');
    });

    it('`null` should be `null`', function () {
        assert.equal(speak.typeof(null), 'null');
    });

    it('`undefined` should be `undefined`', function () {
        assert.equal(speak.typeof(undefined), 'undefined');
    });

    it('`function () {}` should be `function`', function () {
        assert.equal(speak.typeof(function () {}), 'function');
    });

    it('`new Date` should be `date`', function () {
        assert.equal(speak.typeof(new Date), 'date');
    });

    it('`Math` should be `math`', function () {
        assert.equal(speak.typeof(Math), 'math');
    });

    it('`/ /` should be `regexp`', function () {
        assert.equal(speak.typeof(/ /), 'regexp');
    });

    it('`NaN` should be `number`', function () {
        assert.equal(speak.typeof(NaN), 'number');
    })
});