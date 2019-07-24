function Armstrong(a)
{
	i=a;
	var b=number(a);
	while(i>0)
	{
		no=i%10;
		i=parseInt(i/10);
		count=count+multi(no,b);
	}
	if(count==a)
	{
		console.log('Number is Armstrong');
	}
	else
	{
		console.log('Number is Not Armstrong');
	}
}
function multi(s,y)
{	
	var z=y
	var r=s;
	var A=1;
	for(j=z;j>0;j--)
	{
		A=A*r;
	}
	return(A);
}
function number(m)
{
	var p=m;
	while(p>0)
	{
		p=parseInt(p/10);
		l=l+1;
	}
	return l;
}
var x=371;
var count=0;
var l=0;
var no=0;
Armstrong(x);