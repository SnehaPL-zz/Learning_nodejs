var alternatePattern= require('./alternate_pattern.js');
var assert = require('assert');
 
 
describe('Alternate Pattern', function() {
    it('should return nothing when 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(alternatePattern(0, 0), expectedString);
    });
 
    it('should return row with one star when 1, 1 diamentions are provided', function() {
        const expectedString = "*";
        assert.equal(alternatePattern(1, 1), expectedString);
    })
 
    it('should return rows with multiple rows when greater value for rows is provided', function() {
        const expectedString = "******";
        assert.equal(alternatePattern(1, 6), expectedString);
    })
 
    it('should return rows with multiple columns when greater value for column is provided', function() {
        const expectedString = ['*', '-', '*'].join("\n");
 
        assert.equal(alternatePattern(3, 1), expectedString);
    })
 
    it('should return reactangle with multiple columns and multiple columns when greater values are provided', function() {
        const expectedString = ['****', '----', '****'].join("\n");
 
        assert.equal(alternatePattern(3, 4), expectedString);
    })
 
 
    it('should return nothing when negative diamnetions are provided', function() {
        const expectedString = "";
 
        assert.equal(alternatePattern(-3, -4), expectedString);
    })
});