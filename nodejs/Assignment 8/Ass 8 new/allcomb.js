var str="dog";
var arr=str.split("");
var len=arr.length;
arr.filter(allcomb);
function allcomb(arr1,count)
{
	console.log(arr1);
	for(i=count+1;i<len;i++)
	{
		arr1=arr1.concat(arr[i]);
		console.log(arr1);
	}	
}