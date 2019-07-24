function Fact(a)
{
	for(i=a;i>0;i--)
	{
		fact=fact*i;
	}
	return fact;
}
var x=5;
var fact=1;
var Factorial=Fact(x);
console.log(Factorial);