var str="thequickbrownfoxjumpsoverthelazydog";
uniqchar(str);
function uniqchar(str1)
{
	var str2="";
	var len=str1.length;
	for(i=0;i<len;i++)
	{
		if(str2.includes(str1[i])!=1)
		{
			str2=str2.concat(str1[i]);
		}
	}
	console.log(str2);
}