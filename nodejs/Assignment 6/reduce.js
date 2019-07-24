var arr=[5,6,10,15,20,8,34,50,2];
var reduced=arr.reduce(grater,[]);
function grater(arr1,item)
{
	if(item>=10)
	{
		arr1.push(item);
	}
	return arr1;
}
console.log(reduced);