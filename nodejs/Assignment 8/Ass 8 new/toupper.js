var str="the quick brown fox";
var arr=str.split(" ");
var newarr=[];
newarr=arr.map(upper);
var newstr=newarr.join(" ");
console.log(newstr);
function upper(str1)
{
	var a=str1[0].toUpperCase();
	str1=str1.replace(str1[0],a);
	return str1;
}