var rightAlignedTriangle= require('../right_aligned_triangle.js');
var assert = require('assert');
 
 
describe('Right Aligned Triangle', function() {
    it('should return nothing when 0 line is provided', function() {
        const expectedString = "";
        assert.equal(rightAlignedTriangle(0), expectedString);
    });
 
    it('should return one star when 1 line is provided', function() {
        const expectedString = "*";
        assert.equal(rightAlignedTriangle(1), expectedString);
    })
 
 
    it('should return trianlge with multiple lines when greater value for line is provided', function() {
        const expectedString = ['    *', '   **', '  ***', ' ****', '*****'].join("\n");
 
        assert.equal(rightAlignedTriangle(5), expectedString);
    })
 
 
    it('should return nothing when negative no is provided', function() {
        const expectedString = "";
 
        assert.equal(rightAlignedTriangle(-4), expectedString);
    })
});