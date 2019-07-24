var assert=require('assert');
var calc=require('./demo.js');
describe('Tests', function()
{
it('returns 10+5=15', function(done)
{
assert.equal(calc.addition(10,5),15);
done();
});
it('returns 10-5=5', function(done)
{
assert.equal(calc.subtraction(10,5),5);
done();
});
it('returns 10*5=50', function(done)
{
assert.equal(calc.multipliction(10,5),50);
done();
});
it('returns 10/5=2', function(done)
{
assert.equal(calc.division(10,5),2);
done();
});
});