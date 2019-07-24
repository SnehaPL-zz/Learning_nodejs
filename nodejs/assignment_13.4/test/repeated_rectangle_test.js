var assert = require('assert');
var repeatedRectangle = require('../repeated_rectangle.js'); 
 
describe('Repeated Rectangle', function() {
    it('should return nothing when 0, 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(repeatedRectangle(0, 0, 0), expectedString);
    });
 
    it('should return nothing when 10, 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(repeatedRectangle(0, 0, 0), expectedString);
    });
 
    it('should return reactangle with multiple columns when greater value for column is provided', function() {
        const expectedString = "******";
        assert.equal(repeatedRectangle(1, 6, 1), expectedString);
    })
 
    it('should return multiple reactangle with multiple columns and multiple rows when greater values are provided', function() {
        const expectedString = [['****', '****', '****'].join("\n"),['****', '****', '****'].join("\n")].join("\n\n");
 
        assert.equal(repeatedRectangle(3, 4, 2), expectedString);
    })
 
 
    it('should return nothing when negative diamnetions are provided', function() {
        const expectedString = "";
 
        assert.equal(repeatedRectangle(-3, -4), expectedString);
    })
});