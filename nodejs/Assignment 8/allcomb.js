var str="sneha";
var len=str.length;
for(i=0;i<len;i++)
{
	var a=len-i;
	for(j=1;j<=a;j++)
	{
		console.log(str.substr(i,j));
	}
}