var arr=[1,5,8,6,10,9,15,20];
var sum=0;
for(i=0;i<arr.length;i++)
{
	if(arr[i]%2==0)
	{
		sum=sum+arr[i];
	}
}
console.log(sum);