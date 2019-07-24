function fibonacci(a,b,c)
{
	var x=a;
	var y=b;
	console.log(x);
	console.log(y);
	for(i=c;i>=3;i--)
	{
		z=x+y;
		console.log(z);
		x=y;
		y=z;
	}
}
var p=0;
var q=1;
var r=8;
fibonacci(p,q,r);