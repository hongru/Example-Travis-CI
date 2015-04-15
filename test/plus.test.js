var assert = require('assert');
var speak = require('../src/speak');

describe('Test `plus` func', function () {
    it('normal (2 numbers)', function () {
        assert.equal(speak.plus(4, 5), 9)
    });

    it('many numbers plus', function () {
        assert.equal(speak.plus(2,4,5,8,9), 28);
    });

    it('numbers & strings mixed (string first)', function () {
        assert.equal(speak.plus('a', 5, 6, 'b', 3), 'a56b3');
    })

    it('numbers & strings mixed (number first)', function () {
        assert.equal(speak.plus(2, 'a', 3, 4, 'b', 5), '2a34b5')
    })
})