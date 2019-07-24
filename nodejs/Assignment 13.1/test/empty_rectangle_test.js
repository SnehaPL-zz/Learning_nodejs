var assert = require('assert');
var emptyReactangle = require('./empty_rectangle.js'); 
 
describe('Empty Rectangle', function() {
    it('should return nothing when 0, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(emptyReactangle(0, 0), expectedString);
    });
 
    it('should return nothing when 10, 0 diamentions are provided', function() {
        const expectedString = "";
        assert.equal(emptyReactangle(0, 0), expectedString);
    });
 
    it('should return reactangle with multiple rows when greater value for rows is provided', function() {
        const expectedString = "******";
        assert.equal(emptyReactangle(1, 6), expectedString);
    })
 
    it('should return reactangle with multiple columns and multiple columns when greater values are provided', function() {
        const expectedString = ['****', '*  *', '****'].join("\n");
 
        assert.equal(emptyReactangle(3, 4), expectedString);
    })
 
 
    it('should return nothing when negative diamnetions are provided', function() {
        const expectedString = "";
 
        assert.equal(emptyReactangle(-3, -4), expectedString);
    })
});