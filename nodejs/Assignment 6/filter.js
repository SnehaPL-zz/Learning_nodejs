var arr1=[5,20,34,91,56,34,98];
var arr2=[0,1,5,6];
var a=arr1.filter(sum);
function sum(i,count)
{
	return arr2.includes(count);
}
var sum=0;
for(j=0;j<a.length;j++)
{
	sum=sum+a[j];
}
console.log(a);
console.log(sum);