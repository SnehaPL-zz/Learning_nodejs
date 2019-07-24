var diamondPattern= require('../diamond_pattern.js');
var assert = require('assert');
 
 
describe('Diamond Pattern', function() {
    it('should return nothing when 0 value is provided', function() {
        const expectedString = "";
        assert.equal(diamondPattern(0), expectedString);
    });
 
    it('should return one star when 1 value is provided', function() {
        const expectedString = "*";
        assert.equal(diamondPattern(1), expectedString);
    })
 
 
    it('should return diamond with multiple lines when greater value is provided', function() {
        const expectedString = ['*', '***', '*****', '***', '*'].join("\n");
 
        assert.equal(diamondPattern(5), expectedString);
    })
 
 
    it('should return nothing when negative value is provided', function() {
        const expectedString = "";
 
        assert.equal(diamondPattern(-4), expectedString);
    })
});