var arr=[5,10,75,60,20,35,67,84];
arr.splice(3,1);
console.log(arr);
var arr1=[3,4,5,6,7,8,9,10,11];
delete arr1[5];
console.log(arr1);
var arr2=[6,5,4,3,2];
arr2.pop();
console.log(arr2);
var arr3=[1,2,3,4];
arr3.shift();
console.log(arr3);
var arr4=[1,2,3,4,5,6,7];
var len=arr4.length;
for(i=0;i<len;i++)
{
	arr4.splice(0,1);
}
console.log(arr4);
