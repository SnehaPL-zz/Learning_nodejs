var filledReactangle = require('./filled_rectangle.js');
var assert = require('assert');
 
 
describe('Filled Rectangle', function() {
    it('should return nothing when 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(filledReactangle(0, 0), expectedString);
    });
 
    it('should return nothing when 10, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(filledReactangle(0, 0), expectedString);
    });
 
    it('should return reactangle with one star when 1, 1 diamentions are provided', function() {
        const expectedString = "*";
        assert.equal(filledReactangle(1, 1), expectedString);
    })
 
    it('should return reactangle with multiple rows when greater value for rows is provided', function() {
        const expectedString = "******";
        assert.equal(filledReactangle(1, 6), expectedString);
    })
 
    it('should return reactangle with multiple columns when greater value for column is provided', function() {
        const expectedString = ['*', '*', '*'].join("\n");
 
        assert.equal(filledReactangle(3, 1), expectedString);
    })
 
    it('should return reactangle with multiple columns and multiple columns when greater values are provided', function() {
        const expectedString = ['****', '****', '****'].join("\n");
 
        assert.equal(filledReactangle(3, 4), expectedString);
    })
 
 
    it('should return nothing when negative diamnetions are provided', function() {
        const expectedString = "";
 
        assert.equal(filledReactangle(-3, -4), expectedString);
    })
});