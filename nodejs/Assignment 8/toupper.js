var str="the quick brown fox";
upper(str);
function upper(str1)
{
	var len=str1.length;
	for(i=0;i<len;i++)
	{
		if(i==0)
		{
			var a=str1[i].toUpperCase();
			str1=str1.replace(str1[i],a);
			console.log(str1);
		}
		if(str1[i].includes(" ")==1)
		{
			var b=str1[i+1].toUpperCase();
			str1=str1.replace(str[i+1],b);
			console.log(str1);
		}
	}
}