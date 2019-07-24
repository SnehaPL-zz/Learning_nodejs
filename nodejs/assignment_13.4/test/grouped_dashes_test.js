var assert = require('assert');
var groupedDashes = require('../grouped_dashes.js'); 
 
describe('Grouped Dashes', function() {
    it('should return nothing when 0, 0 values are provided', function() {
        const expectedString = "";
        assert.equal(groupedDashes(0, 0), expectedString);
    });
 
    it('should return nothing when 10, 0 values are provided', function() {
        const expectedString = "";
        assert.equal(groupedDashes(0, 0), expectedString);
    });
 
    it('should return single with multiple dashes when greater value for size and 1 value for group is provided', function() {
        const expectedString = "------";
        assert.equal(groupedDashes(6, 1), expectedString);
    })
 
    it('should return multiple groups with multiple dashes when greater values are provided', function() {
        const expectedString = ['---', '---', '---', '---'].join("\n\n");
 
        assert.equal(groupedDashes(3, 4), expectedString);
    })
 
 
    it('should return nothing when negative values are provided', function() {
        const expectedString = "";
 
        assert.equal(groupedDashes(-3, -4), expectedString);
    })
});