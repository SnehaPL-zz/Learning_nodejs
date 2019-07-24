var assert = require('assert');
var repeatedHollowRectangle = require('../repeated_hollow_rectangle.js'); 
 
describe('Repeated Hollow Rectangle', function() {
    it('should return nothing when 0, 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(repeatedHollowRectangle(0, 0, 0), expectedString);
    });
 
    it('should return nothing when 10, 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(repeatedHollowRectangle(0, 0, 0), expectedString);
    });
 
    it('should return reactangle with multiple columns when greater value for column is provided', function() {
        const expectedString = "******";
        assert.equal(repeatedHollowRectangle(1, 6, 1), expectedString);
    })
 
    it('should return multiple reactangle with multiple columns and multiple rows when greater values are provided', function() {
        const expectedString = [['****', '*  *', '****'].join("\n"),['****', '*  *', '****'].join("\n")].join("\n\n");
 
        assert.equal(repeatedHollowRectangle(3, 4, 2), expectedString);
    })
 
 
    it('should return nothing when negative diamnetions are provided', function() {
        const expectedString = "";
 
        assert.equal(repeatedHollowRectangle(-3, -4), expectedString);
    })
});