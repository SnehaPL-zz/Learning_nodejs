var str="The quick brown fox";
vowel(str);
function vowel(str1)
{
	var count=0;
	var s=str1.split("");
	var len=s.length;
	for(i=0;i<len;i++)
	{
		if(s[i].includes("a")==1)
		{
			count=count+1;
		}
		if(s[i].includes("e")==1)
		{
			count=count+1;
		}
		if(s[i].includes("i")==1)
		{
			count=count+1;
		}
		if(s[i].includes("o")==1)
		{
			count=count+1;
		}
		if(s[i].includes("u")==1)
		{
			count=count+1;
		}
	}
	console.log(count);
}