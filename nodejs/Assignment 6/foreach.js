var arr=[5,8,10,2];
function Fact(a)
{
	var fact=1;
	console.log('Factorial of '+a+' is :');
	for(i=a;i>0;i--)
	{
		fact=fact*i;
	}
	console.log(fact);
}
arr.forEach(Fact);