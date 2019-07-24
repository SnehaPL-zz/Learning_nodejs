var str="Web Development Tutorial";
function long(str1)
{
	var arr=str1.split(" ");
	var len=arr.length;
	var x=0;
	for(i=0;i<len;i++)
	{
		var a=arr[i].length;
		if(a>x)
		{
			var word=arr[i];
			x=a;
		}
	}
	console.log(word);
}
long(str);