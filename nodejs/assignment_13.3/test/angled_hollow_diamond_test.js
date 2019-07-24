var angledHollowDiamond= require('../angled_hollow_diamond.js');
var assert = require('assert');
 
 
describe('Angled Hollow Diamond', function() {
    it('should return nothing when 0 value is provided', function() {
        const expectedString = "";
        assert.equal(angledHollowDiamond(0), expectedString);
    });
 
    it('should return one star when 1 value is provided', function() {
        const expectedString = "*";
        assert.equal(angledHollowDiamond(1), expectedString);
    })
 
 
    it('should return diamond with multiple lines when greater value is provided', function() {
        const expectedString = ['*', '/ \', '*   *', '\ /', '*'].join("\n");

        assert.equal(angledHollowDiamond(5), expectedString);
    })
 
 
    it('should return nothing when negative value is provided', function() {
        const expectedString = "";
 
        assert.equal(angledHollowDiamond(-4), expectedString);
    })
});